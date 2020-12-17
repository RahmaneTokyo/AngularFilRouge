import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'http://127.0.0.1:8000/api/login';
  constructor(private  http: HttpClient,private router: Router) { }

  getToken(credentials: any){
    return this.http.post <any>(this.token, credentials);
  }

  getRoleNavigation() {
    if (localStorage.getItem('role') === 'ROLE_ADMIN') {
      this.router.navigate(['/home']);
    }
  }
}
