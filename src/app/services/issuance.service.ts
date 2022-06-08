import { Injectable } from '@angular/core';
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

  async upload(data: FormData): Promise<ReturnDTO> {
    return this.app
      .post(data, 'issue/upload')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }
}
