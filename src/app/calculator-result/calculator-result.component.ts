import { Component, Input, OnInit } from '@angular/core';
import { formatResult } from '../../utils/functions';
import { FormDataType, ResultType } from '../../utils/types';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.css']
})
export class CalculatorResultComponent implements OnInit {
  formatResult = formatResult;

  @Input() result: ResultType | undefined = { area: 0, perimeter: 0 };
  @Input() lengthC: number | undefined = 0; // used for the case of a triangle
  @Input() figureForm: FormDataType | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.figureForm);
  }

}
