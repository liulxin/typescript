// 原始类型
let bool: boolean = true;
let num: number = 1;
let str: string = "str";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 联合类型
let arr3: Array<number | string> = [1, 2, 3, 'str', 4]

// 元组
let tuple: [number, string] = [0, '1']

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 2

// symbol
let s1: symbol = Symbol()


// undefined null
let un: undefined = undefined
let nu: null = null

// num = undefined
// num = null

// void
let noR = (): void => {}

// any

let x: any

x = 1
x = []

// never
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while(true) {}
}
