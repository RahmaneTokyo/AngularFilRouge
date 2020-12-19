import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../service/profil/profil.service';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

  constructor(private service: ProfilService, private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
  }

  addProfil(profil: NgForm) {
    this.service.addProfil(profil.value).subscribe(
      (response: any) => {
        this.dialog.closeAll();
        this.route.navigate(['/home'])
          // Refresh page after treatment
          .then(() => {
            window.location.reload();
          });
      }
    );
  }

  Close(): void{
    this.dialog.closeAll();
  }
}
