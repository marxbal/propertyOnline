import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emailData } from 'src/app/objects/emailData';
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
  constructor(
    private issuanceService: IssuanceService,
    private router: Router) {}

  displayedColumns: string[] = ['title', 'value'];
  showSubmitBtn: boolean = true;

  @Input() paymentDetails: table[] = [];
  @Input() coverages: table[] = [];
  @Input() referenceNumber: string = 'XXX-XXX-XXX';
  @Input() emailData: emailData = new emailData();

  ngOnInit(): void {}

  submit() {
    const policyNumber = this.referenceNumber;
    this.issuanceService.sendEmail(this.emailData).then((result: ReturnDTO) => {
      if (result.status) {
        this.showSubmitBtn = false;
        Swal.fire({
          title: 'Thank you for submiting your application',
          html:
            '<p>Your reference number is</p> <p><strong>' +
            result.obj +
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

  goBackToHomepage() {
    this.router.navigateByUrl('');
  }
}
