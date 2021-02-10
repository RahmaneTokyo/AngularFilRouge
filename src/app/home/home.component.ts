import {Component, HostListener, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {UsersService} from '../service/users/users.service';
import {Users} from './users/users.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user = [];
  image: any;
  info: MenuItem[] = [];
  show = false;

  constructor(private router: Router, private userService: UsersService ) { }

  windowScrolled = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  items: MenuItem[] = [];

  ngOnInit(): void {

    const id = localStorage.getItem('idUser');

    this.info = [
      {
        icon: 'pi pi-info-circle',
        label: 'Informations utilisateur',
        routerLink: `/home/user/${id}`
      },
      {separator:true},
      {
        icon: 'pi pi-sign-out',
        styleClass: 'pos',
        label: 'Déconnexion',
        command: event => {
          this.logout();
        }
      }
    ];

    this.userService.getUserById(Number(id)).subscribe(
      (data: any) => {
        this.user = data;
        if (data.avatar !== null) {
          this.show = true;
          this.image = 'data:image/jpeg;base64,' + data.avatar;
        }else {
          this.show = false;
        }
      }
    );

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home/profils',
      },
      {
        label: 'Briefs',
        icon: 'pi pi-fw pi-file-o',
      },
      {
        label: 'Rendus',
        icon: 'pi pi-fw pi-inbox',
      },
      {
        label: 'Explorer',
        icon: 'pi pi-fw pi-compass',
      },
      {
        label: 'Forum',
        icon: 'pi pi-fw pi-comment'
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Promos',
            routerLink: '/home/promos'
          },
          {
            label: 'Référentiels',
            routerLink: '/home/referentiels'
          },
          {
            label: 'Groupe de compétences',
            routerLink: '/home/groupe-competences'
          },
          {
            label: 'Compétences',
            routerLink: '/home/competences'
          },
          {
            label: 'Profils de sortie',
            routerLink: '/home/profils-sortie'
          },
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Users',
            routerLink: '/home/users'
          },
          {
            label: 'Profils',
            routerLink: '/home/profils'
          }
        ]
      }
    ];

  }

  logout() {
    Swal.fire({
      title: 'Êtres-vous sûr ?',
      text: "Cette action sera sans retour !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Se déconnecter!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userToken');
        this.router.navigate(['/']);
      }
    })
  }
}
