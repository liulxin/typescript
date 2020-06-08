// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }

//   run(): void{
//     console.log(`${this.name} is running`)
//   }

//   getName(): string {
//     console.log(`${this.name} is running`)
//     return this.name
//   }

//   setName(name: string): void {
//     this.name = name
//   }
// }

// const tom = new Person('tom')
// tom.run()
// tom.setName('joke')
// tom.getName()

// 继承

// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }

//   run(): void{
//     console.log(`${this.name} is running`)
//   }

//   getName(): string {
//     console.log(`${this.name} is running`)
//     return this.name
//   }

//   setName(name: string): void {
//     this.name = name
//   }
// }

// class Child extends Person {
//   constructor(name: string) {
//     super(name)
//   }

//   learn() {
//     console.log(`${this.name} is learn typescript`)
//   }
// }

// const anni = new Child('anni')
// anni.getName()
// anni.learn()

// 修饰符

/**
 * public: 公用 类，子类，类外部都可以使用
 * protected: 保护 类，子类里面可以访问，类外部不可使用
 * private：私有 类里面可以访问，子类，类外部都不可以访问
 */

class Person {
	public name: string
	protected age: number
	private money: number

	constructor(name: string, age: number, money: number) {
		this.name = name
		this.age = age
		this.money = money
	}

	static sex: string = 'man'

	protected run(): void {
		console.log(`age: ${this.age}, ${this.name} is running, money: ${this.money}`)
	}

	//静态方法不能访问实例属性，可以设置静态属性
	static work(): void {
		// console.log(`age: ${this.age}, ${this.name} is running, money: ${this.money}`) // age money 访问不了
		console.log(`${Person.sex}`)
	}
}

class Child extends Person {
	constructor(name: string, age: number, money: number) {
		super(name, age, money)

		this.run()
	}

	talk() {
		// console.log(`age: ${this.age}, ${this.name} is running, money: ${this.money}`) // money 访问不了
		console.log(`age: ${this.age}, ${this.name} is running`)
	}
}

const tom = new Child('tom', 18, 10000)
// tom.run() // 外部访问不了
tom.talk()
Child.work()
console.log(Child.sex)



// 抽象类和抽象方法用来定义标准
// 抽象类提供其他类继承的基类，不能直接实例化

abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }
  abstract eat(): void; // 不包含具体实现，必须在派生类中实现
}

// 抽象类的子类必须实现抽象类中的抽象方法
class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat(){
    console.log(`${this.name} is eating`)
  }
}

const dog = new Dog('jary')
dog.eat()