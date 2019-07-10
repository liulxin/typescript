// 布尔值

let isDone: boolean = false;

// 数字
// 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number
let desNumber: number = 6;

// 字符串
let nameStr: string = 'dongwudi';
let senStr: string = `this is ${nameStr}`;

// 数组
let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

//元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

let x: [string, number];
x = ['hello', 1];

//枚举 enum
// enum类型是对JavaScript标准数据类型的一个补充
// 默认情况下，从0开始为元素编号, 也可以手动的指定成员的数值

// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

// console.log(c); // 1

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

console.log(c); //2

// Any
// 不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查, 就可以使用any来标记这些变量
let notSure: any = 4;
notSure = 'this is string';
notSure = 4.324;
console.log(notSure.toFixed(2)) // 4.32


// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
let prettySure: Object = 4;
// prettySure.toFixed();//: Property 'toFixed' does not exist on type 'Object'

// Void
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void

function warnUser(): void {
  console.log(1)
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// Null 和 Undefined

// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量
let nm: number = undefined;
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题

// Never
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）即使 any也不可以赋值给never

// 返回never的函数必须存在无法达到的终点
function error2(message: string): never {
  throw new Error(message);
}

// Object
// declare function create1(o: object | null): void;//declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对
// create1({ prop: 0 }); // OK
// create1(null); // OK

// 类型断言
// 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
// 1. 尖括号语法
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

someValue = true;
let str2: boolean = <boolean>(someValue);

console.log(str2) // true

// 2. as 语法
// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;