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
  minDate: Date = new Date();

  businessLineList: Array<List> = [];
  clientCategory: any[] = [];
  uploadFile: any = null;
  selected: string = "200"; //Residential

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
      list.forEach( l => {
        this.businessLineList.push({ name: l.NOM_VALOR, value: l.COD_VALOR });
      });
    });
  }

  getClientCategory() {
    this.lov.getClientCategory().then((list) => {
      this.clientCategory = list;
    });
  }
}
