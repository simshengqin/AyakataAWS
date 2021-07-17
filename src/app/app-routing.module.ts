import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { ViewPatientComponent } from './ui/view-patient/view-patient.component';
import { CreatePatientComponent } from './ui/create-patient/create-patient.component';

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
      path: '**',
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
