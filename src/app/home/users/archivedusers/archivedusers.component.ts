import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../service/users/users.service';
import {Users} from '../users.model';

@Component({
  selector: 'app-archivedusers',
  templateUrl: './archivedusers.component.html',
  styleUrls: ['./archivedusers.component.scss']
})
export class ArchivedusersComponent implements OnInit {

  users: Users[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.refreshNeeded$().subscribe( () => {
      this.getArchivedUsers();
    });
    this.getArchivedUsers();
  }

  getArchivedUsers() {
    this.userService.getArchivedUsers().subscribe(
      (res: any) => {
        this.users = res['hydra:member'];
        console.log(this.users);
      }
    );
  }

}
