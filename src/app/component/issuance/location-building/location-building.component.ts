import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';

export interface Partners {
  name: string;
  value: number;
}

@Component({
  selector: 'app-location-building',
  templateUrl: './location-building.component.html',
  styleUrls: ['./location-building.component.css'],
})
export class LocationBuildingComponent implements OnInit {
  constructor(private lov: LovService) {}
  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

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
