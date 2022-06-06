import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LovService } from 'src/app/services/lov.service';

export interface List {
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
  @Output() selectedFile = new EventEmitter();
  today: Date = new Date();

  businessLineList: any[] = [];
  // businessLineList: Array<List> = [];
  clientCategory: any[] = [];
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
      // list.forEach( l => {
      //   var obj = {name: l.NOM_RAMO, value: l.COD_RAMO};
      //   this.businessLineList.push(obj);
      // });
      this.businessLineList = list;
    });

    this.lov.getClientCategory().then((list) => {
      this.clientCategory = list;
    });

    this.lov.getDocumentID().then((list) => {
      this.documentIdList = list;
    });
  }
}
