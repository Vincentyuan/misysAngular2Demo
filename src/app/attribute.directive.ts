import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive(
  {
      selector:'[displayTitleNormal]'
  }
)

export class LineThroughDirective{
  @Input('displayTitleNormal') displayTitleNormal :boolean ;

  constructor(private el : ElementRef){
    // set the line-throughdisplay-title

  }
  ngOnInit(){
    this.controlLineThrough();
  }
  ngOnChanges(){
    this.controlLineThrough();
  }
  private controlLineThrough(){
    if(!this.displayTitleNormal){
        this.el.nativeElement.style.textDecoration = 'line-through';
        // alert("sdfa");
      }else{
        this.el.nativeElement.style.textDecoration = '';
      }

  }

}
