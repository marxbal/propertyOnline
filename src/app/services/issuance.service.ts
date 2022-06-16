import { Injectable } from '@angular/core';
import { emailData } from '../objects/emailData';
import { Property } from '../objects/property';
import { ReturnDTO } from '../objects/return.dto';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class IssuanceService {
  constructor(private app: AppService) {}

  async issueQuote(property: Property): Promise<ReturnDTO> {
    return this.app
      .post(property, 'issue/quote')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async sendEmail(emailData: emailData): Promise<ReturnDTO> {
    return this.app
      .post(emailData, 'sendEmail')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async informUW(emailData: emailData): Promise<ReturnDTO> {
    return this.app
      .post(emailData, 'sendEmail')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async upload(data: FormData): Promise<ReturnDTO> {
    return this.app
      .post(data, 'upload')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }
}
