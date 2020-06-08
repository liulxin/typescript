// 数字枚举

enum Role {
  reporter = 1,
  developer = 4,
  maintainer,
  owner,
  guest
}

console.log(Role.reporter); // 1
// 数字枚举通过反向映射来实现 Role[Role['reporter'] = 1] = 'reporter'
console.log(Role); // {1: "reporter", 4: "developer", 5: "maintainer", 6: "owner", 7: "guest", reporter: 1, developer: 4, maintainer: 5, owner: 6, guest: 7}

// 字符串枚举
enum Message {
  success = "ok",
  fail = "err"
}

console.log(Message); // {success: "ok", fail: "err"}

// 异构枚举

enum Answer {
  N,
  Y = "yes"
}

console.log(Answer); // {0: "N", N: 0, Y: "yes"}

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = "123".length
}

// 常量枚举
const enum Month {
  jan,
  feb,
  mar
}

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = "app",
  b = "ban"
}

let e: E = 3;
let f: F = 2;

let e1: E.a = 1;
let e2: E.b;
let e3: E.a = 1;

let g1: G = G.a;
let g2: G = G.b;

enum R {
  "zhangsan" = 1,
  "lisi" = 2
}
function initByRole(role: number): void {
  if (role === R.zhangsan) {
    console.log(1);
  }

  if (role === R.lisi) {
    console.log(2);
  }
}

initByRole(1);
initByRole(2);
