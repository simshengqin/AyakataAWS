import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../../types/patient';
import {Subscription} from 'rxjs';
import {APIService} from '../../API.service';
import {onAuthUIStateChange} from '@aws-amplify/ui-components';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit, OnDestroy {
  public createForm!: FormGroup;

  /* declare patients variable */
  patients: Array<Patient> = [];
  subscription: Subscription | null | undefined;
  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      Patient_No: ['', Validators.required],
      Case_No: ['', Validators.required],
      Referral_Type_From: ['', Validators.required]
    });

    /* fetch patients when app loads */
    // this.api.ListPatients().then(event => {
    //   this.patients = (event.items as Array<Patient>);
    // });

    /* subscribe to new patients being created */
    // this.subscription = <Subscription> this.api.OnCreatePatientListener.subscribe((event: any) => {
    //   const newPatient = event.value.data.onCreatePatient;
    //   this.patients = [newPatient, ...this.patients];
    // });
  }
  public onCreate(patient: Patient) {
    // this.api.CreatePatient(patient).then(event => {
    //   this.createForm.reset();
    // })
    //   .catch(e => {
    //     console.log('error creating patient...', e);
    //   });
  }

  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
    // this.subscription = null;
    return onAuthUIStateChange;
  }
}
