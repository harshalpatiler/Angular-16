import { Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
 
  @Input() set appStyle(value : Object){
    Object.entries(value).forEach(([key, value])=>{
      this.renderer.setStyle(this.elementRef.nativeElement, key, value)
    })
  }

}
