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
import { CounterService } from './Services/counter.service';
import { NewparentComponent } from './newparent/newparent.component';
import { NewchildComponent } from './newchild/newchild.component';
import { HighlightDirective } from './highlight.directive';
import { ParenthooksdemoComponent } from './parenthooksdemo/parenthooksdemo.component';
import { ChildhooksdemoComponent } from './childhooksdemo/childhooksdemo.component';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { FetchDataAPIService } from './Services/fetch-data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Feature1Module,
    Feature2Module,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    OutputEmitterChildComponent,
    NewparentComponent,
    NewchildComponent,
    HighlightDirective,
    ParenthooksdemoComponent,
    ChildhooksdemoComponent,
    ObservabledemoComponent,
    ServicedemoComponent,
  ],
  //providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
