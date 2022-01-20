import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './ParentComponent/parent.component';
import { ChildComponent } from './ChildComponent/child.component';
import { OutputEmitterChildComponent } from './OutputEmitterChildComponent/outputemitterchild.component';
import { Feature1Module } from './feature1.module';
import { Feature2Module } from './feature2/feature2.module';

@NgModule({
  imports: [BrowserModule, FormsModule, Feature1Module, Feature2Module],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    OutputEmitterChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
