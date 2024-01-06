// 手写ajax
function ajax(method = "GET", url, data = null, async = true) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, async);
  xhr.onreadystatechange = function () {
    console.log(1234);
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      // 执行一些方法
    } else {
      console.error("error");
    }
  };
  xhr.send(data);
}

// 用promise手写ajax
function ajaxPromise(method = "GET", url, data = null, async = true) {
    let promise = new Promise(resol)
};
