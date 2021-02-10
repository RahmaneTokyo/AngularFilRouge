import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../../service/users/users.service';
import {Users} from '../users.model';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {NgModel} from '@angular/forms';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @ViewChild('content') content: ElementRef | any;

  fileName = 'ListUsers.xlsx';

  users: Users[] = [];
  jokerArray: any;

  first = 0;
  rows = 4;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.refreshNeeded$().subscribe( () => {
      this.getUsers();
    });
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.users = res['hydra:member'];
      }
    );
  }

  exportExcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  /*exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0,0);
        doc.autoTable(this.users);
        doc.save('products.pdf');
      })
    })
  }*/

  exportPdf() {
    const doc = new jsPDF.jsPDF();

    doc.setFontSize(18);
    doc.setFontSize(11);
    doc.setTextColor(100);
    (doc as any).autoTable({
      html:document.getElementById('excel-table')
    })
    // below line for Download PDF document
    /*doc.save('myTeamDetail.pdf');*/
  }

  reset() {
    this.first = 0;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

}
