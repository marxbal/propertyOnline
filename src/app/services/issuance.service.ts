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
      .post(property, '/quote/issueQuote')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }
}
