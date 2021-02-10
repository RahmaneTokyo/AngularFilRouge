import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../service/users/users.service';
import {Users} from '../users/users.model';

@Component({
  selector: 'app-connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.scss']
})
export class ConnectedUserComponent implements OnInit {

  public myAngularQrCode: any;

  users: Users[] = [];
  image: any;
  show = false;

  constructor(private route: ActivatedRoute, private userService: UsersService){ }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.users = this.userService.getUserById(+id).subscribe(
      (data: any) => {
        this.users = data;
        if (data.avatar !== null) {
          this.show = true;
          this.image = 'data:image/jpeg;base64,' + data.avatar;
        }else {
          this.show = false;
        }
        this.myAngularQrCode = `
              Firstname: ${this.users.firstname}

              Lastname: ${this.users.lastname}

              Email: ${this.users.email}

              Address: ${this.users.address}

              Profil: ${this.users.profil.libelle}
            `;
      });
  }
}
