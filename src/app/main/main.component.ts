import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResultType } from '../../utils/types';

type Figure = 'Rectangle' | 'Circle' | 'Triangle' | 'Square';

type FormDataType = {
  figure: Figure;
  lengthA: number;
  lengthB: number;
  radius: number;
  unit: string;
  significantDigits: number;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  formEventData: { data: FormDataType, result: ResultType; lengthC: number; } | undefined;

  setFormEventData(value: { data: FormDataType, result: ResultType; lengthC: number; }): void {
    this.formEventData = value;
  }


}
