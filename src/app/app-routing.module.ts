import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {ProfilComponent} from './profil/profil.component';
import {AddProfilComponent} from './profil/add-profil/add-profil.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'add-profil', component: AddProfilComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
