import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fakeData = false;
  loginError = 'Wrong email or password !';

  hide = true;
  helper = new JwtHelperService ();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getToken(credentials: NgForm){
    this.authService.getToken(credentials).subscribe(
      (response: any) => {
        const token = response.token;
        const decodedToken = this.helper.decodeToken (response.token);
        const archived = decodedToken.archived;
        if (archived === 0) {
          localStorage.setItem('userToken', token);
          localStorage.setItem('role', decodedToken.roles[0]);
          if (localStorage.getItem('role') === 'ROLE_ADMIN') {
            this.router.navigate(['/home']);
          }else {
            console.log('Vous n\'etes pas Admin!');
          }
        }else {
          this.router.navigate(['/unauthorized']);
        }
      },
      error => {
        this.fakeData = true;
        return this.loginError;
      }
    );
  }
}
