import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/objects/property';
import { ReturnDTO } from 'src/app/objects/return.dto';
import { table } from 'src/app/objects/table';
import { IssuanceService } from 'src/app/services/issuance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css'],
})
export class CoverageComponent implements OnInit {
  constructor(private issuanceService: IssuanceService) {}

  displayedColumns: string[] = ['title', 'value'];

  @Input() paymentDetails: table[] = [];
  @Input() coverages: table[] = [];
  @Input() referenceNumber: string = 'XXX-XXX-XXX';

  ngOnInit(): void {}

  submit() {
    const policyNumber = this.referenceNumber;
    this.issuanceService.sendEmail(policyNumber).then((result: ReturnDTO) => {
      if (result.status == 200) {
        Swal.fire({
          title: 'Thank you for submiting your application',
          html:
            '<p>Your reference number is</p> <p><strong>' +
            result.obj["policyNumber"] +
            '</strong></p>' +
            '<p>Our sales representative will contact you for the status of your application.</p>' +
            '<p>Please note that rates may vary based on our assessment.</p>',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Ooops! System Error.',
          text: result.message,
          icon: 'error',
        });
      }
    }); 
    
    
  }
}
