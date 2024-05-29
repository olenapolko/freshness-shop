import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSmoothGrow]',
  standalone: true
})
export class SmoothGrowDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setScale(1.2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setScale(1);
  }

  private setScale(scale: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s');
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
  }
}
