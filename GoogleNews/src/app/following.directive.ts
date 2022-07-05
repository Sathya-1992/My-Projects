import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFollowing]'
})
export class FollowingDirective {
  @Input() appFollowing:any;
  constructor(private el:ElementRef, private renderer:Renderer2) {}
  ngDoCheck() {
    if(this.appFollowing.value){
      this.el.nativeElement.lastChild.textContent = "Following";
    }
    else{
      this.el.nativeElement.lastChild.textContent = "Follow";
    }
  }

}
