import {Directive, ElementRef, HostBinding, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
//  build a dropdown directive, which attaches to this
//  class, whenever we click on it or remove it once
//  we click a second time

  // @Input()
  // set appDropdown(condition: boolean) {
  //   if (condition) {
  //   } else {
  //   }
  // }

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // renderer.removeElementClass(this.el.nativeElement, 'open', true);
    this.renderer.addClass(this.el.nativeElement, 'open');
  }

}
