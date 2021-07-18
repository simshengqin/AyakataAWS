import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header', // name of this UI dulpicate
  templateUrl: './header.component.html', //FE, UI
  styleUrls: ['./header.component.css'] //FE, style
})
export class HeaderComponent implements OnInit {
  url: string; //name of file
  username: string;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
    this.username = localStorage.getItem("username"); //get cookies
  }//ngOnInit --> run when components start

}
