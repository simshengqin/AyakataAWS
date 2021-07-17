import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Storage} from 'aws-amplify';
// import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  @ViewChild('file') file: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  async uploadFile() {
    const result = await Storage.put(this.file.nativeElement.files.item(0).name, this.file.nativeElement.files.item(0));
    // this.toastrService.success('Uploaded ' + this.file.nativeElement.files.item(0).name +  ' successfully!', '', {positionClass: 'toast-top-center'});
    // console.log(result);
  }
}
