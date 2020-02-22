import {Directive, ElementRef, HostBinding, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
//  build a dropdown directive, which attaches to this
//  class, whenever we click on it or remove it once
//  we click a second time

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementClass(el.nativeElement, 'open', true);
  }

}
