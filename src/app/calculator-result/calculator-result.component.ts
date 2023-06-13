import { Component, Input, OnInit } from '@angular/core';
import { converFromMetersTo, formatResult } from '../../utils/functions';
import { FormDataResultType, ResultType } from '../../utils/types';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.css']
})
export class CalculatorResultComponent implements OnInit {
  formatResult = formatResult;
  converFromMetersTo = converFromMetersTo;

  @Input() result: ResultType | undefined = { area: 0, perimeter: 0 };
  @Input() lengthC: number | undefined = 0; // used for the case of a triangle
  @Input() figureForm: FormDataResultType | undefined;
  units: { id: number, name: string; }[] = [];
  selectedUnit: string = "m";

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.getUnits();
    this.selectedUnit = this.figureForm?.unit || "m";
  }

  setUnit(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.selectedUnit = input.value;
    console.log("Unit changed", input.value);
  }

  onChangeUnit(unit: string): void {
    // console.log("Unit changed", unit);
  }

  getUnits(): void {
    this.unitsService.getUnits()
      .subscribe(units => this.units = units);
  }

}
