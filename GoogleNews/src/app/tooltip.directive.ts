import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() appTooltip!:string;
  
  element!:HTMLElement;
  constructor(private el:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter')
  onMouseEnter(){
    let topPos!:number;
    let leftPos!:number;
    let position = this.el.nativeElement.getBoundingClientRect();
    this.element=this.renderer.createElement("div");
    this.element.textContent=this.appTooltip;
    this.renderer.appendChild(this.el.nativeElement,this.element);
    let xPos = position.left;
    let yPos = position.top;
    let parentHeight = position.height;
    let parentWidth = position.width;
    topPos=yPos+parentHeight;
    leftPos=xPos+(parentWidth/2);
    this.renderer.setStyle(this.element,'position','fixed');
    this.renderer.setStyle(this.element,'top',`${topPos}px`);
    this.renderer.setStyle(this.element,'left',`${leftPos}px`);
    this.renderer.setStyle(this.element,'backgroundColor','#000');
    this.renderer.setStyle(this.element,'color','#fff');
    this.renderer.setStyle(this.element,'padding','4px');
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.remove();
  }

}
