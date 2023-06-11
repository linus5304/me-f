import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

type Figure = 'Rectangle' | 'Circle';

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
  constructor(private fb: FormBuilder) { }

  result: { area: number, perimeter: number; } = { area: 0, perimeter: 0 };

  figures: { id: number, name: string; }[] = [
    { id: 1, name: 'Rectangle' },
    { id: 2, name: 'Circle' }
  ];

  units: { id: number, name: string; }[] = [
    { id: 1, name: 'mm' },
    { id: 2, name: 'cm' },
    { id: 3, name: 'm' }
  ];

  significantDigits: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

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

  onSubmit(): void {
    console.log(this.figureForm.value);
    if (this.figureForm.value.figure == "Rectangle") {
      this.result.area = Number(this.figureForm.value.lengthA) * Number(this.figureForm.value.lengthB);
      this.result.perimeter = 2 * (Number(this.figureForm.value.lengthA) + Number(this.figureForm.value.lengthB));
    }
    else if (this.figureForm.value.figure == "Circle") {
      this.result.area = Math.PI * Math.pow(Number(this.figureForm.value.radius), 2);
      this.result.perimeter = 2 * Math.PI * Number(this.figureForm.value.radius);
    }
    this.result.area = this.setSignificantDigits(this.result.area, Number(this.figureForm.value.significantDigits));
    this.result.perimeter = this.setSignificantDigits(this.result.perimeter, Number(this.figureForm.value.significantDigits));
  }

  setSignificantDigits(num: number, digits: number): number {
    return Number(num.toFixed(digits));
  }

  formatResult(num: number, type: "area" | "perimeter"): string {
    if (type == "area") {
      return num.toLocaleString() + " " + this.figureForm.value.unit + "²";
    }
    if (type == "perimeter") {
      return num.toLocaleString() + " " + this.figureForm.value.unit;
    }
    return "";
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
