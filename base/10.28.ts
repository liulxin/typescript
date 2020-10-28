interface Array<T> {
  reverse(): T[]
}

let numArr = [1, 2]

let reverseNums = numArr.reverse()


function extend<T, U> (first: T, second: U) : T & U {
  const result = <T & U>{}

  for (let id in first) {
    (<T>result)[id] = first[id]
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id]
    }
  }
  return result
}

const x = extend({a: 1}, {b: '2'})

// console.log(x) // {a: 1, b: '2'}