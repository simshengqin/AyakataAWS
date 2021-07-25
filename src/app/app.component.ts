import {Component, ChangeDetectorRef, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'authenticator';
  user: CognitoUserInterface;
  authState: AuthState;
  loggedIn = false;
  isLoginDelayActive = false;
  @ViewChild('file') file: ElementRef;
  constructor(private ref: ChangeDetectorRef) { }

  async ngOnInit() {
    onAuthUIStateChange(async (authState, authData) => {
      console.log(authState);
      this.authState = authState;
      this.loggedIn = false;
      console.log(this.authState);
      if (this.authState === 'signedin') { // || this.authState === 'signin') {
        this.loggedIn = true;
        this.user = authData as CognitoUserInterface;
        localStorage.setItem('username', this.user.username); //setting session name -->cookies
        this.ref.detectChanges();
      }

    });
  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
