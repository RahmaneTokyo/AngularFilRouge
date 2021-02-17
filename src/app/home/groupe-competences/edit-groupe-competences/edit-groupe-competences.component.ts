import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';
import {CompetencesService} from '../../../service/competences/competences.service';
import {Competences} from '../../competences/competences.model';

@Component({
  selector: 'app-edit-groupe-competences',
  templateUrl: './edit-groupe-competences.component.html',
  styleUrls: ['./edit-groupe-competences.component.scss']
})
export class EditGroupeCompetencesComponent implements OnInit {

  gpeComp: any;
  Comps: any = [];
  competence: Competences[] = [];

  constructor(private route: ActivatedRoute, private gpeCompService: GroupeCompetenceService, private compService: CompetencesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.gpeCompService.getGpeCompById(Number(id)).subscribe(
      (data: any) => {
        this.gpeComp = data;
        console.log(this.gpeComp);
        data.competence.forEach(
          (comp: any = []) => {
            this.Comps.push(comp.nomCompetence);
            console.log(this.Comps);
          }
        )
      }
    )

    this.compService.getCompetences().subscribe(
      (data: any) => {
        this.competence = data['hydra:member']
      }
    )

  }

  edit(gpeComp: any) {
    this.gpeCompService.editGpeCompetence(this.gpeComp).subscribe(
      res => {
        console.log('bn');
      }
    )
  }

}
