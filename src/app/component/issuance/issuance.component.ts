import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Property } from 'src/app/objects/property';
import * as _ from 'lodash';
import { IssuanceService } from 'src/app/services/issuance.service';
import { ReturnDTO } from 'src/app/objects/return.dto';
import * as m from 'moment';
import { table } from 'src/app/objects/table';
import Swal from 'sweetalert2';
import { paymentDetails } from 'src/app/objects/paymentDetails';
import { Utility } from 'src/app/utils/utility';

const ELEMENT_DATA: table[] = [
  { title: 'Premium', value: 130 },
  { title: 'Management Fee', value: 2300.3 },
  { title: 'Value Added Tax', value: 400 },
  { title: 'Management Fee VAT', value: 100 },
  { title: 'Local Government Tax', value: 100 },
  { title: 'Fire Service Tax', value: 1000 },
  { title: 'Interest', value: 500 },
  { title: 'Sub Total', value: 5400.3 },
  { title: 'Digital Discount', value: 1000 },
  { title: 'Total', value: 4400.3 },
];

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css'],
})
export class IssuanceComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private issuanceService: IssuanceService
  ) {}

  @ViewChild('stepper') private stepper?: MatStepper;

  property = new Property();

  propertyFG: FormGroup = new FormGroup({});
  locationFG: FormGroup = new FormGroup({});
  boundaryFG: FormGroup = new FormGroup({});
  productFG: FormGroup = new FormGroup({});
  fg: FormGroup = new FormGroup({});

  selectedFile: any = null;

  paymentDetails: table[] = [];
  coverages: table[] = ELEMENT_DATA;
  referenceNumber: string = 'xxx-xxx-xxx';

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.propertyFG = this.fb.group({
      subLine: ['', Validators.required],
      effectivityDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      // clientCategory: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
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
      address1: ['', null],
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

  buildRcDetails() {
    var rcDetails = [];
    if (this.property.garage > 0) {
      const obj = { name: 'Garage', value: this.property.garage };
      rcDetails.push(obj);
    }
    if (this.property.kitchen > 0) {
      const obj = { name: 'Kitchen', value: this.property.kitchen };
      rcDetails.push(obj);
    }
    if (this.property.gazebo > 0) {
      const obj = { name: 'Gazebo', value: this.property.gazebo };
      rcDetails.push(obj);
    }
    if (this.property.swimmingPool > 0) {
      const obj = { name: 'Swimming Pool', value: this.property.swimmingPool };
      rcDetails.push(obj);
    }
    if (this.property.fence > 0) {
      const obj = { name: 'Fence', value: this.property.fence };
      rcDetails.push(obj);
    }
    this.property.relatedContentDetails = rcDetails;
  }

  convertDataDate() {
    const iDate = m(new Date()).format('MM/DD/yyyy');
    const effDate = m(this.property.effectivityDate).format('MM/DD/yyyy');
    const exDate = m(this.property.expirationDate).format('MM/DD/yyyy');
    const bDate = m(this.property.birthday).format('MM/DD/yyyy');

    this.property.timestamp = iDate;
    this.property.effectivityDate = effDate;
    this.property.expirationDate = exDate;
    this.property.birthday = bDate;
  }

  defaultParam() {
    this.property.userCode = 'MIV01101';
    this.property.type = 'q';
    this.property.paymentPlanCode = 1;
    this.property.subLine = '200';
    this.property.agentCode = 1101;
    this.property.branchCode = 9201;
    this.property.gender = 1;

    if (_.isEmpty(this.property.address1)) {
      this.property.address1 =
      this.property.buildingNumber +
      ' ' +
      this.property.village +
      ', ' +
      this.property.buildingName;
    }
  }

  buildData() {
    this.property = _.merge(
      this.propertyFG.value,
      this.locationFG.value,
      this.boundaryFG.value,
      this.productFG.value
    );

    this.buildRcDetails();
    this.convertDataDate();
    this.defaultParam();

    return this.property;
  }

  nextStep() {
    if (this.stepper) {
      const requestData = this.buildData();
      const _this = this;

      const fd = new FormData();
      if (this.selectedFile != null) {
        fd.append('file', this.selectedFile);
      }
      fd.append('documentCode', this.property.documentCode);
      fd.append('documentType', this.property.documentType);

      this.issuanceService.upload(fd).then(
        (uploadResult: ReturnDTO) => {
        this.issuanceService.issueQuote(requestData).then(
          (result: ReturnDTO) => {
          if (result.status) {
            const pDetails = result.obj as paymentDetails;
            this.referenceNumber = pDetails.policyNumber;

            this.paymentDetails = [];
            Object.keys(pDetails).forEach((key: string) => {
              if (("policyNumber" != key) && ("receipt" != key)) {
                const obj = {title: Utility.getPaymentDetailsTitle(key), value: result.obj[key]};
                this.paymentDetails.push(obj);
              }
            });

            _this.stepper?.next();
            // const coverages = result.obj["coverages"];
            // coverages.forEach((details: any) => {
            //   this.coverages.push(new table(details.name, details.value))
            // });
          } else {
            Swal.fire({
              icon: 'error',
              title: "System Error",
              text: result.message,
            });
          }
        });
      });     
    }
  }
}
