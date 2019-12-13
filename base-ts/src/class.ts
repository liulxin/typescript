class Dog {
  constructor(name: string) {
    this.name = name
  }
  public name: string = 'dog'
  run() {}
  private pri() {}
  protected pro() {}
}

// 
console.log(Dog.prototype)

let dog = new Dog('wawa')

// console.log(dog)
// dog.pri()


class WaWa extends Dog {
  color: string

  constructor(name: string, color: string) {
    super(name)
    this.color = color
    this.pro()
  }
}

// 抽象类

abstract class Animal {
  constructor(public name: string) {
    this.name = name
  }

  abstract sleep(): void
}

// let animal = new Animal()

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  sleep() {
    console.log('sleep cat')
  }
}

let cat = new Cat('mao')
console.log(cat)
cat.sleep()

class Sheep extends Animal {
  constructor(name: string) {
    super(name)
  }
  sleep() {
    console.log('sleep sheep')
  }
}

let sheep = new Sheep('sheep')

let animals: Animal[] = [cat, sheep]

animals.forEach(item => {
  item.sleep()
})

// 

class workFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new workFlow().step1().step2()