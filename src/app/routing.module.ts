import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './app.component';
import { InterviewerComponent } from  './interviewer.component';
import { IntervieweesComponent } from './interviewees.component';

const routes: Routes = [

  { path: 'index',  component: RootComponent },
  { path: 'interviewer', component: InterviewerComponent }
  // ,
  // { path: 'interviewees', component: IntervieweesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
