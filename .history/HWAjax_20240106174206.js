// 手写ajax
function ajax(method = "GET", url, data = null, async = true) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, async);
  xhr.onreadystatechange = function () {
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
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve()
        // 执行一些方法
      } else {
        reject()
        console.error("error");
      }
    };
    xhr.send(data);
  });
  return promise;
}
