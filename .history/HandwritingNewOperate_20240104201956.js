// 手写new操作
const a = [1, 2, 3];
function test(...a) {
  console.log(arguments[0]);
}
test(a)
