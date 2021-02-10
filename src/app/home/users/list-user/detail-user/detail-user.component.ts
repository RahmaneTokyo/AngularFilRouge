import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../../service/users/users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  public myAngularQrCode: any;

  show = false;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  users: any = [];
  image = '';

  ngOnInit(): void {

   this.userService.refreshNeeded$().subscribe( () => {
     this.getUsersById();
   });
   this.getUsersById();
  }

  getUsersById() {
    const id = this.route.snapshot.params.id;
    this.users = this.userService.getUserById(+id).subscribe(
      (data: any) => {
        this.users = data;
      });

    // For next time this component will be loaded
    this.route.params.subscribe(
      (p: Params) => {
        const idUser = p.id;
        this.users = this.userService.getUserById(idUser).subscribe(
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
          }
        );
      }
    );
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Are you sure ?',
      text: "You won't be able to revert this !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(
          (response: any) => {
            this.router.navigate(['/home/users']);
          }
        );
        Swal.fire(
          'Deleted !',
          'The user has been deleted.',
          'success'
        )
      }
    })
  }

}
