function run(): string {
	return 'string'
}

let run1 = function(): string {
	return 'string'
}

// 传参
function getInfo(str: string): string {
	return str
}

// console.log(getInfo('this is string'))

let getInfo1 = function(str: string): string {
	return str
}

// 可选参数--需在参数的最后，不可放置在必填参数之前

let getInfo2 = function(name: string, age?: number): void {
	console.log(`name: ${name}, age: ${age}`)
}

// getInfo2('lisi', 18)
// getInfo2('lisi')

// 默认参数

function getInfo3(name: string, age: number = 20) {
	console.log(`name: ${name}, age: ${age}`)
}
// getInfo3('lisi', 18)
// getInfo3('lisi')

// 剩余参数

function getInfo4(name: string, ...rest: string[]): string {
	console.log(rest)
	return `${name}`
}

// getInfo4('this', 'is', 'string')

// 函数重载

// ES5 会替换
// function ht(config) {}
// function ht(config, value) {}

// ts
function getInfo5(name: string): string;
function getInfo5(name: number): number;
function getInfo5(str: any): any {
  return str
}

console.log(getInfo5('name'))
console.log(getInfo5(20))
// console.log(getInfo5(true)) // error


// 箭头函数

let get = (str: string): string => {return str}