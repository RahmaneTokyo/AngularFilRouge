import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../service/profil/profil.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

  constructor(private service: ProfilService) { }

  ngOnInit(): void {
  }

  addProfil(profil: NgForm) {
    this.service.addProfil(profil.value).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}
