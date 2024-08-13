import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class AppClassDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @Input() set display(value: Object){
   Object.entries(value).forEach(([key, val])=>{
    if(val){
      this.renderer.addClass(this.elementRef.nativeElement, key)
    }
   })
  }


}
