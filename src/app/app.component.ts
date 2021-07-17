import {Component, ChangeDetectorRef, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Patient} from '../types/patient';
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

  /* declare patients variable */
  patients: Array<Patient> = [];
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

    /* fetch patients when app loads */
    this.api.ListPatients().then(event => {
      this.patients = (event.items as Array<Patient>);
    });

    /* subscribe to new patients being created */
    this.subscription = <Subscription> this.api.OnCreatePatientListener.subscribe((event: any) => {
      const newPatient = event.value.data.onCreatePatient;
      this.patients = [newPatient, ...this.patients];
    });
  }
  public onCreate(patient: Patient) {
    this.api.CreatePatient(patient).then(event => {
      this.createForm.reset();
    })
      .catch(e => {
        console.log('error creating patient...', e);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    return onAuthUIStateChange;
  }
}
