export function getSquareArea(side: number): number {
    return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
    return base * height;
}

export function getTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
    return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
    sideA: number,
    sideB: number,
    sideC: number
): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}

export function getLosangArea(diagA: number, diagB: number): number {
    return (diagA * diagB) / 2;
}

export function getTrapArea(baseA: number, baseB: number, height: number): number {
    return ((baseA + baseB) * height) / 2;
}

export function getCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
}

const numberInput = 7;

export const isItAPrime = (param: number) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);


type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("O valor da coordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });