import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formatResult } from '../../utils/functions';
import { areaOfRectangle, perimeterOfRectangle, areaOfCircle, perimeterOfCircle, areaOfTriangle, perimeterOfTriangle } from '../../utils/functions';
import { FormDataType, ResultType } from '../../utils/types';
import { FiguresService } from '../figures.service';
import { UnitsService } from '../units.service';

type BaseType = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private figuresService: FiguresService, private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.getFigures();
    this.getUnits();
  }

  figures: { id: number, name: string; }[] = [];
  units: BaseType[] = [];

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


  getFigures(): void {
    this.figuresService.getFigures()
      .subscribe(figures => this.figures = figures);
  }

  getUnits(): void {
    this.unitsService.getUnits()
      .subscribe(units => this.units = units);
  }

}
