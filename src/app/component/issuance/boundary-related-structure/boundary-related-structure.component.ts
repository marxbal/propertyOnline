import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utility } from 'src/app/utils/utility';

@Component({
  selector: 'app-boundary-related-structure',
  templateUrl: './boundary-related-structure.component.html',
  styleUrls: ['./boundary-related-structure.component.css'],
})
export class BoundaryRelatedStructureComponent implements OnInit {
  constructor() {}

  @Input() formGroup = new FormGroup({});

  ngOnInit(): void {}

  addCommas(element: HTMLElement) {
    Utility.addCommas(element, this.formGroup);
  }
}
