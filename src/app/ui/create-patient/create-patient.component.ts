import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Storage} from 'aws-amplify';
import {ToastrService} from 'ngx-toastr';
import {NgxCsvParser} from 'ngx-csv-parser';
import {APIService} from '../../API.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Task} from '../../core/models/task';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  files: File[] = [];

  fileNames: string[] = [
    'casevisit_test.csv' ,
    'labresult_test.csv' ,
    'medicationorder_test.csv',
    'patientdemo_test.csv',
    'surgical_test.csv'
  ];

  ngx_toast_index_success = 1;
  ngx_toast_index_error = 1;

  SuccessfulFileUpload = 0;
  UnsuccessfulFileUpload = 0;

  errorMessages = '';
  successMessage = '';
  wrongfileMessage = '';
  missingfileMessage = '';
  hasProcessingTask = false;
  uploadProgress = 0;
  isUploading = false;
  /*
  @ViewChild('filePatient') filePatient: ElementRef;
  @ViewChild('fileLab') fileLab: ElementRef;
  @ViewChild('fileCase') fileCase: ElementRef;
  @ViewChild('fileMedication') fileMedication: ElementRef;
  @ViewChild('fileSurgical') fileSurgical: ElementRef;
  */

  constructor(private toastr: ToastrService, private ngxCsvParser: NgxCsvParser, private api: APIService, private router: Router) { }

  ngOnInit(): void {
    // this.start();
    this.api.ListTasks().then(event => {
      const tasks = event.items as Array<Task>;
      for (const task of tasks) {
        if (task.status2 === 0) {
          this.hasProcessingTask = true;
        }
      }
    });
  }

  // NGX Dropzone
  public onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  public onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  start(){
    document.getElementById('displayUploadStatus').style.display = 'none';
  }

  async uploadFile() {

    this.SuccessfulFileUpload = 0; // reset count
    this.UnsuccessfulFileUpload = 0; // reset count
    this.ngx_toast_index_success = 1; // reset index
    this.ngx_toast_index_error = 1; // reset index
    const uploadedFileNames = [];
    const wrongFileNames = [];
    for (const ele of this.files){
      if (this.fileNames.includes(ele.name.toLowerCase())){
        uploadedFileNames.push(ele.name.toLowerCase());
        // this.ngx_toast_index_success++;
        // this.SuccessfulFileUpload++;
        const patientCount = 0;
        const patients = new Set();
        this.ngxCsvParser.parse(ele, { header: true, delimiter: ',' })
          .pipe().subscribe(async (csvRecords: Array<any>) => {
          console.log('csvRecords: ', csvRecords);
          for (const csvRecord of csvRecords) {
            patients.add(csvRecord['Patient No']);
          }
          // const newNotification = {
          //   taskID:  newTaskDB.id,
          //   filename: ele.name,
          //   isActivated: false,
          //   isRead: false,
          // };
          // console.log(newNotification);
          // await this.api.CreateNotification(newNotification);
        });

      } else {
        wrongFileNames.push(ele.name);
        // this.errorMessages += this.ngx_toast_index_error + '.) ' + ele.name;
        // this.ngx_toast_index_error++;
        // this.UnsuccessfulFileUpload++;
      }
    }

    // document.getElementById('displayUploadStatus').style.display = 'block';

    if (uploadedFileNames.length === 5){
      const newTask = {
        filename: '',
        uploadDate: Date.now(),
        // patientCount: patients.size,
        status2: 0
        // reportID: null,
        // isRead: false
      };
      const newTaskDB = await this.api.CreateTask(newTask);
      this.isUploading = true;
      for (const ele of this.files) {
        // newTaskDB.id
        const result = await Storage.put('aaa' + '/' + ele.name, ele,
          // {progressCallback(progress) {
          //   let uploadProgress = progress.loaded / progress.total * 100;
          //   const progressBar = document.getElementById('progress-bar');
          //   console.log(progressBar);
          //   progressBar.nativeElement.value = String(uploadProgress);
          //     // .setAttribute('value', String(uploadProgress));
          //   console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          //   console.log(uploadProgress);
          //   console.log(progressBar.getAttribute('value'));
          //   }
          // }
          );
      }
      this.showSuccess();
    }
    if (uploadedFileNames.length  < 5){
      const missingFileNames = [];
      for (const fileName of this.fileNames) {
        if (!uploadedFileNames.includes(fileName)) {
          missingFileNames.push(fileName);
        }
      }
      this.wrongfileMessage = '';
      this.missingfileMessage = '';
      if (wrongFileNames.length > 0) {
        this.wrongfileMessage = 'These files have the wrong names: ' + wrongFileNames.join(' , ');
      }
      if (missingFileNames.length > 0) {
        this.missingfileMessage = 'Please upload these files: ' + missingFileNames.join(' , ');
      }

      // this.showError();
    }
    // this.files = [];
  }

  public showSuccess() {
    this.toastr.success( '5 File(s) have been Uploaded successfully!', '', {positionClass: 'toast-top-center'});
    this.router.navigate(['my-task']);
  }

}
