import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Storage} from 'aws-amplify';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  
  ngx_toast_index_success:number = 1;
  ngx_toast_index_error:number = 1;
  
  SuccessfulFileUpload:number = 0;
  UnsuccessfulFileUpload:number = 0;

  errorMessages:string = "";
  successMessage:string = "";

  @ViewChild('filePatient') filePatient: ElementRef;
  @ViewChild('fileLab') fileLab: ElementRef;
  @ViewChild('fileCase') fileCase: ElementRef;
  @ViewChild('fileMedication') fileMedication: ElementRef;
  @ViewChild('fileSurgical') fileSurgical: ElementRef;
  
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.start()
  }

  start(){
    document.getElementById("displayUploadStatus").style.display = "none"
  }

  async uploadFile() {
    //const result = await Storage.put(this.file.nativeElement.files.item(0).name, this.file.nativeElement.files.item(0));
    
    this.SuccessfulFileUpload = 0; // reset count
    this.UnsuccessfulFileUpload = 0; // reset count
    this.ngx_toast_index_success = 1; // reset index
    this.ngx_toast_index_error = 1; // reset index 

    // Check for PATIENT Data file
    if(this.filePatient.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.filePatient.nativeElement.files.item(0).name)){
        //const result = await Storage.put(this.filePatient.nativeElement.files.item(0).name, this.filePatient.nativeElement.files.item(0));
      }
    } else {
      console.log(" Patient Data is not included")
    }

    // Check for LAB Data file
    if(this.fileLab.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileLab.nativeElement.files.item(0).name)){
        //const result = await Storage.put(this.fileLab.nativeElement.files.item(0).name, this.fileLab.nativeElement.files.item(0));
      }
    } else {
      console.log(" Lab Data is not included")
    }

    // Check for CASE Data file
    if(this.fileCase.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileCase.nativeElement.files.item(0).name)){
        //const result = await Storage.put(this.fileCase.nativeElement.files.item(0).name, this.fileCase.nativeElement.files.item(0));
      }
    } else {
      console.log(" Case Data is not included")
    }

    // Check for MEDICATION Data file
    if(this.fileMedication.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileMedication.nativeElement.files.item(0).name)){
        //const result = await Storage.put(this.fileMedication.nativeElement.files.item(0).name, this.fileMedication.nativeElement.files.item(0));
      }
    } else {
      console.log(" Medication Data is not included")
    }

    // Check for SURGICAL Data file
    if(this.fileSurgical.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileSurgical.nativeElement.files.item(0).name)){
        //const result = await Storage.put(this.fileSurgical.nativeElement.files.item(0).name, this.fileSurgical.nativeElement.files.item(0));
      }
    } else {
      console.log(" Surgical Data is not included")
    }

    //console.log(this.successMessage);
    //console.log(this.errorMessages);
    if(this.successMessage!=""){
      this.showSuccess();
    }
    if(this.errorMessages!=""){
      this.showError();
    }

    document.getElementById("displayUploadStatus").style.display = "block"

    // this.toastrService.success('Uploaded ' + this.file.nativeElement.files.item(0).name +  ' successfully!', '', {positionClass: 'toast-top-center'});
    // console.log(result);
  }

  private checkFileNamingConvention(input:string):boolean{
    var fileNames:string[] = ["casevisit_test.csv" ,"labresult_test.csv" , "medicationorder_test.csv", "patientdemo_test.csv", "surgical_test.csv"]
    if(fileNames.includes(input.toLowerCase())){
      this.successMessage += this.ngx_toast_index_success + ".) " + input + " " 
      this.ngx_toast_index_success++;
      this.SuccessfulFileUpload++;
      return true
    } else {
      this.errorMessages += this.ngx_toast_index_success + ".) " + input + " "
      this.ngx_toast_index_error++;
      this.UnsuccessfulFileUpload++;
      return false
    }
  }

  public showSuccess() {
    //this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.success('The following file(s) have been Uploaded: ' + this.successMessage +  ' successfully!', '', {positionClass: 'toast-top-center'});
  }
  public showError(){
    this.toastr.error('The following file(s) could not be Uploaded: ' + this.errorMessages + ' unsuccessfully!', '', {positionClass: 'toast-top-center'})
  }
  public closeDisplay(){
    document.getElementById("displayUploadStatus").style.display = "none"
  }

}
