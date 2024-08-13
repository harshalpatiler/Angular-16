import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.ele.nativeElement, 'mousein');
  }
  @HostListener('mouseout') mouseOut() {
    this.renderer.removeClass(this.ele.nativeElement,'mousein')
  }
}
