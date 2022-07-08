import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';
import * as m from 'moment';
import { formatNumber } from '@angular/common';
import { Utility } from 'src/app/utils/utility';

@Component({
  selector: 'app-location-building',
  templateUrl: './location-building.component.html',
  styleUrls: ['./location-building.component.css'],
})
export class LocationBuildingComponent implements OnInit {
  constructor(private lov: LovService) {}

  @Input() formGroup = new FormGroup({});
  regionList: any[] = [];
  provinceList: any[] = [];
  cityList: any[] = [];
  showMailingAddress: boolean = false;
  yearList: any[] = [];
  defaultYearBuilt: number = m(new Date()).year();
  defaultNoOfFloors: number = 1;
  defaultOccupancyOfBuilding: string = 'RESIDENTIAL';

  number: string;

  constructionOfBuildingList: any[] = [
    'Reinforced Concrete',
    'Concrete Hollow Blocks',
    'Bricks',
    'Stones',
    'With KHB Zocalo Wall',
    'Steel',
    'Asbestos',
    'Aluminum',
    'Galvanized Iron',
    'Open-sided structures with solid or hard roof with concrete post',
    'Concrete and Timber',
    'Bamboo',
    'Sawali',
    'Nipa',
    'Cogon',
    'Thatch',
    'Grass',
  ];

  ngOnInit(): void {
    this.getRegion();
    this.getYearList();
  }

  getRegion() {
    this.lov.getRegion().then((list) => {
      this.regionList = list;
    });
  }

  getProvince() {
    const property = this.formGroup.value;
    this.lov.getProvince(property).then((list) => {
      this.provinceList = list;
    });
  }

  getCity() {
    const property = this.formGroup.value;
    this.lov.getCity(property).then((list) => {
      this.cityList = list;
    });
  }

  radioMailing(bool: boolean) {
    this.showMailingAddress = !bool;
    if (this.showMailingAddress) {
      this.formGroup.get('address1')?.setValidators([Validators.required]); //setting validation
      this.formGroup.get('address1')?.setErrors({ required: true }); //error message
    } else {
      this.formGroup.get('address1')?.clearValidators(); //clear validation
      this.formGroup.get('address1')?.setErrors(null); //updating error message
    }
    this.formGroup.updateValueAndValidity(); //update validation
  }

  selectRegion() {
    setTimeout(() => {
      this.getProvince();
    }, 500);
  }

  selectProvince() {
    setTimeout(() => {
      this.getCity();
    }, 500);
  }

  getYearList() {
    const maxYear = m(new Date()).year();
    const minYear = 1800;

    for (var i = maxYear; i >= minYear; i--) {
      this.yearList.push(i);
    }
  }

  addCommas(element: HTMLElement) {
    Utility.addCommas(element, this.formGroup);
  }
}
