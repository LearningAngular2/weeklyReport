import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateprojectComponent } from './createproject/createproject.component';
//import { MytaskComponent }   from './mytask/mytask.component';


const routes: Routes = [ 
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createuser',  component : CreateuserComponent },
    {path : 'createproject', component : CreateprojectComponent}
  // { path: 'mytask',  component: MytaskComponent,
  // children:[
  //   { path: '', redirectTo: 'approval', pathMatch: 'full' },
  //   { path: 'approval',  component: ApprovalComponent },
  //   { path: 'exception', component: ExceptionComponent },
  //   { path: 'create-ticket', component : CreateTicketComponent}
  // ] },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

