import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../../../service/Profils/profils.service';
import {Profils} from '../../Profils.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-users-of-one-profil',
  templateUrl: './users-of-one-profil.component.html',
  styleUrls: ['./users-of-one-profil.component.scss']
})
export class UsersOfOneProfilComponent implements OnInit {

  constructor(private profilService: ProfilsService, private route: ActivatedRoute) { }

  profils: any = [];
  user: any = [];

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

    this.profilService.getProfilById(+id).subscribe(
      (data: any) => {
        this.user = data;
      }
    );

    this.profils = this.profilService.getUsersOfOneProfil(+id).subscribe(
      (data: any) => {
        this.profils = data.users;
        console.log(this.profils);
      }
    );

    // For next time this component will be loaded
    this.route.params.subscribe(
      (p: Params) => {
        const idUser = p.id;

        this.profilService.getProfilById(+idUser).subscribe(
          (data: any) => {
            this.user = data;
          }
        );

        this.profils = this.profilService.getUsersOfOneProfil(+idUser).subscribe(
          (data: any) => {
            this.profils = data.users;
            console.log(this.profils);
          }
        );
      }
    );
  }

}
