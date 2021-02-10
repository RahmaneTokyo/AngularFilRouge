import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProfilsSortieService} from '../../../../service/profil-sortie/profils-sortie.service';
import {ProfilsSortie} from '../../profilsSortie.model';

@Component({
  selector: 'app-detail-profils-sortie',
  templateUrl: './detail-profils-sortie.component.html',
  styleUrls: ['./detail-profils-sortie.component.scss']
})
export class DetailProfilsSortieComponent implements OnInit {

  profilSortie: ProfilsSortie[] = [];
  profilSortie1: ProfilsSortie[] = [];

  constructor(private profilSortieService: ProfilsSortieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;
    this.profilSortie = this.profilSortieService.getProfilSortieById(+id).subscribe(
      (data: any) => {
        this.profilSortie = data;
        this.profilSortie1 = data.apprenant;
        console.log(this.profilSortie);
      }
    );

    // For next time this component will be loaded
    this.route.params.subscribe(
      (p: Params) => {
        const idUser = p.id;
        this.profilSortie = this.profilSortieService.getProfilSortieById(+idUser).subscribe(
          (data: any) => {
            this.profilSortie = data;
            this.profilSortie1 = data.apprenant;
            console.log(this.profilSortie);
          }
        );
      }
    );

  }

}
