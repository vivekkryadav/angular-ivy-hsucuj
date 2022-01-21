import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { LoggerService } from './Services/logger.service';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight')
  color: string;
  constructor(private elementsvc: ElementRef, private logger: LoggerService) {
    console.log('Highlight Directive invoked');
  }
  ngOnInit(): void {
    console.log(this.elementsvc.nativeElement.innerText);
  }
  @HostListener('OnMouseHover')
  OnMouseHover(): void {
    console.log('Mouse Hovered!');
    if (this.color == undefined) {
      this.ChangeColor('red');
    } else {
      this.ChangeColor(this.color);
    }
  }
  @HostListener('mouseout')
  OnMouseOut(): void {
    console.log('Mouse Out!');
    this.ChangeColor(null);
  }

  @HostListener('click')
  OnClick() {
    this.logger.Log();
  }

  private ChangeColor(color: string) {
    this.elementsvc.nativeElement.style.backgroundColor = color;
  }
}
