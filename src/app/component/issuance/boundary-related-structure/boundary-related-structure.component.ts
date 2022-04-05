import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Partners {
  name: string;
  value: number;
}

@Component({
  selector: 'app-boundary-related-structure',
  templateUrl: './boundary-related-structure.component.html',
  styleUrls: ['./boundary-related-structure.component.css'],
})
export class BoundaryRelatedStructureComponent implements OnInit {
  constructor() {}

  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

  @Input() formGroup = new FormGroup({});

  ngOnInit(): void {}
}
