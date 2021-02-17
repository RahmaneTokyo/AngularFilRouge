import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {TooltipModule} from 'primeng/tooltip';
import {FocusTrapModule} from 'primeng/focustrap';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { AddUserComponent } from './home/users/add-user/add-user.component';
import { ProfilsComponent } from './home/profils/profils.component';
import { ListProfilsComponent } from './home/profils/list-profils/list-profils.component';
import {DropdownModule} from 'primeng/dropdown';
import {RequestInterceptor} from './interceptor/request.interceptor';
import { ListUserComponent } from './home/users/list-user/list-user.component';
import { UsersOfOneProfilComponent } from './home/profils/list-profils/users-of-one-profil/users-of-one-profil.component';
import {InputTextModule} from 'primeng/inputtext';
import { DetailUserComponent } from './home/users/list-user/detail-user/detail-user.component';
import {RippleModule} from 'primeng/ripple';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import {InputMaskModule} from 'primeng/inputmask';
import { QRCodeModule } from 'angularx-qrcode';
import { CompetencesComponent } from './home/competences/competences.component';
import { ListCompetencesComponent } from './home/competences/list-competences/list-competences.component';
import { GroupeCompetencesComponent } from './home/groupe-competences/groupe-competences.component';
import { ListGroupeCompetencesComponent } from './home/groupe-competences/list-groupe-competences/list-groupe-competences.component';
import { DetailCompetenceComponent } from './home/competences/list-competences/detail-competence/detail-competence.component';
import { AddGroupeCompetenceComponent } from './home/groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { ProfilsSortieComponent } from './home/profils-sortie/profils-sortie.component';
import { ListProfilsSortieComponent } from './home/profils-sortie/list-profils-sortie/list-profils-sortie.component';
import { DetailProfilsSortieComponent } from './home/profils-sortie/list-profils-sortie/detail-profils-sortie/detail-profils-sortie.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SkeletonModule} from 'primeng/skeleton';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AddCompetenceComponent } from './home/competences/add-competence/add-competence.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { ReferentielsComponent } from './home/referentiels/referentiels.component';
import { ListReferentielsComponent } from './home/referentiels/list-referentiels/list-referentiels.component';
import { AddReferentielComponent } from './home/referentiels/add-referentiel/add-referentiel.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { PromosComponent } from './home/promos/promos.component';
import { ListPromosComponent } from './home/promos/list-promos/list-promos.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { SummarizePipe } from './pipe/summarize/summarize.pipe';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ConnectedUserComponent } from './home/connected-user/connected-user.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';
import { ArchivedusersComponent } from './home/users/archivedusers/archivedusers.component';
import { EditPasswordComponent } from './home/connected-user/edit-password/edit-password.component';
import {PickListModule} from 'primeng/picklist';
import {TagModule} from 'primeng/tag';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { EditCompetenceComponent } from './home/competences/edit-competence/edit-competence.component';
import { DetailGroupeCompetenceComponent } from './home/groupe-competences/list-groupe-competences/detail-groupe-competence/detail-groupe-competence.component';
import { EditGroupeCompetencesComponent } from './home/groupe-competences/edit-groupe-competences/edit-groupe-competences.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ProfilsComponent,
    ListProfilsComponent,
    ListUserComponent,
    UsersOfOneProfilComponent,
    DetailUserComponent,
    AddUserComponent,
    CompetencesComponent,
    ListCompetencesComponent,
    GroupeCompetencesComponent,
    ListGroupeCompetencesComponent,
    DetailCompetenceComponent,
    AddGroupeCompetenceComponent,
    ProfilsSortieComponent,
    ListProfilsSortieComponent,
    DetailProfilsSortieComponent,
    AddCompetenceComponent,
    ReferentielsComponent,
    ListReferentielsComponent,
    AddReferentielComponent,
    PromosComponent,
    ListPromosComponent,
    SummarizePipe,
    ConnectedUserComponent,
    EditUserComponent,
    ArchivedusersComponent,
    EditPasswordComponent,
    EditCompetenceComponent,
    DetailGroupeCompetenceComponent,
    EditGroupeCompetencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    MultiSelectModule,
    TooltipModule,
    FocusTrapModule,
    MenubarModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    RippleModule,
    ConfirmPopupModule,
    CardModule,
    ReactiveFormsModule,
    FileUploadModule,
    QRCodeModule,
    AccordionModule,
    DividerModule,
    FieldsetModule,
    InputMaskModule,
    NgxCaptchaModule,
    SplitButtonModule,
    SkeletonModule,
    ChipModule,
    ChipsModule,
    InputTextareaModule,
    AvatarModule,
    AvatarGroupModule,
    TabMenuModule,
    ProgressBarModule,
    TieredMenuModule,
    PickListModule,
    TagModule,
    ProgressSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
