window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('jump-top');
    if (window.scrollY > 300) { // 当滚动超过200像素时显示
        scrollToTop.classList.remove('hide');
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
        scrollToTop.classList.add('hide');
    }
});

// 添加点击事件，点击 jump-top 元素时滚动至页面顶部
document.getElementById('jump-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});