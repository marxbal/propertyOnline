import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boundary-related-structure',
  templateUrl: './boundary-related-structure.component.html',
  styleUrls: ['./boundary-related-structure.component.css'],
})
export class BoundaryRelatedStructureComponent implements OnInit {
  constructor() {}

  @Input() formGroup = new FormGroup({});

  ngOnInit(): void {}
}
