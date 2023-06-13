import { FormControl, ValidatorFn } from "@angular/forms";

export type Figure = 'Rectangle' | 'Circle' | 'Triangle' | 'Square';

export type FormDataType = {
    figure: Figure;
    lengthA: (number | ValidatorFn[])[];
    lengthB: (number | ValidatorFn[])[];
    radius: (number | ValidatorFn[])[];
    unit: string;
    significantDigits: number;
};

export type FormDataResultType = {
    figure: Figure;
    lengthA: number;
    lengthB: number;
    radius: number;
    unit: string;
    significantDigits: number;
};

export type ResultType = {
    area: number;
    perimeter: number;
};

export type BaseType = {
    id: number;
    name: string;
};

export function nonZero(control: FormControl): { [key: string]: any; } {
    if (Number(control.value) < 0) {
        return { nonZero: true };
    } else {
        return {nonZero: false};
    }
}