import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHoverDirective]'
})
export class DarkenOnHoverDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer
) {}

@HostListener('mouseover')
darkenOn() {
  console.log("entrou");
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
}
@HostListener('mouseleave')
darkenOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
}

}
