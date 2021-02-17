import { Component, OnInit } from '@angular/core';
import {Users} from '../../users/users.model';
import {UsersService} from '../../../service/users/users.service';

@Component({
  selector: 'app-list-promos',
  templateUrl: './list-promos.component.html',
  styleUrls: ['./list-promos.component.scss']
})
export class ListPromosComponent implements OnInit {

  sourceProducts: Users[] = [];

  targetProducts = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.sourceProducts = data['hydra:member'];
      }
    )
  }

}
