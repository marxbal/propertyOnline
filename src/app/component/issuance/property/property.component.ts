import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';
import * as m from 'moment';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  constructor(private lov: LovService) {}

  @Input() formGroup = new FormGroup({});
  @Output() selectedFile = new EventEmitter();
  today: Date = new Date();
  bdayLimitDate: Date = m(new Date()).subtract(18, 'year').toDate();
  endDate: Date = m(new Date()).add(1, 'year').toDate();
  startDate: Date = new Date();

  businessLineList: any[] = [];
  // clientCategory: any[] = [];
  documentIdList: any[] = [];
  uploadFile: any = null;
  selected: number = 200; //Residential

  ngOnInit(): void {
    this.getLovs();
  }

  onFileSelected(event: any): void {
    this.uploadFile = event.target.files[0] ?? null;
    this.selectedFile.emit(this.uploadFile);
  }

  getLovs() {
    this.lov.getBusinessLine().then((list) => {
      this.businessLineList = list;
    });

    // this.lov.getClientCategory().then((list) => {
    //   this.clientCategory = list;
    // });

    this.lov.getDocumentID().then((list) => {
      this.documentIdList = list;
    });
  }

  setExpiryDate() {
    const stringDate = this.formGroup.get('effectivityDate')?.value;
    this.endDate = m(new Date(stringDate)).add(1, 'year').toDate();
  }
}
