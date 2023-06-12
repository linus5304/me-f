import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../utils/config';
import { BaseType } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http: HttpClient) { }

  getUnits() {
    return this.http.get<BaseType[]>(`${baseUrl}/units`);
  }
}
