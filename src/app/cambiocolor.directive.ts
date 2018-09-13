import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCambiocolor]'
})
export class CambiocolorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }}


// @HostListener('mouseenter') onMouseEnter() {
//   this.highlight('yellow');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.highlight(null);
// }