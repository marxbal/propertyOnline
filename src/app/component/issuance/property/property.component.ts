import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';

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
  constructor(private lov: LovService) {}

  @Input() formGroup = new FormGroup({});
  minDate: Date = new Date();

  businessLine: any[] = [];
  clientCategory: any[] = [];

  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

  ngOnInit(): void {
    this.getBusinessLine();
    this.getClientCategory();
  }

  getBusinessLine() {
    this.lov.getBusinessLine().then((list) => {
      this.businessLine = list;
    });
  }

  getClientCategory() {
    this.lov.getClientCategory().then((list) => {
      this.clientCategory = list;
    });
  }
}
