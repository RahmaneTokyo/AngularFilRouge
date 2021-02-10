import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ListProfilsComponent} from './home/profils/list-profils/list-profils.component';
import {ListUserComponent} from './home/users/list-user/list-user.component';
import {UsersOfOneProfilComponent} from './home/profils/list-profils/users-of-one-profil/users-of-one-profil.component';
import {UsersComponent} from './home/users/users.component';
import {DetailUserComponent} from './home/users/list-user/detail-user/detail-user.component';
import {AddUserComponent} from './home/users/add-user/add-user.component';
import {ListCompetencesComponent} from './home/competences/list-competences/list-competences.component';
import {ListGroupeCompetencesComponent} from './home/groupe-competences/list-groupe-competences/list-groupe-competences.component';
import {DetailCompetenceComponent} from './home/competences/list-competences/detail-competence/detail-competence.component';
import {EditUserComponent} from './home/users/list-user/detail-user/edit-user/edit-user.component';
import {AddGroupeCompetenceComponent} from './home/groupe-competences/add-groupe-competence/add-groupe-competence.component';
import {TokenGuard} from './guard/token.guard';
import {ListProfilsSortieComponent} from './home/profils-sortie/list-profils-sortie/list-profils-sortie.component';
import {DetailProfilsSortieComponent} from './home/profils-sortie/list-profils-sortie/detail-profils-sortie/detail-profils-sortie.component';
import {AddCompetenceComponent} from './home/competences/add-competence/add-competence.component';
import {ReferentielsComponent} from './home/referentiels/referentiels.component';
import {ListReferentielsComponent} from './home/referentiels/list-referentiels/list-referentiels.component';
import {AddReferentielComponent} from './home/referentiels/add-referentiel/add-referentiel.component';
import {ListPromosComponent} from './home/promos/list-promos/list-promos.component';
import {ConnectedUserComponent} from './home/connected-user/connected-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TokenGuard],
    children: [
      {
        path: 'profils',
        component: ListProfilsComponent,
        children: [ { path: ':id/users', component: UsersOfOneProfilComponent } ]
      },
      {
        path: 'users',
        component: ListUserComponent,
        children: [
          { path: 'add-user', component: AddUserComponent },
          {
            path: ':id',
            component: DetailUserComponent,
            children: [
              { path: 'edit', component: EditUserComponent }
            ]
          },
        ]
      },
      { path: 'user/:id', component: ConnectedUserComponent },
      { path: 'groupe-competences', component: ListGroupeCompetencesComponent },
      { path: 'add-groupe-competence', component: AddGroupeCompetenceComponent },
      { path: 'add-competence', component: AddCompetenceComponent },
      {
        path: 'competences',
        component: ListCompetencesComponent,
        children: [
          { path: ':id', component: DetailCompetenceComponent }
        ]
      },
      {
        path: 'profils-sortie',
        component: ListProfilsSortieComponent,
        children: [
          { path: ':id/users', component: DetailProfilsSortieComponent }
        ]
      },
      { path: 'referentiels', component: ListReferentielsComponent },
      { path: 'add-referentiel', component: AddReferentielComponent },
      { path: 'promos', component: ListPromosComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
