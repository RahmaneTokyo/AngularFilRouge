import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../service/profil/profil.service';

export interface UserData {
  id: string;
  libelle: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle'];

  constructor(private profilService: ProfilService) { }

  profils: any = [];

  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
      data => {
        this.profils = data;
        // console.log(this.profils);
      }
    );
  }

}
