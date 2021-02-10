import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReferentielsService {

  base_referentiels = 'http://127.0.0.1:8000/api/admin/referentiels';

  private _refreshNeeded$ = new Subject<void>() ;

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  constructor(private http: HttpClient) { }

  getReferentiels(): any {
    return this.http.get(this.base_referentiels).pipe(
      map(
        res => {
          return res;
        }
      )
    );
  }

  addReferentiel(referentiel: any): any {
    return this.http.post(this.base_referentiels, referentiel).pipe(
      map( res => {
        console.log(res);
      }),
      tap( () => {
        this.refreshNeeded$().next();
      })
    );
  }

  deleteReferentiel(id: string): any {
    return this.http.delete(`${this.base_referentiels}/${id}`);
  }

}
