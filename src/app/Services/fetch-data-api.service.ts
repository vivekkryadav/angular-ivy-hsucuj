import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FetchDataAPIService {
  constructor(private http: HttpClient) {}

  public GetAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http:/localhost:3000/users');
  }
  public GetUser(username: String): Observable<any> {
    return this.http.get<any>(
      'http:/localhost:3000/users?username=' + username
    );
  }
  public AddUser(user: any): Observable<any> {
    return this.http.post<any>('http:/localhost:3000/users', user);
  }
}
