import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  // @Output() selectedFile: any = null;
  @Output() selectedFile = new EventEmitter();
  minDate: Date = new Date();

  businessLine: any[] = [];
  clientCategory: any[] = [];
  uploadFile: any = null;

  testList: Array<Partners> = [
    { name: 'test', value: 1 },
    { name: 'test1', value: 2 },
  ];

  ngOnInit(): void {
    this.getBusinessLine();
    this.getClientCategory();
  }

  onFileSelected(event: any): void {
    this.uploadFile = event.target.files[0] ?? null;
    this.selectedFile.emit(this.uploadFile);
    console.log(this.uploadFile)
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
