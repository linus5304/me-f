export function formatResult(num: number | undefined | null, unit: string, type?: 'area'): string {
    if (type === "area") {
        return num?.toLocaleString() + " " + unit + "²";
    }
    return num?.toLocaleString() + " " + unit;
}

export function areaOfRectangle(lengthA: number, lengthB: number): number {
    return lengthA * lengthB;
}

export function perimeterOfRectangle(lengthA: number, lengthB: number): number {
    return 2 * (lengthA + lengthB);
}

export function areaOfCircle(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}

export function perimeterOfCircle(radius: number): number {
    return 2 * Math.PI * radius;
}

export function areaOfTriangle(lengthA: number, lengthB: number): number {
    return 0.5 * lengthA * lengthB;
}

export function perimeterOfTriangle(lengthA: number, lengthB: number): number {
    return lengthA + lengthB + Math.sqrt(Math.pow(lengthA, 2) + Math.pow(lengthB, 2));
}

export function converFromMetersTo(num: number | undefined | null, unit: string): number {
    if(!num) return 0;
    if (unit === "mm") {
        return num * 1000;
    }
    if (unit === "cm") {
        return num * 100;
    }
    if (unit === "dm") {
        return num * 10;
    }
    if (unit === "km") {
        return num / 1000;
    }
    return num;
}