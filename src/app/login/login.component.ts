import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fakeData = false;
  loginError = 'invalid email or password !';
  helper = new JwtHelperService ();
  logged = false;

  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  login(credentials: NgForm): void {
    this.logged = true;
    this.fakeData = false;
    return this.authService.getToken(credentials).subscribe(
      (response: any) => {
        const token = response.token;
        localStorage.setItem('userToken', token);
        const decodedToken = this.helper.decodeToken (response.token);
        console.log(decodedToken.id);
        localStorage.setItem('idUser', decodedToken.id)

        const archived = decodedToken.archived;
        if (archived === 0) {
          this.route.navigate(['/home/profils']);
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Accès refusé',
            text: 'Votre compte à été bloqué veuillez contactez l\'administrateur',
            confirmButtonColor: '#008e8e'
          })
        }
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur de connexion',
          text: 'Les informations sont invalides, Reessayez !'
        })
        this.logged = false;
      }
    );
  }
}
