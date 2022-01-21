import { Component, VERSION } from '@angular/core';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  newName = 'Student';
}
