import { Component } from '@angular/core';
import { FormDataType, ResultType } from '../../utils/types';

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
