import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './ParentComponent/parent.component';
import { ChildComponent } from './ChildComponent/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
