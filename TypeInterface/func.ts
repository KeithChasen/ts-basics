type SumB = (a: number, b: number) => number;

const sum: SumB = (a, b) => a + b;

interface SumA {
    (a: number, b: number): number
}

const sum1: SumA = (a, b) => a + b;