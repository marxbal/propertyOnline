import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';

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

  ngOnInit(): void {
    this.getRegion();
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
      this.formGroup.get("address1")?.setValidators([Validators.required]);//setting validation
      this.formGroup.get("address1")?.setErrors({'required':true});//error message
    } else {
      this.formGroup.get("address1")?.clearValidators();//clear validation
      this.formGroup.get("address1")?.setErrors(null);//updating error message
    }
    this.formGroup.updateValueAndValidity();//update validation
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
}
