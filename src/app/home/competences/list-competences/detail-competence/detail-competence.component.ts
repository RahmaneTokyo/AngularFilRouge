import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../../../../service/competences/competences.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Competences} from '../../competences.model';

@Component({
  selector: 'app-detail-competence',
  templateUrl: './detail-competence.component.html',
  styleUrls: ['./detail-competence.component.scss']
})
export class DetailCompetenceComponent implements OnInit {

  competences: any;

  constructor(private competenceService: CompetencesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.competenceService.refreshNeeded$().subscribe( () => {
      this.getCompetencesById();
    });
    this.getCompetencesById();
  }

  getCompetencesById(): void {
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

}
