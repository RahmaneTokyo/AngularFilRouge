import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../service/users/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profils} from '../../profils/Profils.model';
import {ProfilsService} from '../../../service/Profils/profils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  users: any;
  profils: any;
  image: any;

  avatar: any;

  constructor(private userService: UsersService, private profilService: ProfilsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.users = this.userService.getUserById(+id).subscribe(
      (data: any) => {
        this.users = data;
        this.users.profil = this.users.profil.libelle;
        this.image = 'data:image/jpeg;base64,' +data.avatar;
        delete (this.users.password);

      });

    this.profilService.getProfils().subscribe(
      (data: any) => {
        this.profils = data['hydra:member']
      }
    );
  }

  uploadedFile(event: any): any {
    for (let file of event.files) {
      this.avatar = file;
      console.log(this.avatar);
    }
    /*this.avatar = event.target.files[0];*/
  }

  submit() {

    delete (this.users.avatar);
    const formData = new FormData();
    for (const key in this.users) {
      formData.append(key, this.users[key]);
      if (this.avatar) {
        formData.append('avatar', this.avatar);
      }
    }
    this.userService.editUser(formData).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Modification réussie !',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/home/users/'+this.users.id])
      }
    );
  }

}
