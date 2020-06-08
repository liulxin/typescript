interface labInter {
	label: string
	age: number
	name?: string
}

function lab(labArg: labInter): string {
	console.log(labArg)
	return `${labArg.label}, ${labArg.age}`
}

lab({ label: 'this is label', age: 20 })

// 函数
interface encrypt {
	(key: string, value: string): string
}

let md5: encrypt = (key: string, val: string): string => {
	return `${key}, ${val}`
}

console.log(md5('md5', 'this is val'))

// 可索引接口

interface userArr {
	[index: number]: string
}

let arr: userArr = ['this', 'is']
console.log(arr)

interface userObj {
	[index: string]: string
}

let obj: userObj = {
	name: 'this is ',
	type: 'obj'
}
console.log(obj)

// 类类型接口

interface ani {
	name: string
	eat(str: string): void
}

class Animal implements ani {
	name: string
	constructor(name: string) {
		this.name = name
	}
	eat(str: string) {
		console.log(`${this.name} eating ${str}`)
	}
}

let dog = new Animal('dog')
dog.eat('bananer')

// 接口继承

interface Anim {
	eat(): void
}

interface Person1 extends Anim {
	work(): void
}

class PP {
	name: string
	constructor(name: string) {
		this.name = name
	}
	code() {
		console.log(`${this.name} is coding`)
	}
}

class Pers extends PP implements Person1 {
	name: string
	constructor(name: string) {
		super(name)
	}
	eat() {
		console.log(`${this.name} this is eat`)
	}
	work() {
		console.log(`${this.name} this is work`)
	}
}

const pers = new Pers('hahu')
pers.eat()
pers.code()
pers.work()
