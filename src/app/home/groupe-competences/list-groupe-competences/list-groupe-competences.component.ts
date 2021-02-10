import { Component, OnInit } from '@angular/core';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';
import {GroupeCompetences} from '../groupe-competences.model';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-groupe-competences',
  templateUrl: './list-groupe-competences.component.html',
  styleUrls: ['./list-groupe-competences.component.scss']
})
export class ListGroupeCompetencesComponent implements OnInit {

  groupeCompetences: GroupeCompetences[] = [];

  constructor(private groupeCompetencesService: GroupeCompetenceService, private router: Router) { }

  ngOnInit(): void {
    this.groupeCompetencesService.refreshNeeded$().subscribe( () => {
      this.getGroupeCompetence();
    });
    this.getGroupeCompetence()
  }

  getGroupeCompetence() {
    this.groupeCompetencesService.getGroupeCompetences().subscribe(
      (data: any) => {
        this.groupeCompetences = data["hydra:member"];
        console.log(this.groupeCompetences);
      }
    );
  }

  delete(id: number): void {
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
        this.groupeCompetencesService.deleteGroupeCompetence(id).subscribe(
          (response: any) => {
            this.router.navigate(['/home/groupe-competences']);
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
