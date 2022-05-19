import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Property } from 'src/app/objects/property';
import * as _ from 'lodash';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css'],
})
export class IssuanceComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  @ViewChild('stepper') private stepper?: MatStepper;

  property = new Property();

  propertyFG: FormGroup = new FormGroup({});
  locationFG: FormGroup = new FormGroup({});
  boundaryFG: FormGroup = new FormGroup({});
  productFG: FormGroup = new FormGroup({});
  fg: FormGroup = new FormGroup({});

  selectedFile: any = null;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.propertyFG = this.fb.group({
      businessLine: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      clientCategory: ['', Validators.required],
      clientName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
      governmentID: ['', Validators.required],
      IDNumber: ['', Validators.required],
    });

    this.locationFG = this.fb.group({
      buildingNumber: ['', Validators.required],
      village: ['', Validators.required],
      buildingName: ['', Validators.required],
      streetName: ['', Validators.required],
      barangay: ['', Validators.required],
      region: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      mailingAddress: ['', Validators.required],
      buildingCapital: ['', Validators.required],
      contentValue: ['', null],
      yearBuilt: ['', Validators.required],
      numberOfFloors: ['', Validators.required],
      constructionOfBuilding: ['', Validators.required],
      occupancyOfBuilding: ['', Validators.required],
    });

    this.boundaryFG = this.fb.group({
      front: ['', Validators.required],
      right: ['', Validators.required],
      left: ['', Validators.required],
      rear: ['', Validators.required],
      garage: ['', null],
      kitchen: ['', null],
      gazebo: ['', null],
      swimmingPool: ['', null],
      fence: ['', null],
      lossHistory: ['', null],
      previousInsurer: ['', null],
    });

    this.productFG = this.fb.group({
      product: ['', Validators.required],
    });

    this.fg = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }

  getSelectedFile(evt: any) {
    this.selectedFile = evt;
  }

  nextStep() {
    if (this.stepper) {
      this.property = _.merge(
        this.propertyFG.value,
        this.locationFG.value,
        this.boundaryFG.value,
        this.productFG.value
      );
      console.log(this.property);
      console.log(this.selectedFile);
      this.stepper.next();
    }
  }
}
