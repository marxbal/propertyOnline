import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';
import * as m from 'moment';
import * as _ from 'lodash';

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

  documentIdList: any[] = [];
  uploadFile: any = null;

  allowedIDList: string[] = [
    'PAS',
    'DRI',
    'PID',
    'SSS',
    'UMI',
    'POS',
    'TIN',
    'VOT',
    'PRC',
    'SCC',
    'NIC',
    'PWD',
  ];

  ngOnInit(): void {
    this.getDocumentID();
  }

  onFileSelected(event: any): void {
    this.uploadFile = event.target.files[0] ?? null;
    this.selectedFile.emit(this.uploadFile);
  }

  getDocumentID() {
    this.documentIdList = [];
    this.lov.getDocumentID().then((list) => {
      list.forEach((l) => {
        if (_.includes(this.allowedIDList, l.TIP_DOCUM)) {
          this.documentIdList.push(l);
        }
      });
    });
  }

  setExpiryDate() {
    const stringDate = this.formGroup.get('effectivityDate')?.value;
    this.endDate = m(new Date(stringDate)).add(1, 'year').toDate();
  }
}
