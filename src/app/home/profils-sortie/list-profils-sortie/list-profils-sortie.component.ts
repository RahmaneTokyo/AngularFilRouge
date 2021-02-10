import {Component, HostListener, OnInit} from '@angular/core';
import {ProfilsSortie} from '../profilsSortie.model';
import {ProfilsSortieService} from '../../../service/profil-sortie/profils-sortie.service';
import * as XLSX from 'xlsx';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Params, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-profils-sortie',
  templateUrl: './list-profils-sortie.component.html',
  styleUrls: ['./list-profils-sortie.component.scss']
})
export class ListProfilsSortieComponent implements OnInit {

  profilsSortie: ProfilsSortie[] = [];

  fileName = 'List Profils Sortie.xlsx';
  items: MenuItem[] = [];
  id: any;

  constructor(private profilsSortieService: ProfilsSortieService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.profilsSortieService.refreshNeeded$().subscribe( () => {
      this.getProfilsSortie();
    });
    this.getProfilsSortie();

    this.route.params.subscribe(
      (p: Params) => {
        this.id = p.id;
      }
    );

  }

  getProfilsSortie(): void {
    return this.profilsSortieService.getProfilsSortie().subscribe(
      (data: any) => {
        this.profilsSortie = data['hydra:member'];
        console.log(this.profilsSortie);
      }
    );
  }

  deleteProfilSortie(id: number): any {

    Swal.fire({
      title: 'Are you sure ?',
      text: "You won't be able to revert this !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profilsSortieService.deleteProfilSortie(id).subscribe(
            this.router.navigate(['/home/profils-sortie'])
        );
        Swal.fire(
          'Deleted !',
          'The Profile has been deleted.',
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

  updateProfilSortie(ps: ProfilsSortie) {

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const editedPs = new ProfilsSortie(ps.id, ps.libelle);
        this.profilsSortieService.updateProfilSortie(ps.id, editedPs).subscribe(
          (res: any) => {
            Swal.fire('Saved!', 'Update successful', 'success')
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'An error occurred on Edit !',
              text: 'This field cannot be empty!',
            })
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

    /*Swal.fire({
      title: 'Do you want to proceed ?',
      text: "You won't be able to revert this !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update !'
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })*/
  }

}
