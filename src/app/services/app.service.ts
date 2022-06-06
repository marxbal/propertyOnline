import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment';

import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { Utility } from '../utils/utility';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  async post(param: any, endpoint: string): Promise<any> {
    return (
      this.http
        .post(this.apiUrl + endpoint, param)
        .toPromise()
        .then((response) => response)
        // .catch(err => console.log(err));
        .catch((err) => this.alertErr(err))
    );
  }

  async get(endpoint: string): Promise<any> {
    return (
      this.http
        .get(this.apiUrl + endpoint)
        .toPromise()
        .then((response) => response)
        // .catch(err => console.log(err));
        .catch((err) => this.alertErr(err))
    );
  }

  // post(param: any, endpoint: string): Observable<any> {
  //   this.spinner.show();
  //   return this.http
  //     .post(this.apiUrl + endpoint, param, this.getHeaders())
  //     .pipe(
  //       map((res: any) => {
  //         if (res) {
  //           return res;
  //         }
  //       })
  //     )
  //     .pipe(
  //       catchError((err: any) => {
  //         this.alertErr(err);
  //         this.spinner.hide();
  //         return throwError(err.error);
  //       })
  //     );
  // }

  // get(endpoint: string): Observable<any> {
  //   this.spinner.show();
  //   return this.http
  //     .get(this.apiUrl + endpoint, this.getHeaders())
  //     .pipe(
  //       map((res: any) => {
  //         if (res) {
  //           return res;
  //         }
  //       })
  //     )
  //     .pipe(
  //       catchError((err: any) => {
  //         this.alertErr(err);
  //         this.spinner.hide();
  //         return throwError(err.error);
  //       })
  //     );
  // }

  // getHeaders() {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json');
  //   headers = headers.set(
  //     'Authorization',
  //     'Basic ' + btoa(c.CLIENT + ':' + c.SECRET)
  //   );
  //   headers = headers.set(InterceptorSkipHeader, '');

  //   return {
  //     headers,
  //   };
  // }

  alertErr(err: any) {
    const error = err.error;
    let title = 'Ooops! Something went wrong.';
    let message = 'Error! We are unable to process your request. Request response is emtpy. Please try again later.';
    if (!_.isEmpty(error)) {
      const hasMessage = !Utility.isUndefined(error.message);

      title = 'Ooops! ' + (hasMessage ? 'System Error' : err.name);
      message =
        '<p>Error! We are unable to process your request at the moment. ' +
        (hasMessage ? error.message : err.message) +
        '.</p><p>Path: ' +  err.url + '.</p>';
    }

    Swal.fire({
      icon: 'error',
      title: title,
      html: message,
    });
  }
}
