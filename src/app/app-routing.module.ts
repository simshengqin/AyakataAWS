import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { ViewPatientComponent } from './ui/view-patient/view-patient.component';
import { CreatePatientComponent } from './ui/create-patient/create-patient.component';
import { MyTaskComponent } from './ui/my-task/my-task.component';
import { MyNotificationComponent } from './ui/my-notification/my-notification.component';
import { MyReportComponent } from './ui/my-report/my-report.component';
import { MyAccountComponent } from './ui/my-account/my-account.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      pathMatch: 'full',
      component: HomeComponent
    },
    {
      path: 'view-patient',
      pathMatch: 'full',
      component: ViewPatientComponent
    },
    {
      path: 'create-patient',
      pathMatch: 'full',
      component: CreatePatientComponent
    },
    {
      path: 'my-task',
      pathMatch: 'full',
      component: MyTaskComponent
    },
    {
      path: 'my-notification',
      pathMatch: 'full',
      component: MyNotificationComponent
    },
    {
      path: 'my-report',
      pathMatch: 'full',
      component: MyReportComponent
    },
    {
      path: 'my-account',
      pathMatch: 'full',
      component: MyAccountComponent
    },
    {
      path: '**', // 'else'
      pathMatch: 'full',
      component: HomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
