import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Storage} from 'aws-amplify';
import {ToastrService} from 'ngx-toastr';
import {NgxCsvParser} from "ngx-csv-parser";
import {APIService} from "../../API.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  files: File[] = [];

  fileNames:string[] = [
    "casevisit_test.csv" ,
    "labresult_test.csv" ,
    "medicationorder_test.csv",
    "patientdemo_test.csv",
    "surgical_test.csv"
  ]

  ngx_toast_index_success:number = 1;
  ngx_toast_index_error:number = 1;

  SuccessfulFileUpload:number = 0;
  UnsuccessfulFileUpload:number = 0;

  errorMessages:string = "";
  successMessage:string = "";

  /*
  @ViewChild('filePatient') filePatient: ElementRef;
  @ViewChild('fileLab') fileLab: ElementRef;
  @ViewChild('fileCase') fileCase: ElementRef;
  @ViewChild('fileMedication') fileMedication: ElementRef;
  @ViewChild('fileSurgical') fileSurgical: ElementRef;
  */

  constructor(private toastr: ToastrService, private ngxCsvParser: NgxCsvParser, private api: APIService, ) { }

  ngOnInit(): void {
    this.start()
  }

  // NGX Dropzone
  public onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  start(){
    document.getElementById("displayUploadStatus").style.display = "none"
  }

  async uploadFile() {

    this.SuccessfulFileUpload = 0; // reset count
    this.UnsuccessfulFileUpload = 0; // reset count
    this.ngx_toast_index_success = 1; // reset index
    this.ngx_toast_index_error = 1; // reset index

    for(var ele of this.files){
      if(this.fileNames.includes(ele.name.toLowerCase())){
        this.ngx_toast_index_success++;
        this.SuccessfulFileUpload++;
        const result = await Storage.put(ele.name, ele);
        const patientCount = 0;
        const patients = new Set();
        this.ngxCsvParser.parse(ele, { header: true, delimiter: ',' })
          .pipe().subscribe(async (csvRecords: Array<any>) => {
          console.log('csvRecords: ', csvRecords);
          for (const csvRecord of csvRecords) {
            patients.add(csvRecord['Patient No']);
          }
          const newTask = {
            filename: ele.name,
            uploadDate: Date.now(),
            patientCount: patients.size,
            reportID: null
          };
          console.log(newTask);
          await this.api.CreateTask(newTask);
        });


      } else {
        this.errorMessages += this.ngx_toast_index_error + ".) " + ele.name
        this.ngx_toast_index_error++;
        this.UnsuccessfulFileUpload++;
      }
    }

    document.getElementById("displayUploadStatus").style.display = "block";

    if(this.SuccessfulFileUpload>0){
      this.showSuccess();
    }
    if(this.UnsuccessfulFileUpload>0){
      this.showError();
    }

    this.files = [];

  }

  public showSuccess() {
    this.toastr.success( this.SuccessfulFileUpload + ' File(s) have been Uploaded successfully!', '', {positionClass: 'toast-top-center'});
  }
  public showError(){
    this.toastr.error('The following file(s) could not be Uploaded: ' + this.errorMessages + ' unsuccessfully!', '', {positionClass: 'toast-top-center'})
  }
  public closeDisplay(){
    document.getElementById("displayUploadStatus").style.display = "none"
  }

  /*
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
        const result = await Storage.put(this.filePatient.nativeElement.files.item(0).name, this.filePatient.nativeElement.files.item(0));
      }
    } else {
      console.log(" Patient Data is not included")
    }

    // Check for LAB Data file
    if(this.fileLab.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileLab.nativeElement.files.item(0).name)){
        const result = await Storage.put(this.fileLab.nativeElement.files.item(0).name, this.fileLab.nativeElement.files.item(0));
      }
    } else {
      console.log(" Lab Data is not included")
    }

    // Check for CASE Data file
    if(this.fileCase.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileCase.nativeElement.files.item(0).name)){
        const result = await Storage.put(this.fileCase.nativeElement.files.item(0).name, this.fileCase.nativeElement.files.item(0));
      }
    } else {
      console.log(" Case Data is not included")
    }

    // Check for MEDICATION Data file
    if(this.fileMedication.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileMedication.nativeElement.files.item(0).name)){
        const result = await Storage.put(this.fileMedication.nativeElement.files.item(0).name, this.fileMedication.nativeElement.files.item(0));
      }
    } else {
      console.log(" Medication Data is not included")
    }

    // Check for SURGICAL Data file
    if(this.fileSurgical.nativeElement.files.item(0) != null){
      if(this.checkFileNamingConvention(this.fileSurgical.nativeElement.files.item(0).name)){
        const result = await Storage.put(this.fileSurgical.nativeElement.files.item(0).name, this.fileSurgical.nativeElement.files.item(0));
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


  public closeDisplay(){
    document.getElementById("displayUploadStatus").style.display = "none"
  } */

}
