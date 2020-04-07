import { Directive, Output, HostListener, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter();

  constructor(private _elRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClick(target): void {
    if (!target) return;

    if (!this._elRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
}
