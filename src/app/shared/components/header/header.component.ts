import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth, Hub} from 'aws-amplify';
import {Task} from '../../../core/models/task';
import {APIService} from '../../../API.service';

@Component({
  selector: 'app-header', // name of this UI dulpicate
  templateUrl: './header.component.html', // FE, UI
  styleUrls: ['./header.component.css'] // FE, style
})
export class HeaderComponent implements OnInit {
  url: string; // name of file
  username: string;
  newTasks: Array<Task> = [];
  constructor(private router: Router, private api: APIService) { }

  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
    this.username = localStorage.getItem('username'); // get cookies
    this.api.ListTasks().then(event => {
      const tasks = event.items as Array<Task>;
      this.newTasks = [];
      for (const task of tasks) {
        if (task.status2 === 1) {
          this.newTasks.push(task);
        }
      }
    });
  } // ngOnInit --> run when components start
  async handleSignOutButtonClick() {
    try {
      await Auth.signOut();
      Hub.dispatch('UI Auth', {   // channel must be 'UI Auth'
        event: 'AuthStateChange',    // event must be 'AuthStateChange'
        message: 'signedout'    // message must be 'signedout'
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  onViewReport(filename: string) {
    this.router.navigate(['my-report'], { queryParams: { filename }});
  }
}
