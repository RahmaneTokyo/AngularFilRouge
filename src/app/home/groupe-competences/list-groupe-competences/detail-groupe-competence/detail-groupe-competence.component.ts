import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {GroupeCompetenceService} from '../../../../service/groupe-competence/groupe-competence.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detail-groupe-competence',
  templateUrl: './detail-groupe-competence.component.html',
  styleUrls: ['./detail-groupe-competence.component.scss']
})
export class DetailGroupeCompetenceComponent implements OnInit {

  gpeComp: any;

  constructor(private gpeCompService: GroupeCompetenceService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.gpeComp = this.gpeCompService.getGpeCompById(+id).subscribe(
      (data: any) => {
        this.gpeComp = data;
        console.log(this.gpeComp);
      }
    );
  }

  delete(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action sera sans retour !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008e8e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gpeCompService.deleteGroupeCompetence(id).subscribe(
          (res: any) => {
            this.router.navigate(['/home/groupe-competences']);
            Swal.fire(
              'Suppression réussie',
              'success'
            )
          }
        )
      }
    })
  }

}
