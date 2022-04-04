import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css'],
})
export class IssuanceComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  propertyFG: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  thirdFormGroup: FormGroup = new FormGroup({});
  fourthFormGroup: FormGroup = new FormGroup({});
  fifthFormGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    // });

    this.propertyFG = this.fb.group({
      businessLine: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      clientCategory: ['', Validators.required],
      clientName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]]
    });

    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
