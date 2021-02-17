import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../../../../service/competences/competences.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Competences} from '../../competences.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-competence',
  templateUrl: './detail-competence.component.html',
  styleUrls: ['./detail-competence.component.scss']
})
export class DetailCompetenceComponent implements OnInit {

  competences: any;

  constructor(private competenceService: CompetencesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.competences = this.competenceService.getCompetenceById(+id).subscribe(
      (data: any) => {
        this.competences = data;
        console.log(this.competences);
      }
    );

    // For next time this component will be loaded
    this.route.params.subscribe(
      (p: Params) => {
        const idCompetence = p.id;
        this.competences = this.competenceService.getCompetenceById(idCompetence).subscribe(
          (data: any) => {
            this.competences = data;
            console.log(this.competences);
          }
        );
      }
    );
  }


  delete(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action sera sans retour !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.competenceService.deleteCompetence(id).subscribe(
          (res: any) => {
            this.router.navigate(['/home/competences']);
            Swal.fire(
              'Suppression réussie',
              'success'
            )
          }
        )
      }
    })
  }
}
