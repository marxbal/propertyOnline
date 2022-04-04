import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Partners {
  name: string;
  value: number;
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  constructor() {}

  @Input() formGroup = new FormGroup({});
  minDate: Date = new Date();
  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

  ngOnInit(): void {}
}
