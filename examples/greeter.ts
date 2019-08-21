// function greeter(person: string) {
//   return 'hello' + person
// };

// let user = 'dong';
// console.log(greeter(user))



// interface Person {
//   firstName: string,
//   lastName: string
// }

// function greeter(person: Person) {
//   return 'hello ' + person.firstName + ' ' + person.lastName
// }

// let user = {
//   firstName: 'dong',
//   lastName: 'yuan'
// }

// console.log(greeter(user))



class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('dong', 'wu')

console.log(greeter(user))