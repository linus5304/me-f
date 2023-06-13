import { Component } from '@angular/core';
import { FormDataResultType, ResultType } from '../../utils/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  formEventData: { data: FormDataResultType, result: ResultType; lengthC: number; } | undefined;

  setFormEventData(value: { data: FormDataResultType, result: ResultType; lengthC: number; }): void {
    this.formEventData = value;
  }
}
