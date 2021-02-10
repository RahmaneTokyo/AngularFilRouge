import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../../../../service/users/users.service';
import {Users} from '../../../users.model';
import {Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  users: Users[] = [];
  url: any;
  id: any;

  myForm: any = FormGroup;

  firstname = new FormControl();
  lastname = new FormControl();
  email = new FormControl();
  address = new FormControl();
  profil = new FormControl();
  avatar = new FormControl();

  constructor(private formBuilder: FormBuilder, private router: Router, private snapshot: RouterStateSnapshot, private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.getIdOnUrl()).subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
      }
    );
    this.myForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      address: this.address,
      profil: this.profil,
      avatar: this.avatar,
    });
  }

  get f() {
    return this.myForm.controls;
  }

  getIdOnUrl() {
    this.snapshot = this.router.routerState.snapshot;
    this.url = this.snapshot['url'];
    this.id = this.url.split('/');
    return this.id[4];
  }

  submitForm() {

  }

  uploadedFile($event: Event) {

  }
}
