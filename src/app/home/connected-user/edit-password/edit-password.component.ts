
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../users/users.model';
import {UsersService} from '../../../service/users/users.service';
import {FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../service/authentication/auth.service';
import {privateDecrypt} from 'crypto';
import {argon2id} from 'argon2';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  prevpass = '';
  newpass = '';
  users: any;

  form: FormGroup | any;


  id: number | undefined;
  constructor(private route: ActivatedRoute, private userService: UsersService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.id = Number(id);
    this.users = this.userService.getUserById(+id).subscribe(
      (data: any) => {
        this.users = data;
      }
    )
  }

  submit() {

  }

}
