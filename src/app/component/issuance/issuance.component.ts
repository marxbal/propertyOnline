import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css'],
})
export class IssuanceComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  @ViewChild('stepper') private stepper?: MatStepper;

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
      emailAddress: ['', [Validators.required, Validators.email]],

      buildingNumber: ['', Validators.required],
      village: ['', Validators.required],
      buildingName: ['', Validators.required],
      streetName: ['', Validators.required],
      barangay: ['', Validators.required],
      region: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      buildingCapital: ['', Validators.required],
      contentValue: ['', Validators.required],
      yearBuilt: ['', Validators.required],
      numberOfFloors: ['', Validators.required],
      constructionOfBuilding: ['', Validators.required],
      occupancyOfBuilding: ['', Validators.required],

      front: ['', Validators.required],
      right: ['', Validators.required],
      left: ['', Validators.required],
      rear: ['', Validators.required],
      garage: ['', Validators.required],
      kitchen: ['', Validators.required],
      gazebo: ['', Validators.required],
      swimmingPool: ['', Validators.required],
      fence: ['', Validators.required],
      lossHistory: ['', Validators.required],
      previousInsurer: ['', Validators.required],

      product: ['', Validators.required],


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

  nextStep() {
    if (this.stepper) {
      this.stepper.next();
    }
  }
}
