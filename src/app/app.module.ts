import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { InterviewerComponent } from './interviewer.component';
import { IntervieweesComponent } from './interviewees.component';
import { AppRoutingModule } from './routing.module';
import { InterviewHttpService } from './interview.service';
import { HighLight } from "./status.directive";
import { PassDirective } from "./structural.directive";
import { LineThroughDirective } from "./attribute.directive";

@NgModule({
  declarations: [
    RootComponent,
    InterviewerComponent,
    IntervieweesComponent,
    HighLight,
    PassDirective,
    LineThroughDirective
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
