import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) { }

  getToken(credentials: any): any {
    return this.http.post(this.token, credentials);
  }

  stockedToken(): any{
    return localStorage.getItem('userToken');
  }

  logout(): any {
    return localStorage.removeItem('userToken');
  }

}
