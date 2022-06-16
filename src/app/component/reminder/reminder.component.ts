import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { emailData } from 'src/app/objects/emailData';
import { ReturnDTO } from 'src/app/objects/return.dto';
import { IssuanceService } from 'src/app/services/issuance.service';
import Swal from 'sweetalert2';

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

  informUW() {
    Swal.fire({
      title: 'Submit your email address',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      text: 'We will contact you with your concern with NON-RESIDENTIAL Policy Insurance',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: async (emailAddress: string) => {
        let result: any = {};
        const data: emailData = {
          email: emailAddress,
          contactNumber: '',
          clientName: '',
          productCode: 0,
          policyNumber: ''
        };
        data.email = emailAddress;
        await this.issuanceService.informUW(data).then((res)=> {
          result = res;
        });
        return result
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        // Swal.fire({
        //   title: `${result.value.login}'s avatar`,
        //   imageUrl: result.value.avatar_url
        // })
      }
    })
  }
}
