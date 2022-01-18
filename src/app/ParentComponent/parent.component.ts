import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  nameParent = 'Parent Component';

  newNameParent = 'String interpolation';
  newPropertyname = 'Property Binding';
}
