import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Property } from 'src/app/objects/property';
import * as _ from 'lodash';
import { IssuanceService } from 'src/app/services/issuance.service';
import { ReturnDTO } from 'src/app/objects/return.dto';
import * as m from 'moment';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css'],
})
export class IssuanceComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private issuanceService: IssuanceService) {}

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
      subLine: ['', Validators.required],
      effectivityDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      clientCategory: ['', Validators.required],
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      documentType: ['', Validators.required],
      documentCode: ['', Validators.required],
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

  buildData() {
    this.property = _.merge(
      this.propertyFG.value,
      this.locationFG.value,
      this.boundaryFG.value,
      this.productFG.value
    );

    const rcDetails = [];
    if (!_.isEmpty(this.property.garage)) {
      const obj = {name: 'Garage', value: this.property.garage};
      rcDetails.push(obj);
    }
    if (!_.isEmpty(this.property.garage)) {
      const obj = {name: 'Kitchen', value: this.property.kitchen};
      rcDetails.push(obj);
    }
    if (!_.isEmpty(this.property.garage)) {
      const obj = {name: 'Gazebo', value: this.property.gazebo};
      rcDetails.push(obj);
    }
    if (!_.isEmpty(this.property.garage)) {
      const obj = {name: 'Swimming Pool', value: this.property.swimmingPool};
      rcDetails.push(obj);
    }
    if (!_.isEmpty(this.property.garage)) {
      const obj = {name: 'Fence', value: this.property.fence};
      rcDetails.push(obj);
    }
    this.property.relatedContentDetails = rcDetails;
    this.defaultParam();

    return this.property;
  }

  defaultParam() {
    this.property.userCode = 'MIV01101';
    this.property.type = 8;
    this.property.paymentPlanCode = 1;
    this.property.subLine = '200';
    this.property.agentCode = 1101;
    this.property.branchCode = 9203;
    this.property.region = '10';
    this.property.province = '15500';
    this.property.city = '15001';

    this.property.documentType = 'DRI';
    this.property.middleName = 'XXX';
    this.property.lastName = 'XXX';
    this.property.gender = 1;

    this.property.address1 = 
    this.property.buildingNumber + " " +
    this.property.village + ", " + 
    this.property.buildingName;

    const iDate = m(new Date()).format("MM/DD/yyyy");
    const effDate = m(this.property.effectivityDate).format("MM/DD/yyyy");
    const exDate = m(this.property.expirationDate).format("MM/DD/yyyy");
    const bDate = m(this.property.birthday).format("MM/DD/yyyy");

    this.property.timestamp = iDate;
    this.property.effectivityDate = effDate;
    this.property.expirationDate = exDate;
    this.property.birthday = bDate;
  }

  nextStep() {
    if (this.stepper) {

      const requestData = this.buildData();
      
      this.issuanceService.issueQuote(requestData)
        .then((result: ReturnDTO) =>{
          console.log('return: ' + result.message);
      });

      this.issuanceService.test()
        .then((result: ReturnDTO) =>{
          console.log('test: ' + result.message);
      });

      console.log(requestData);
      console.log(this.selectedFile);
      this.stepper.next();
    }
  }
}
