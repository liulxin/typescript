// 只能返回 strign 类型
// function getData(value: string): string {
//   return value
// }

// 泛型 可以支持不特定的苏剧类型 传入的参数和返回的一致

function getData<T>(value: T): T {
	return value
}

console.log(getData<string>('string'))
console.log(getData<number>(111))

// 泛型类

// class MinClass {
// 	list: number[] = []

// 	add(num: number): void {
// 		this.list.push(num)
//   }

// 	min(): number {
// 		return this.list.slice().sort()[0]
// 	}
// }

// const m = new MinClass()
// m.add(2)
// m.add(5)
// m.add(1)
// m.add(-1)
// console.log(m.min())

class MinClass<T> {
	list: T[] = []

	add(val: T): void {
		this.list.push(val)
	}

	min(): T {
		return this.list.slice().sort()[0]
	}
}

const m = new MinClass<number>()
m.add(2)
m.add(5)
console.log(m.min())

const m1 = new MinClass<string | number>()
m1.add('d')
m1.add('c')
// m1.add(1)
console.log(m1.min())

// 泛型接口

// interface ConfigFn {
// 	(val1: string, val2: string): string
// }

// let setData: ConfigFn = (val1: string, val2: string) => {
// 	return val1 + val2
// }

// console.log(setData('a', 'v'))

// 第一种写法

interface ConfigFn {
	<T>(val: T): T
}

let setData: ConfigFn = <T>(value: T): T => {
	return value
}
console.log(setData<string>('a'))
console.log(setData<number>(1))

// 第二种

interface ConfigFn2<T> {
	(val: T): T
}

function setData2<T>(value: T): T {
	return value
}

let myGetData: ConfigFn2<string> = setData2
let myGetData2: ConfigFn2<number> = <T>(val: T) => {
  return val
}

console.log(myGetData('aa'))
console.log(myGetData2(22))



class User {
  username: string | undefined
  password: string | undefined
}

class MysqlDb<T> {
  add(user: T): boolean {
    console.log(user)
    return true
  }
}

var u = new User()
u.username = 'zhangsan'
u.password = '123345'

var db = new MysqlDb<User>()
db.add(u)