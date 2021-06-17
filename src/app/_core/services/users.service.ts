import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

interface UserLogin {
  username: '';
  password: '';
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  userSubject = new Subject<string>();

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('https://fakestoreapi.com/users');
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post<any>(
      'https://fakestoreapi.com/auth/login',
      userLogin
    );
  }
}
