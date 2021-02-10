import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetencesService} from '../../../service/competences/competences.service';
import {GroupeCompetences} from '../../groupe-competences/groupe-competences.model';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

  myForm: any = FormGroup ;
  submitted = false;
  gpeCompetences: GroupeCompetences[] = [];

  admission1 = '';
  admission2 = '';
  admission3 = '';

  evaluation1 = '';
  evaluation2 = '';
  evaluation3 = '';

  constructor(private formBuilder: FormBuilder, private competenceService: CompetencesService, private gpeCompService: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nomCompetence: ['', [ Validators.required]],
      description: ['', [ Validators.required]],
      admission1: ['', [ Validators.required]],
      admission2: ['', [ Validators.required]],
      admission3: ['', [ Validators.required]],
      evaluation1: ['', [ Validators.required]],
      evaluation2: ['', [ Validators.required]],
      evaluation3: ['', [ Validators.required]],
      gpeComp: [[], Validators.required]
    });

    this.gpeCompService.getGroupeCompetences().subscribe(
      (data: any) => {
        this.gpeCompetences = data['hydra:member']
      }
    );
  }

  get f(): any {
    return this.myForm.controls;
  }


  onSubmit() {

    console.log(this.myForm.value);

    this.submitted = true;
    const formValue = this.myForm.value;

    console.log(formValue);

    const niveau = [
      {
        "level": "niveau 1",
        "admission": formValue.admission1,
        "evaluation": formValue.evaluation1
      },

      {
        "level": "niveau2",
        "admission": formValue.admission2,
        "evaluation": formValue.evaluation2
      },

      {
        "level": "niveau3",
        "admission": formValue.admission3,
        "evaluation": formValue.evaluation3
      }
    ];

    const myCompetence = {
      "nomCompetence": formValue.nomCompetence,
      "description": formValue.description,
      "niveau" : niveau,
      "gpeCompetences": formValue.gpeComp
    };

    if (formValue.gpeCompetences === []) {
      console.log('bonjour');
    }else {
      this.competenceService.addCompetence(myCompetence).subscribe(
        (res: any) => {
          console.log(myCompetence);
        }
      );
    }

  }

}
