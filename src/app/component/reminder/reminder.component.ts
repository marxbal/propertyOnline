import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { emailData } from 'src/app/objects/emailData';
import { IssuanceService } from 'src/app/services/issuance.service';
import Swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
})
export class ReminderComponent implements OnInit {
  constructor(
    private router: Router,
    private issuanceService: IssuanceService) {}

  @Output() issuanceForm = new EventEmitter<boolean>();
  isRead: boolean = false;
  showReadReminder: boolean = false;

  disableBtn: boolean = true;

  ngOnInit(): void {}

  goToIssuance() {
    this.router.navigateByUrl('issuance');
  }

  showIssuanceForm(showIssuance: boolean) {
    if (this.isRead) {
      if (this.checkCookie()) {
        this.showReadReminder = false;
        this.issuanceForm.emit(showIssuance);
      }
    } else {
      this.showReadReminder = true;
    }
  }

  readReminder() {
    if (this.isRead) {
      this.isRead = false;
    } else {
      this.isRead = true;
      this.showReadReminder = false;
    }
  }

  checkCookie() {
    var cookieEnabled = navigator.cookieEnabled;
    return cookieEnabled || this.noCookies();
  }

  noCookies() {
    const message =
      "This website uses 'cookies' to give you the best experience. Please enable cookies.";
    // this.modal.openFormatted('Cookies please', message);
    alert(message);
  }

  informDigitalSales() {
    Swal.fire({
      title: 'Submit your Contact Information',
      input: 'text',
      inputPlaceholder: 'Email or Contact Number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      text: 'Thank you for your interest in Property Insurance for your commercial property. ' +
            'One of our representatives will contact you. Please enter your email or mobile number below.',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: async (inputValue: string) => {
        if (!_.isEmpty(inputValue)) {
          let result: any = {};
          const data: emailData = {
            email: inputValue,
            contactNumber: '',
            clientName: '',
            policyNumber: ''
          };
          data.email = inputValue;
          await this.issuanceService.informDigitalSales(data).then((res)=> {
            result = res;
          });
          return result
        } else {
          Swal.fire({
            title: 'Input Required',
            text: 'Please submit your contact information.',
            icon: 'error',
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          if (result.value?.status) {
            Swal.fire({
              title: result.value?.message,
              text: "Thank you! We'll get in touch with you.",
              icon: 'success',
            });
          }
        } catch {
          Swal.fire({
            title: 'Ooops! System Error.',
            text: 'Unable to submit your request.',
            icon: 'error',
          });
        }
      }
    })
  }
}
