import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private base_url = 'http://127.0.0.1:8000/api/admin/users';

  private _refreshNeeded$ = new Subject<void>() ;

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.base_url).pipe(
      map(
        res => {
          return res;
        }
      )
    );
  }

  getUserById(id: number): any {
    return this.http.get(`${this.base_url}/${id}`);
  }

  addUser(users: any){
    return this.http.post(this.base_url,users).pipe(
      map( data => {
        console.log(data);
      }),
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  deleteUser(id: number): any {
    return this.http.delete(`${this.base_url}/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

}
