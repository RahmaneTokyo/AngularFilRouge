import { Component, OnInit } from '@angular/core';
import {Competences} from '../competences.model';
import {CompetencesService} from '../../../service/competences/competences.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-competences',
  templateUrl: './list-competences.component.html',
  styleUrls: ['./list-competences.component.scss']
})
export class ListCompetencesComponent implements OnInit {

  competences: Competences[] = [];

  constructor(private competencesService: CompetencesService, private router: Router) { }

  ngOnInit(): void {
    this.competencesService.getCompetences().subscribe(
      (data: any) => {
        this.competences = data['hydra:member'];
        console.log(this.competences);
      }
    );
  }

  delete(id: number) {
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
        this.competencesService.deleteCompetence(id).subscribe(
          (response: any) => {
            this.router.navigate(['/home/competences']);
          }
        );
        Swal.fire(
          'Deleted !',
          'The item has been deleted.',
          'success'
        )
      }
    })
  }
}
