import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.css'],
})
export class NewparentComponent implements OnInit {
  constructor(@Optional() private logger: LoggerService) {}

  ngOnInit() {}
  Log(): void {
    this.logger.Log();
  }
}
