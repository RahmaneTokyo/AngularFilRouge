import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Competences} from '../competences.model';
import {CompetencesService} from '../../../service/competences/competences.service';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';
import {GroupeCompetences} from '../../groupe-competences/groupe-competences.model';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {
  comp: any;
  grpComp: GroupeCompetences[] = [];
  grpComps: any = [];

  constructor(private route: ActivatedRoute, private compService: CompetencesService, private grpcompService: GroupeCompetenceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.compService.getCompetenceById(Number(id)).subscribe(
      (data: any) => {
        this.comp = data;
        console.log(this.comp);
        data.gpeCompetences.forEach(
          (gpeComp: any) => {
            this.grpComps.push(gpeComp.libelle)

          }
        )
      }
    )
    this.grpcompService.getGroupeCompetences().subscribe(
      (data: any) => {
        this.grpComp = data['hydra:member'];
      }
    )
  }

  edit() {
    this.compService.editCompetence(this.comp).subscribe(
      res => {
        console.log('bon');
      }
    )
  }

}
