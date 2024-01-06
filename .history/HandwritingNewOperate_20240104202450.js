// 手写new操作
const a = [1, 2, 3];
a.push(...[4, 5, 6, 7]);
const c = a.push(4);
console.log(a);
