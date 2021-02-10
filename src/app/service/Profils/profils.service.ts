import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {


  private base_profils = 'http://127.0.0.1:8000/api/admin/profils';

  private _refreshNeeded$ = new Subject<void>() ;

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  constructor(private http: HttpClient) { }

  getProfils(): any {
    return this.http.get(this.base_profils);
  }

  getUsersOfOneProfil(id: number): any{
    return this.http.get(`${this.base_profils}/${id}/users`).pipe(
      map(
        res => {
          return res
        }
      )
    );
  }

  getProfilById(id: number): any {
    return this.http.get(`${this.base_profils}/${id}`).pipe(
      map(
        res => {
          return res
        }
      )
    );
  }

  addProfil(profil: NgForm): any {
    return this.http.post(this.base_profils, profil).pipe(
      map( data => {
        console.log(data);
      }),
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  deleteProfil(id: number): any {
    return this.http.delete(`${this.base_profils}/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

}
