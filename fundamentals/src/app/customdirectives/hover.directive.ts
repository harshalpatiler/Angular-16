import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private ele: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.color') colorname:string = 'orangered'
  @HostBinding('style.fontWeight') weight!:string ;
  @HostListener('mouseenter') onHover(){
    this.colorname = 'blue'
    this.weight = 'bold'
  }
  @HostListener('mouseout') offHover(){
    this.colorname = 'orangered'
    this.weight = 'initial'
  }
}
