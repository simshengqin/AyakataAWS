import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../../types/patient';
import {Subscription} from 'rxjs';
import {APIService} from '../../API.service';
import {onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Storage} from 'aws-amplify';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  // Only if patients array is 0
  placeHolder = {Patient_No:"Please Select a Patient", Predicted_Date: "DD/MM/YYYY", Predicted_Months: "0" } 
  reports: any;
  selectedPatientNo: string;
  predictedDate: string = "Predicted Date";
  predictedMonths: string = "Predicted Months";
  patientNo: string = "Patient ID";
  router: any;
  constructor(private api: APIService, private fb: FormBuilder , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {  
    this.createForm = this.fb.group({
      Patient_No: ['', Validators.required],
      Case_No: ['', Validators.required],
      Referral_Type_From: ['', Validators.required]

    });
    this.activatedRoute.queryParams.subscribe(async params => {
      this.selectedPatientNo = params.patientNo;
      this.loadReports();}
      )
    /* fetch patients when app loads */
    //this.api.ListPatients().then(event => {
     //this.patients = (event.items as Array<Patient>);
    //});

    //when patient ID is redirected from home page
    // const appRoutes: Routes = [
    //   { path: 'crisis-center/:param1', component: CrisisListComponent },
    //   { path: 'hero/:param2',      component: view-patientComponent },
    // ];
    
    // @NgModule({
    //   imports: [
    //     RouterModule.forRoot(
    //       appRoutes,
    //       { enableTracing: true } // <-- debugging purposes only
    //     )
    //     // other imports here
    //   ],
    //   ...
    // })

    // export class AppModule { }

    /* subscribe to new patients being created */
    // this.subscription = <Subscription> this.api.OnCreatePatientListener.subscribe((event: any) => {
    //   const newPatient = event.value.data.onCreatePatient;
    //   this.patients = [newPatient, ...this.patients];
    // });
  }
  /*
  public onCreate(patient: Patient) {
    // this.api.CreatePatient(patient).then(event => {
    //   this.createForm.reset();
    // })
    //   .catch(e => {
    //     console.log('error creating patient...', e);
    //   });
  }
  */
  public onCreate(data: any) {
    console.log(data);
  }

  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
    // this.subscription = null;
    return onAuthUIStateChange;
  }
  async loadReports() {
    // this.api.ListReports().then(event => {
    // let reports = event.items as Array<Report>;
    const taskID = '02558c19-ae10-4ebf-8b5f-c8f9cb34a4aa';
    // const storage = this.amplifyService.storage();

    const storageOptions = {
      bucket: 'patientdata10032-dev',
      // see https://github.com/aws/aws-amplify/blob/master/packages/aws-amplify/src/Storage/Storage.ts#L325
      // public appears to be the only option that doesn't append hardcoded values
      customPrefix: {
        public: ''
      },
      download: true ,
      level: 'public'
    };
    await Storage.get( 'public/02558c19-ae10-4ebf-8b5f-c8f9cb34a4aa/output.csv', storageOptions ).then(
      async data => {
        data["Body"].text().then(
          async csvText => { 
            console.log(csvText);
            const csvTextArr = csvText.split('\n');
            // - 1 as there is an empty line at the end
            console.log(this.selectedPatientNo);
            for (let i = 1; i < csvTextArr.length - 1; i++) {
              const lineArr = csvTextArr[i].split(',');
              // const report = {
              //     patientID: lineArr[0],
              //     predictedMonths: lineArr[2],
              //     predictedDate: lineArr[1]
              //   } 
                if (this.selectedPatientNo ==  lineArr[0]) {
                  this.predictedMonths = lineArr[2];
                  this.predictedDate = lineArr[1];
                  // return(this.predictedMonths, this.predictedDate)}
                }
              };
          });
      },
      error => {
        console.log( 'Boo. Err. ', error );
      });
  }
}
