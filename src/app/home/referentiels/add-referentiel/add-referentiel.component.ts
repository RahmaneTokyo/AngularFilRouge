import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReferentielsService} from '../../../service/referentiels/referentiels.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {GroupeCompetenceService} from '../../../service/groupe-competence/groupe-competence.service';
import {GroupeCompetences} from '../../groupe-competences/groupe-competences.model';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.scss']
})
export class AddReferentielComponent implements OnInit {

  libelle = '';
  presentation = '';
  admission = '';
  evaluation = '';
  programme?: File;
  myForm: any = FormGroup;
  submitted = false;
  gpeCompetences: GroupeCompetences[] = [];
  errorMessage = '';

  constructor(private gpeCompetenceService: GroupeCompetenceService, private formBuilder: FormBuilder, private referentielService: ReferentielsService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      presentation: ['', Validators.required],
      admission: ['', Validators.required],
      evaluation: ['', Validators.required],
    });

    this.gpeCompetenceService.getGroupeCompetences().subscribe(
      (data: any) => {
        this.gpeCompetences = data['hydra:member'];
      }
    );
  }

  get f() {
    return this.myForm.controls;
  }

  onBasicUpload(event: any): any{
    this.programme = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    const formValue = this.myForm.value;
    //console.log(formValue);
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    if (this.programme) {
      formData.append('programme', this.programme);
      this.referentielService.addReferentiel(formData).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Ajout réussi',
            footer: '<a href="/home/referentiels">Aller aux référentiels</a>'
          })
        }
      );
    }else {
      this.errorMessage = 'Veuillez choisir un fichier';
    }
  }

}
