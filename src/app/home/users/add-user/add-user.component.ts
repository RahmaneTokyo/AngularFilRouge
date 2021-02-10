import { Component, OnInit } from '@angular/core';
import {Profils} from '../../profils/Profils.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../service/users/users.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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
  address = '';
  avatar?: File;
  profil = '';
  captcha: any;
  myForm: any = FormGroup;
  submitted = false;

  profils: Profils[] = [];
  siteKey = '';
  message = '';

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
    this.siteKey = '6Ldy6jYaAAAAAEap2PSv_c2iXvHyfmZNtk_hgGiH';
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
    this.submitted = true;
    const formValue = this.myForm.value;
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    if (this.avatar) {
      formData.append('avatar', this.avatar);
    }
    this.userService.addUser(formData).subscribe(
      (response: any) => {
        Swal.fire('Created !', 'Add User Successful', 'success')
        this.route.navigate(['/home/users']);
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'An error occurred while Adding !',
          text: 'Please enter a valid email!',
        })
      }
    );
  }



}
