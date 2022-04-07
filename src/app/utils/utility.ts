import {
  AbstractControl,
  FormGroup
} from '@angular/forms';

export class Utility {

  static updateValidator(input: AbstractControl, validator: any) {
    input.setValidators(validator);
    input.updateValueAndValidity();
  }

  static setNull(checked: boolean, value: any) {
    return !checked ? null : value;
  }

  static isEmpty(value: any) {
    return value === null || value === '';
  }

  static isUndefined(value: any) {
    return value === undefined || value === null || value === '';
  }

  static toastr(toastr: any, message: string, title: string, type: string) {
    var settings = {
      closeButton: true,
      positionClass: 'toast-top-full-width',
      timeOut: 30000,
      tapToDismiss: false,
      extendedTimeOut: 5000
    }

    switch (type) {
      case "S": {
        toastr.success(message, title, settings);
        break;
      }
      case "W": {
        toastr.warning(message, title, settings);
        break;
      }
      case "E": {
        toastr.error(message, title, settings);
        break;
      }
      default: {
        toastr.info(message, title, settings);
        break;
      }
    }
  }

  //smooth scroll to preferred html element
  static scroll(id: string) {
    //buffer if id is hidden
    setTimeout(() => {
      var el = document.getElementById(id);
      if (!this.isUndefined(el)) {
        el?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 500);
  }

  //converts string value to integer
  static parseIntArray(arr: any[], param: string) {
    arr.forEach(a => {
      a[param] = parseInt(a[param]);
    });
    return arr;
  }

  //format date string
  // static formatDate(d: Date, f ? : string) {
  //   const format = !this.isUndefined(f) ? f : "MM/DD/YYYY";
  //   return moment(d).format(format);
  // }

  // static convertStringDate(d: string, f ? : string) {
  //   const format = !this.isUndefined(f) ? f : "DDMMYYYY";
  //   return moment(d, format).toDate();
  // }

  // static convertDatePickerDate(val: String) {
  //   if (val != null && val != undefined && val !== '') {
  //     const date = val.toString();
  //     var d = new Date(date);
  //     return moment(d).format("MM/DD/YYYY");
  //   }
  //   return "";
  // }
}
