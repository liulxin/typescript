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
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('dong', 'wu');
console.log(greeter(user));
