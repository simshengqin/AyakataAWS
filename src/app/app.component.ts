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

  @ViewChild('file') file: ElementRef;
  constructor(private ref: ChangeDetectorRef) { }

  async ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
