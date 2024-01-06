// 手写new操作
const a = [1, 2, 3];
function test(...x) {
  console.log(arguments[0]);
}
test(a)
