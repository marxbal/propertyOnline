import { Component, Input, OnInit } from '@angular/core';
import { table } from 'src/app/objects/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css'],
})
export class CoverageComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ['title', 'value'];

  @Input() paymentDetails: table[] = [];
  @Input() coverages: table[] = [];
  @Input() referenceNumber: string = 'XXX-XXX-XXX';

  ngOnInit(): void {}

  submit() {
    Swal.fire({
      title: 'Thank you for submiting your application',
      html:
        '<p>Your reference number is</p> <p><strong>' +
        this.referenceNumber +
        '</strong></p>' +
        '<p>Our sales representative will contact you for the status of your application.</p>' +
        '<p>Please note that rates may vary based on our assessment.</p>',
      icon: 'success',
    });
  }
}
