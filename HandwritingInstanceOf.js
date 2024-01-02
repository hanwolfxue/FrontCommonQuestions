// 手写instanceOf
function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (proto) {
    if (proto === prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
  return false;
}
