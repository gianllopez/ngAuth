import { Directive, DoCheck, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appRegstrict]' })
export class RegstrictDirective {

  @Input() appRegstrict!: string;

  constructor(private element: ElementRef) {};

  @HostListener('keydown', ['$event']) validate(event: KeyboardEvent): void {
    const { value } = this.element.nativeElement,
    updatedValue = value.concat(event.key),
    regex = new RegExp(this.appRegstrict);
    if (updatedValue && !regex.test(updatedValue) && !['Backspace', 'Tab'].includes(event.key)) {
      event.preventDefault();
    };
  };

};
