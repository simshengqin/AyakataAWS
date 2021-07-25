import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; // imports
import { async } from '@angular/core/testing';
import {Storage} from 'aws-amplify';
import {APIService} from '../../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patientNo: string; // :type --> from ngmodel in html
  patientCasenumber: string;
  myForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      'PID': new FormControl(null),
      'PCN': new FormControl(null)
    });
  }

  //
  search(){
    /*
      Function: Need to search Database if patient exist and sent patientid to view-patient component

      Users can serach patient through patientid or patientCasenumber, patientid takes precedence
      if patientid search result, returns null, used patientCasenumber
      if patientCasenumber search result, returns null, inform Users of incorrect search.

    */
    this.router.navigate(['/view-patient'] , {queryParams: { patientNo : this.patientNo }});
  }

  create(){
    // this.router.navigate(['/create-patient']);
    this.router.navigateByUrl('/create-patient');
  }

}
