import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
})
export class ReminderComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() issuanceForm = new EventEmitter<boolean>();
  isRead: boolean = false;
  showReadReminder: boolean = false;

  disableNextBtn: boolean = true;

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
}