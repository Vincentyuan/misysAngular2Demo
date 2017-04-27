import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { InterviewerComponent } from './interviewer.component';
import { IntervieweesComponent } from './interviewees.component';
import { AppRoutingModule } from './routing.module';
import { InterviewHttpService } from './interview.service';
import { InterviewStatus } from "./status.directive";
import { PassDirective } from "./structural.directive";

@NgModule({
  declarations: [
    RootComponent,
    InterviewerComponent,
    IntervieweesComponent,
    InterviewStatus,
    PassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [InterviewHttpService],
  bootstrap: [RootComponent]
})
export class AppModule { }
