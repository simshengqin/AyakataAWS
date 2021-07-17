import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath!:string;

  constructor() { }

  ngOnInit(): void {
    this.imagePath = "../../../assets/images/home/logo-NUHS.png";
  }

}
