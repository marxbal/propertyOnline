import { Injectable } from '@angular/core';
import { LOV } from '../objects/lov';
import { Property } from '../objects/property';
import { Utility } from '../utils/utility';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class LovService {
  constructor(private app: AppService) {}

  async getLOV(dto: LOV): Promise<any[]> {
    return this.app
      .post(dto, 'getLOV')
      .then((objArr) => objArr as any[]);
  }

  async getIntLOV(dto: LOV, param: string): Promise<any[]> {
    return Utility.parseIntArray(
      await this.app
        .post(dto, 'getLOV')
        .then((objArr) => objArr as any[]),
      param
    );
  }

  async getDocumentID() {
    const dto = new LOV('A1002300', '3', 'COD_CIA~1');
    return await this.getLOV(dto).then(lovs => lovs as any[]);
  }

  async getRegion(): Promise < any[] > {
    const dto = new LOV(
      'A1000104',
      '5',
      'COD_PAIS~PHL');
    return await this.getIntLOV(dto, 'COD_ESTADO').then(lovs => lovs as any[]);
  }

  async getProvince(property: Property): Promise < any[] > {
    const dto = new LOV(
      'A1000100',
      '6',
      'COD_PAIS~PHL' +
      '|COD_ESTADO~' + property.region);
    return this.getIntLOV(dto, 'COD_PROV').then(lovs => lovs as any[]);
  }

  async getCity(property: Property): Promise < any[] > {
    const dto = new LOV(
      'A1000102',
      '3',
      'COD_PAIS~PHL' +
      '|COD_PROV~' + property.province);
    return this.getIntLOV(dto, 'COD_LOCALIDAD').then(lovs => lovs as any[]);
  }
}
