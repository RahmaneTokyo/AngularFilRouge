import { Component, OnInit } from '@angular/core';
import {Referentiel} from '../referentiels.model';
import {ReferentielsService} from '../../../service/referentiels/referentiels.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-referentiels',
  templateUrl: './list-referentiels.component.html',
  styleUrls: ['./list-referentiels.component.scss']
})
export class ListReferentielsComponent implements OnInit {

  referentiels: Referentiel[] = [];

  programme: any;

  constructor(private referentielsService: ReferentielsService, private router: Router) { }

  ngOnInit(): void {
    this.referentielsService.refreshNeeded$().subscribe( () => {
      this.getReferentiel();
    });
    this.getReferentiel();
  }

  getReferentiel() {
    this.referentielsService.getReferentiels().subscribe(
      (data: any) => {
        this.referentiels = data['hydra:member'];
        console.log(this.referentiels);
      }
    );
  }

  b64toBlob(b64Data: any, contentType = 'application/pdf') {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset+= sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  openProgramme(programme: any) {
    const file = this.b64toBlob(programme);
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

  delete(id: string) {
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
        this.referentielsService.deleteReferentiel(id).subscribe(
          (response: any) => {
            this.router.navigate(['/home/referentiels']);
          }
        );
        Swal.fire(
          'Deleted !',
          'The item has been deleted.',
          'success'
        )
      }
    })
  }
}
