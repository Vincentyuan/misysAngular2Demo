import { Directive, ElementRef, Input , OnChanges, SimpleChanges} from '@angular/core';
@Directive({ selector: '[highlight]' })
export class HighLight {
    constructor( private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
}
