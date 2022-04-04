import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location-building',
  templateUrl: './location-building.component.html',
  styleUrls: ['./location-building.component.css'],
})
export class LocationBuildingComponent implements OnInit {
  constructor() {}

  @Input() formGroup = new FormGroup({});

  ngOnInit(): void {}
}
