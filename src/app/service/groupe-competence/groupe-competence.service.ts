import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GroupeCompetences} from '../../home/groupe-competences/groupe-competences.model';
import Swal from 'sweetalert2';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  private base_groupe_competence = 'http://127.0.0.1:8000/api/admin/grpecompetences';

  private _refreshNeeded$ = new Subject<void>() ;

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  constructor(private http: HttpClient) { }

  getGroupeCompetences(): any {
    return this.http.get(this.base_groupe_competence).pipe(
      map(
          res => {
            return res;
        }
      )
    );
  }

  add(gc:GroupeCompetences) {
    return this.http.post(this.base_groupe_competence, gc/*JSON.stringify(gc)*/).subscribe(
      res => {
        Swal.fire(
          {
            icon: 'success',
            title: 'Groupe de compétences added!',
            footer: 'Go to  ' +
              '<a href="/home/groupe-competences">Groupe Compétence list</a>'
          }
        );
        return res;
      },
      err => {
        return err;
      }
    );
  }

  deleteGroupeCompetence(id: number): any {
    return this.http.delete(`${this.base_groupe_competence}/${id}`);
  }

}
