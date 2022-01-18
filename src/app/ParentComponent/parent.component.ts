import { Component } from '@angular/core';
@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  nameParent = 'Parent Component';

  newNameParent = 'String interpolation';
  newPropertyname = 'Property Binding';
  colors: string[] = ['Red', 'Green', 'Blue'];
  path: string = './images/logo/newLogo.jpg';

  FormModelParent: string = 'Please Enter your text';

  onClickButton(): void {
    console.log('Button is clicked for event binding' + ' ' + Date());
    alert('I am clicked');
  }
  inputEventHandler(eventPayload: any): void {
    console.log(eventPayload);
  }
}
