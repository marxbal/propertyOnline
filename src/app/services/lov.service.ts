import { Injectable } from '@angular/core';
import { LOV } from '../objects/LOV';
import { OptionList } from '../objects/option.list';
import { Utility } from '../utils/utility';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class LovService {
  constructor(private app: AppService) {}

  async getLOV(dto: LOV): Promise<any[]> {
    return this.app.post(dto, '/getLOV').then((objArr) => objArr as any[]);
  }

  async getIntLOV(dto: LOV, param: string): Promise<any[]> {
    return Utility.parseIntArray(
      await this.app.post(dto, '/getLOV').then((objArr) => objArr as any[]),
      param
    );
  }

  async getOptionList(dto: OptionList): Promise<any[]> {
    return this.app
      .post(dto, '/getOptionList')
      .then((objArr) => objArr as any[]);
  }

  async getIntOptionList(dto: OptionList, param: string): Promise<any[]> {
    return Utility.parseIntArray(
      await this.app
        .post(dto, '/getOptionList')
        .then((objArr) => objArr as any[]),
      param
    );
  }
}
