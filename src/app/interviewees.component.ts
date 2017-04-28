import { Component } from '@angular/core';
import { Interviewer, Interviewee } from './entity';
import { InterviewHttpService } from "./interview.service";
import { HighLight } from "./status.directive";

@Component({
  selector: 'interviewees',
  templateUrl: './interviewees.component.html'

})
export class IntervieweesComponent {
  interviewees : Interviewee[] = [];
  constructor(
    private interviewHttpService : InterviewHttpService
  ){
    this.loadInterviewees();
  }

  private loadInterviewees():void{
    this.interviewHttpService.getInterviewInfor()
                              .map(res=>res.json())
                              .subscribe(
                                data => this.interviewees = data["interviewees"],
                                error => alert("faild to get interviewees information")
                              )
  }
}
