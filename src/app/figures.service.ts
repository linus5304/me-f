import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../utils/config';
import { BaseType } from '../utils/types';



@Injectable({
  providedIn: 'root'
})
export class FiguresService {


  constructor(private http: HttpClient) { }

  getFigures() {
    return this.http.get<BaseType[]>(`${baseUrl}/figures`, );
  }
}
