import { Component, OnInit } from '@angular/core';
import {Profils} from '../Profils.model';
import {ProfilsService} from '../../../service/Profils/profils.service';
import {NgForm} from '@angular/forms';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.scss']
})
export class ListProfilsComponent implements OnInit {

  fileName = 'List Profils.xlsx';

  fakeData = false;
  message = 'This profil already exists !';

  products1: Profils[] = [];


  constructor(private profilService: ProfilsService, private router: Router) {
  }

  ngOnInit(): void {
    this.profilService.refreshNeeded$().subscribe( () => {
      this.getProfils()
    });
    this.getProfils();
  }

  getProfils() {
    this.profilService.getProfils().subscribe(
      (data: any) => {
        this.products1 = data["hydra:member"];
        console.log(this.products1);
      }
    );
  }

  addProfil(profil: NgForm): void {

    Swal.fire({
      title: 'Voulez-vous creer ce profil?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Créer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profilService.addProfil(profil).subscribe(
          (res: any) => {
            Swal.fire(
              'Success!',
              'Création réussie !',
              'success',
            )
            this.router.navigate(['/home/profils'])
          },
          (err: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Ce profil existe déjà'
            })
          }
        );
      }
    })
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profilService.deleteProfil(id).subscribe(
          (response: any) => {
            this.router.navigate(['/home/profils']);
          }
        );
        Swal.fire(
          'Sppression Réussie !',
          'success'
        )
      }
    })
  }

  exportExcel(): void {

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);

  }

}


