interface LabelValue {
  label: string;
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myobj = {
  size: 10,
  label: "this is label"
};

printLabel(myobj);

interface Square {
  color: string;
  area: number;
}

//接口可选属性
//额外属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "red" });

//接口只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 10 };
// p1.x = 11

let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a;
// ro[0] = 11;

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) : boolean {
  let result = source.search(subString)
  return result > -1
}

//索引

interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['hhl', 'wu'];
console.log(myArray[0]) //hhl


interface ClockInterface{ 
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m:number) {}
  setTime(d: Date) {}
}


// 继承
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square;

square.color = 'blue'
square.penWidth = 10;
square.sideLength = 10;