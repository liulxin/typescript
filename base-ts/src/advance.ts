let a = 1;
let b = [2, null];
let c = (x = 1) => x + 1;

interface Foo {
  bar: number;
}

// let foo = {} as Foo
// foo.bar = 1

let foo: Foo = {
  bar: 1
};

/**
 * x 兼容 y: x (目标类型) = y (源类型)
 */

let s: string = "s";
//  s = null

// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x1: X = { a: 1, b: 2 };
let y1: Y = { a: 1, b: 2, c: 3 };

x1 = y1;
//  y1 = x1

// 函数兼容性

type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1)参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let a2 = (p1?: number, p2?: number) => {};
let a3 = (...args: number[]) => {};

// a1 = a2
// a1 = a3
// a2 = a3
// a2 = a1
// a3 = a1
// a3 = a2

// 2)参数类型
let handler3 = (a: string) => {};
// hof(handler3)

enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log("java");
  }
  java: any;
}

class JavaScript {
  helloJavascript() {
    console.log("JavaScript");
  }

  javascript: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // if((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavascript()
  // }

  // instanceof
  // if(lang instanceof Java) {
  //   lang.helloJava()
  // }else {
  //   lang.helloJavascript()
  // }

  // in
  // if('java' in lang) {
  //   lang.helloJava()
  // }else {
  //   lang.helloJavascript()
  // }

  // typeof
  // if(typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  //
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }

  return lang;
}

interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

class Dog1 implements DogInterface {
  run() {}
  eat() {}
}

class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}

enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1();

  // pet.eat()

  return pet;
}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      return ((e: never) => {
        throw new Error();
      })(s);
  }
}
console.log(area({ kind: "circle", r: 1 }));
