import { Component, OnInit } from '@angular/core';
import {Profils} from '../../profils/Profils.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../service/users/users.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ProfilsService} from '../../../service/Profils/profils.service';
import {UpperCasePipe} from '@angular/common';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {kebabToCamelCase} from 'codelyzer/util/utils';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  firstname = '';
  lastname = '';
  email = '';
  password = '';
  confpassword = '';
  address = '';
  avatar?: File;
  profil = '';
  captcha: any;
  myForm: any = FormGroup;
  submitted = false;
  logged = false;

  profils: Profils[] = [];
  siteKey = '';
  message = '';

  constructor(private formBuilder: FormBuilder, private profilService: ProfilsService, private userService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
      (data: any) => {
        this.profils = data['hydra:member'];
      }
    )

    this.siteKey = '6Ldy6jYaAAAAAEap2PSv_c2iXvHyfmZNtk_hgGiH';
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpassword: ['', [Validators.required]],
      address: ['', Validators.required],
      profil: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  uploadedFile(event: any): any {
    this.avatar = event.target.files[0];
  }

  submitForm() {
    this.logged = true;
    this.submitted = true;
    const formValue = this.myForm.value;
    const formData = new FormData();
    formData.append('firstname', formValue.firstname);
    formData.append('lastname', formValue.lastname);
    formData.append('email', formValue.email);
    if (formValue.password === formValue.confpassword) {
      formData.append('password', formValue.password);
      formData.append('address', formValue.address);
      formData.append('profil', formValue.profil);
      if (this.avatar) {
        formData.append('avatar', this.avatar);
      }
      console.log(formValue.profil);
      this.userService.addUser(formData).subscribe(
        (response: any) => {
          Swal.fire('Created !', 'Add User Successful', 'success')
          this.route.navigate(['/home/users']);
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur !',
            text: 'Verifiez vos informations',
          })
          this.logged = false;
        }
      );
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Les mots de passe ne sont pas identiques, réessayez !'
      })
      this.logged = false;
    }

    /*for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }*/
  }



}
