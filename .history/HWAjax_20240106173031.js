// 手写ajax
function ajax(method='GET', url, data = null, async = true) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
        if(xhr.status === 200) {
            //
        }
    }
}