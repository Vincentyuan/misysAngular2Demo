import { Component } from '@angular/core';
import { InterviewHttpService } from './interview.service';
import { Interviewer, Interviewee } from './entity';
@Component({
  selector: 'interviewer',
  templateUrl: './interviewer.component.html'

})
export class InterviewerComponent {
  //infor = 'i am interviewer!';
  interviewer : Interviewer  = new Interviewer();
  constructor(
    private interviewHttpService :InterviewHttpService
  ){
    this.loadInterviewer();
  }

  private loadInterviewer() : void {
    this.interviewHttpService.getInterviewInfor()
                              .map(res => res.json())
                              .subscribe(
                                data =>this.interviewer = data['interviewer'],
                                error => alert("internet error")
                              );
  }
}
