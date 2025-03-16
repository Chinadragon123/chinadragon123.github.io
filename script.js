let nav = document.querySelectorAll(".nav li");
function activeLink() {
    nav.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
nav.forEach((item) => item.addEventListener("click", activeLink));

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('已复制至剪贴板：' + text);
    }, function(err) {
        alert('复制失败，原因：', err)
    });
}

document.getElementById('QRcode').onclick = function() {
    document.getElementById('dialog').style.display = 'flex';
};

document.getElementById('close').onclick = function() {
    document.getElementById('dialog').style.display = 'none';
};

window.onclick = function(event) {
    const dialog = document.getElementById('dialog');
    if (event.target === dialog) {
        dialog.style.display = 'none';
    }
};

const iframeContainer = document.getElementById('iframeContainer');

document.addEventListener('mousemove', function(event) {
    // 获取浏览器窗口的宽度
    const windowWidth = window.innerWidth;

    // 判断鼠标位置是否在窗口最右侧（例如：距离右侧50px内）
    if (event.clientX > windowWidth - 50) {
        iframeContainer.style.display = 'block'; // 显示 iframe
    } else {
        iframeContainer.style.display = 'none';  // 隐藏 iframe
    }
});
