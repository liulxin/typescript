// TypeScript 接口定义如下：
// interface interface_name { 
// }

// 定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson
interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 

var customer:IPerson = { 
  firstName:"Tom",
  lastName:"Hanks", 
  sayHi: ():string =>{return "Hi there"} 
}

// 接口继承 extends
// Typescript 允许接口继承多个接口

interface Person { 
  age:number 
} 

interface Musician extends Person { 
  instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)


// 多继承
interface IParent1 { 
  v1:number 
} 

interface IParent2 { 
  v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)