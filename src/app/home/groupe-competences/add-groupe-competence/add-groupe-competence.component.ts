import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {GroupeCompetences} from '../groupe-competences.model';
import {Competences} from '../../competences/competences.model';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';
import {CompetencesService} from '../../../service/competences/competences.service';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.scss']
})
export class AddGroupeCompetenceComponent implements OnInit {

  //compétences qui seront ajouté avec le nouveau groupe de compétences
  competence: Competences[] = [];
  totalItems: any;
  message = '';
  erreur = '';

  constructor(private router: Router, private competenceService: CompetencesService, private grpcmptservice: GroupeCompetenceService, private formBuilder: FormBuilder) { }

  //gc comme groupe de compétences désigne le modèle sur lequel se basera le formulaire
  gc: GroupeCompetences = { libelle: '', description: '', competence: [] };

  //cmpt compétences éxistantes qui seront ajoutés dans le nouveau GC
  cmpt: Competences[] = [];

  //compétences qui seront créées avec le nouveau GC
  /*newCmpts: Competences[] = [];*/

  // nlleCmpt Form group pour la création d'une nouvelle compétence
  /*newCompetence = this.formBuilder.group(
    {
      libelle: ['', Validators.required],
      niveau: this.formBuilder.array([
        this.formBuilder.group({
          level: ['', Validators.required]
        })
      ])
    }
  );*/

  ngOnInit(): void {
    this.competenceService.getCompetences().subscribe(
      (res: any) => {
        this.competence = res["hydra:member"];
      }
    );

  }

  /*get niveau() {
    return this.newCompetence.get('niveau') as FormArray;
  }*/

  getCompetence() {

    console.log(this.gc);

    if (this.gc.libelle === '' || this.gc.description === '') {
      this.erreur = 'This field is mandatory';
    }else {
      if (this.cmpt.length === 0) {
        this.message = 'veuillez selectionner au moins une competence';
      }else {
        this.cmpt.forEach(
          element => {
            this.gc.competence.push(
              { id: `${element}` }
            );
          });
        this.grpcmptservice.add(this.gc);
        console.log(this.gc);console.log(this.gc);
      }
    }
  }

  /*dropCmpt(id: number) {
    this.newCmpts.splice(id,1);
  }*/

  /*getNewCompetence() {
    const level = this.niveau.value;
    console.log(this.niveau.value);
    level.forEach(
      (level: any) => {
        for (const k in level) {
          const key = k.slice(0, -1);
          level[key] = level[k];
          delete (level[k]);
        }
      });
    this.newCmpts.push(this.newCompetence.value);
    this.newCompetence.reset();
  }*/

}
