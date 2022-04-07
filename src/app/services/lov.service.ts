import { Injectable } from '@angular/core';
import { LOV } from '../objects/LOV';
import { OptionList } from '../objects/option.list';
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
      .post(dto, '/getLOV')
      .then((objArr) => objArr as any[]);
  }

  async getIntLOV(dto: LOV, param: string): Promise<any[]> {
    return Utility.parseIntArray(
      await this.app
        .post(dto, '/getLOV')
        .then((objArr) => objArr as any[]),
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

  async getBusinessLine() {
    const dto = new LOV('A1001800', '92', 'cod_cia~1|cod_sector~2');
    return await this.getIntLOV(dto, "COD_RAMO").then(lovs => lovs as any[]);
  }

  // TODO
  async getClientCategory() {
    const dto = new LOV('A1001800', '92', 'cod_cia~1|cod_sector~2');
    return await this.getIntLOV(dto, "COD_RAMO").then(lovs => lovs as any[]);
  }

  // TODO
  async getRegion(): Promise < any[] > {
    const dto = new LOV(
      'A1000104',
      '5',
      'COD_PAIS~PH');
    return await this.getIntLOV(dto, 'COD_ESTADO').then(lovs => lovs as any[]);
  }

  // TODO
  async getProvince(property: Property): Promise < any[] > {
    const dto = new LOV(
      'A1000100',
      '6',
      'COD_PAIS~PH' +
      '|COD_ESTADO~' + property.region);
    return this.getIntLOV(dto, 'COD_PROV').then(lovs => lovs as any[]);
  }

  // TODO
  async getCity(property: Property): Promise < any[] > {
    const dto = new LOV(
      'A1000102',
      '3',
      'COD_PAIS~PH' +
      '|COD_PROV~' + property.province);
    return this.getIntLOV(dto, 'COD_LOCALIDAD').then(lovs => lovs as any[]);
  }
}
