import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formatResult } from '../../utils/functions';
import { areaOfRectangle, perimeterOfRectangle, areaOfCircle, perimeterOfCircle, areaOfTriangle, perimeterOfTriangle } from '../../utils/functions';
import { FormDataType, ResultType } from '../../utils/types';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent {

  constructor(private fb: FormBuilder) { }

  figureForm = this.fb.group<FormDataType>(
    {
      figure: 'Rectangle',
      lengthA: 0,
      lengthB: 0,
      radius: 0,
      unit: 'cm',
      significantDigits: 2
    }
  );

  formatResult = formatResult;
  @Output() newformDataEvent = new EventEmitter<{ data: FormDataType, result: ResultType; lengthC: number; }>();

  result: ResultType = { area: 0, perimeter: 0 };
  lengthC: number = 0; // used for the case of a triangle

  figures: { id: number, name: string; }[] = [
    { id: 1, name: 'Rectangle' },
    { id: 2, name: 'Circle' },
    { id: 3, name: 'Triangle' },
    { id: 4, name: 'Square' }
  ];

  units: { id: number, name: string; }[] = [
    { id: 1, name: 'cm' },
    { id: 2, name: 'm' },
    { id: 3, name: 'dm' },
    { id: 4, name: 'km' }
  ];

  significantDigits: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  onSubmit(): void {
    if (this.figureForm.value.figure === "Rectangle" || this.figureForm.value.figure === "Square") {
      this.result.area = areaOfRectangle(Number(this.figureForm.value.lengthA), Number(this.figureForm.value.lengthB));
      this.result.perimeter = perimeterOfRectangle(Number(this.figureForm.value.lengthA), Number(this.figureForm.value.lengthB));
    }
    if (this.figureForm.value.figure === "Circle") {
      this.result.area = areaOfCircle(Number(this.figureForm.value.radius));
      this.result.perimeter = perimeterOfCircle(Number(this.figureForm.value.radius));
    }
    if (this.figureForm.value.figure === "Triangle") {
      this.result.area = areaOfTriangle(Number(this.figureForm.value.lengthA), Number(this.figureForm.value.lengthB));
      this.lengthC = Math.sqrt(Math.pow(Number(this.figureForm.value.lengthA), 2) + Math.pow(Number(this.figureForm.value.lengthB), 2));
      this.result.perimeter = perimeterOfTriangle(Number(this.figureForm.value.lengthA), Number(this.figureForm.value.lengthB));
    }
    this.newformDataEvent.emit({ data: this.figureForm.value as FormDataType, result: this.result, lengthC: this.lengthC });
  }

  setSignificantDigits(num: number, digits: number): number {
    return Number(num.toFixed(digits));
  }



  onClear(): void {
    this.figureForm.reset({
      figure: this.figureForm.value.figure,
      unit: '',
    });
    this.result.area = 0;
    this.result.perimeter = 0;
  }

}
