import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfilService} from '../service/profil/profil.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddProfilComponent} from './add-profil/add-profil.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';

export interface UserData {
  id: string;
  libelle: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle', 'update', 'delete'];

  constructor(private profilService: ProfilService, private dialog: MatDialog, private route: Router) { }

  profils: any = [];

  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
        (data: any) => {
        this.profils = data;
      }
    );
  }

  onCreate(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddProfilComponent, dialogConfig);
  }


  onDelete(key: any): void{
    if (confirm('Are you sure to delete this record ?')){
      this.profilService.deleteProfil(key).subscribe(
        // @ts-ignore
        res => {
          this.route.navigate(['/home'])
            .then(() => {
              window.location.reload();
            });
        }
      );
    }
  }
}
