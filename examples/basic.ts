let isDone1: boolean = true;

let decL: number = 20;

let myname: string = 'hello';

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

let x: [string, number];
x = ['hhl', 10];


enum Color {
  Red = 2, //编号
  Green,
  Blue
}

let c: Color = Color.Green;
let c1: string = Color[3];
console.log(c1) // Green

let notSure: any = 4;
notSure = 'hello';


function warnUser() : void {
  console.log('this is warn')
}

function error(message: string) : never {
  throw new Error(message)
}

function inifiniteLoop(): never {
  while(true) {

  }
}

declare function create(o:object | null) : void;

create({prop: 0})
create(null)

let someValue: any = "this is a string";
let strLength : number = (<string>someValue).length;
let strLength1 : number = (someValue as string).length;

