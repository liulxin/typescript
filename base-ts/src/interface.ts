interface List {
  readonly id: number;
  name: string;
  // [x: string]: any
  age?: number;
}

interface Result {
  data: List[];
}

function render(h: Result) {
  h.data.forEach(value => {
    console.log(value);
    // value.id ++
    if (value.age) {
      console.log(value.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "A", age: 12 },
    { id: 2, name: "B" }
  ]
};

render(result);

// render({
//   data: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B", age: 23 }
//   ]
// } as Result);

// render(<Result>{
//   data: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B", age: 23 }
//   ]
// });

// render({
//   data: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B", age: 23 }
//   ]
// });

interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["A", "B"];

interface Names {
  [x: string]: string;
  // y: number
  [z: number]: string;
}

let names: Names = {
  x: "A"
};

// let add_: (x: number, y:number) => number
// interface Add {
//   (x: number, y:number) : number
// }
type Add = (x: number, y:number) => number
let add_: Add = (a, b) => a + b

interface Lib {
  (): void
  version: string
  doSomething(): void
}

let lib: Lib = (() => {}) as Lib
lib.version = '1.2'
lib.doSomething = () => {}
console.log(lib)