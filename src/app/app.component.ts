import {Component, ChangeDetectorRef, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Restaurant} from '../types/restaurant';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {APIService} from './API.service';
import Amplify, { Auth, Storage } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'authenticator';
  user: CognitoUserInterface;
  authState: AuthState;
  public createForm!: FormGroup;

  /* declare restaurants variable */
  restaurants: Array<Restaurant> = [];
  subscription: Subscription | null | undefined;
  @ViewChild('file') file: ElementRef;
  constructor(private api: APIService, private fb: FormBuilder, private ref: ChangeDetectorRef) { }

  async ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });

    /* fetch restaurants when app loads */
    this.api.ListRestaurants().then(event => {
      this.restaurants = (event.items as Array<Restaurant>);
    });

    /* subscribe to new restaurants being created */
    this.subscription = <Subscription> this.api.OnCreateRestaurantListener.subscribe((event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });
  }
  public onCreate(restaurant: Restaurant) {
    this.api.CreateRestaurant(restaurant).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
      .catch(e => {
        console.log('error creating restaurant...', e);
      });
  }
  async uploadFile() {
    const result = await Storage.put(this.file.nativeElement.files.item(0).name, this.file.nativeElement.files.item(0));
    // console.log(result);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    return onAuthUIStateChange;
  }
}
