import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/authentication/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const helper = new JwtHelperService();
    // On récupère le token stocké dans le localStorage
    const token = this.auth.stockedToken();
    if (this.auth.getToken(token)) {
      // On vérifie la date d'expiration du token
      const expToken = helper.isTokenExpired(token);
      // On execute les actions ci dessous lorsque le token expire
      if (expToken) {
        sessionStorage.removeItem("userToken");
        this.router.navigate(['/login'])
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }


}
