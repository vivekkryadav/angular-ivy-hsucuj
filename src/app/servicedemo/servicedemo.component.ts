import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchDataAPIService } from '../Services/fetch-data-api.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css'],
})
export class ServicedemoComponent implements OnInit {
  constructor(private fetchdatasvc: FetchDataAPIService) {}
  public usersList: Observable<any[]>;
  //public userListwithoutPipe: any[];
  public username: String;
  public country: string;
  ngOnInit() {}

  GetAllUsersList() {
    this.usersList = this.fetchdatasvc.GetAllUsers();
    //second way is without using async pipe as below
    // this.fetchdatasvc.GetAllUsers().subscribe(
    //   (response) => (this.userListwithoutPipe = response),
    //   (error) => console.log('error occured!!')
    // );
  }

  AddingUser(): void {
    let user = {
      empname: this.username,
      country: this.country,
    };
    this.fetchdatasvc.AddUser(user).subscribe(
      (response) => console.log(response),
      (error) => console.log('error occured!!')
    );
  }
}
