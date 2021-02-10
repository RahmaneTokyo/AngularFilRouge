import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Competences} from '../../home/competences/competences.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  private _refreshNeeded$ = new Subject<void>() ;

  refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  private base_competences = 'http://127.0.0.1:8000/api/admin/competences';

  constructor(private http: HttpClient) { }

  getCompetences(): any {
    return this.http.get(this.base_competences).pipe(
      map(
        res => {
          return res;
        }
      )
    );
  }

  getCompetenceById(id: number): any {
    return this.http.get(`${this.base_competences}/${id}`);
  }

  addCompetence(competence: any): any {
    return this.http.post(this.base_competences, competence).subscribe(
      res => {
        Swal.fire(
          {
            icon: 'success',
            title: 'Compétences added!',
            footer: 'Go to <a href="/home/groupe-competences">Groupe Compétence list</a>'
          }
        );
      }
    );
  }

  deleteCompetence(id: number): any {
    return this.http.delete(`${this.base_competences}/${id}`);
  }

}
