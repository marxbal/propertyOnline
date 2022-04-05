import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  @Input() formGroup = new FormGroup({});
  @Output() nextStep: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  next(item: any) {
    this.nextStep.emit(item);
  }

  selectProduct(value: string) {
    const title = value.toUpperCase();
    Swal
      .fire({
        title: 'Are you sure?',
        text: 'You have selected ' + title + ' insurance?',
        showCancelButton: true,
        confirmButtonText: 'Proceed',
        confirmButtonColor: '#d81e05',
        cancelButtonColor: '#6e7881',
        icon: 'warning',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.formGroup.get('product')?.setValue(value);
          Swal.fire('Processing!', '', 'success');
          setTimeout(() => {
            Swal.close();
            if (this.nextStep != undefined) {
              this.next('');
            }
          }, 2000);
        }
      });
  }
}
