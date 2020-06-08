// function log<T>(value: T): T {
//   console.log(value);

//   return value;
// }

// log<string[]>(["a", "b"]);

// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log {
//   <T>(value: T): T
// }

// interface Log<T> {
//   (value: T): T
// }



// class Log<T> {
//   run(value: T) {
//     console.log(value);
//   }
// }

// let log1 = new Log<number>();
// log1.run(1);

// let log2 = new Log()
// log2.run('str')


interface Length {
  length: number
}
function log<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}

log([1])