import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  Input,
  Optional,
} from '@angular/core';
import { LoggerService } from './Services/logger.service';

@Directive({
  selector: '[appHighlight]',
  //providers: [LoggerService]
})
export class HighlightDirective {
  @Input('appHighlight')
  color: string;
  constructor(
    private elementsvc: ElementRef,
    @Optional() @Host() private logger: LoggerService
  ) {
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
    if (!this.logger) {
      this.elementsvc.nativeElement.children[0].style.backgroundColor = 'red';
    } else {
      this.elementsvc.nativeElement.children[0].style.backgroundColor = 'green';
    }
  }

  private ChangeColor(color: string) {
    this.elementsvc.nativeElement.style.backgroundColor = color;
  }
}
