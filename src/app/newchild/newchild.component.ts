import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css'],
})
export class NewchildComponent implements OnInit {
  constructor(@Optional() private logger: LoggerService) {}

  ngOnInit() {}
  Log(): void {
    this.logger.Log();
  }
}
