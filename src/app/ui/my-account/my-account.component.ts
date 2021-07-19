import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  username: string;

  constructor() { }

  ngOnInit(): void {
  this.username = localStorage.getItem("username"); //get cookies
  }

}
