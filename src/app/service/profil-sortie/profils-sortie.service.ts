import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilsSortieService {

  private base_profilsSortie = 'http://127.0.0.1:8000/api/admin/profilsorties';

  private _refreshNeeded$ = new Subject<void>();

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  constructor(private http: HttpClient) { }

  getProfilsSortie(): any {
    return this.http.get(this.base_profilsSortie);
  }

  getProfilSortieById(id: number): any {
    return this.http.get(`${this.base_profilsSortie}/${id}`)
  }

  updateProfilSortie(id: number, libelle: object): any {
    return this.http.put(`${this.base_profilsSortie}/${id}`, libelle).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  deleteProfilSortie(id: number): any {
    return this.http.delete(`${this.base_profilsSortie}/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

}
