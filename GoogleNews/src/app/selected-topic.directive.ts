import { Directive, DoCheck, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectedTopic]'
})
export class SelectedTopicDirective implements DoCheck{
  @Input() appSelectedTopic:any;
  constructor(private el:ElementRef, private renderer:Renderer2) {}
  ngDoCheck() {
    if(this.appSelectedTopic.value){
      this.renderer.addClass(this.el.nativeElement,'clickedTopic');
    }
    else{
      this.renderer.removeClass(this.el.nativeElement,'clickedTopic')
    }
  }
}
