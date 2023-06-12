export type Figure = 'Rectangle' | 'Circle' | 'Triangle' | 'Square';

export type FormDataType = {
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