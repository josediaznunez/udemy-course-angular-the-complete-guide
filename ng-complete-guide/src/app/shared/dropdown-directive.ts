import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Input()
  set appDropdown(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.el.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'open');
    }
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

}
