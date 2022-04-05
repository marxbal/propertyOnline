import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

export interface TableElement {
  title: string;
  value: number;
}

const ELEMENT_DATA: TableElement[] = [
  { title: 'Premium', value: 1000 },
  { title: 'Management Fee', value: 2300.3 },
  { title: 'Value Added Tax', value: 400 },
  { title: 'Management Fee VAT', value: 100 },
  { title: 'Local Government Tax', value: 100 },
  { title: 'Fire Service Tax', value: 1000 },
  { title: 'Interest', value: 500 },
  { title: 'Sub Total', value: 5400.3 },
  { title: 'Digital Discount', value: 1000 },
  { title: 'Total', value: 4400.3 },
];

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css'],
})
export class CoverageComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}

  submit() {
    const referenceNumber = 'XXX-XXX-XXX';

    Swal.fire({
      title: 'Thank you for submiting your application',
      html:
        '<p>Your reference number is</p> <p><strong>' +
        referenceNumber +
        '</strong></p>' +
        '<p>Our sales representative will contact you for the status of your application.</p>' +
        '<p>Please note that rates may vary based on our assessment.</p>',
      icon: 'success',
    });
  }
}
