// 布尔类型

let success: boolean = true
// success = false // good
// success = 1 // error

// 数字类型

let two: number = 1

// 字符串类型

let str: string = 'this is string'

// 数组类型

let arr: number[] = [1, 2, 3]

let arr1: Array<string> = ['1', '2']

// 元组类型 属于数组的一种

let arr2: [number, string] = [1, '2']

// 枚举类型

enum Flag {
	success = 2,
	error
}

let s: Flag = Flag.success
let e: Flag = Flag.error
// console.log(s) // 2
// console.log(e) // 3

// 任意类型
let num: any = 123
num = '123'

// undefined

let un: undefined
// console.log(un)

let un1: undefined | number
un1 = 2

// null

let nul: null

// void

function fn(str: string): void {
	console.log(str)
}
// fn('123')
