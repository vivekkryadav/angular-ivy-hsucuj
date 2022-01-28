import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarenumber',
})
export class SquarePipe implements PipeTransform {
  transform(inputnumber: number): number {
    return inputnumber * inputnumber;
  }
}
