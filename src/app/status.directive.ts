import { Directive, ElementRef, Input , OnChanges, SimpleChanges} from '@angular/core';
@Directive({ selector: '[interviewStatus]' })
export class InterviewStatus {
    constructor( private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
}
