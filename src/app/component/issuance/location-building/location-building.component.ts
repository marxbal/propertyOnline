import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  constructor() {}
  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

  @Input() formGroup = new FormGroup({});

  ngOnInit(): void {}
}
