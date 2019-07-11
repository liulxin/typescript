class Car { 
  // 字段
  engine:string; 
  
  // 构造函数
  constructor(engine:string) { 
     this.engine = engine 
  }  
  
  // 方法
  disp():void { 
     console.log("函数中显示发动机型号  :   "+this.engine) 
  } 
} 

// 创建一个对象
var obj = new Car("XXSY1")

// 访问字段
console.log("读取发动机型号 :  "+obj.engine)  

// 访问方法
obj.disp()


//类的继承 extends
class Shape { 
  Area:number 
  
  constructor(a:number) { 
     this.Area = a 
  } 
} 

class Circle extends Shape { 
  disp():void { 
     console.log("圆的面积:  "+this.Area) 
  } 
}
 
var obj1 = new Circle(223); 
obj1.disp()


// static 关键字 用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
class StaticMem {  
  static num:number; 
  
  static disp():void { 
     console.log("num 值为 "+ StaticMem.num) 
  } 
} 

StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

// 访问控制修饰符
// ypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
// public（默认） : 公有，可以在任何地方被访问。

// protected : 受保护，可以被其自身以及其子类和父类访问。

// private : 私有，只能被其定义所在的类访问

class Encapsulate { 
  str1:string = "hello" 
  private str2:string = "world" 
}

var obj3 = new Encapsulate() 
console.log(obj3.str1)     // 可访问 
// console.log(obj3.str2)   // 编译错误， str2 是私有的

