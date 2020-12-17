import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profil} from '../../models/profil.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  base_url = 'http://127.0.0.1:8000/api/admin/profils';

  getProfils(){
    return this.http.get('/api/admin/profils');
  }
  addProfil(profil: Profil): any{
    return this.http.post(this.base_url, profil);
  }
}
