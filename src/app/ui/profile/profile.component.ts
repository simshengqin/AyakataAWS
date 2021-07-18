import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;

  constructor() { }

  ngOnInit(): void {
  this.username = localStorage.getItem("username"); //get cookies
  }

}
