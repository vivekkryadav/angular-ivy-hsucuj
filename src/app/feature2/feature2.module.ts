import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewcounterComponent } from '../newcounter/newcounter.component';
import { HelloComponent } from '../hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewcounterComponent],
  exports: [NewcounterComponent],
})
export class Feature2Module {}
