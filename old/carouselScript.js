document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = Array.from(document.querySelectorAll('.carousel img'));
    
    // 复制图片用于无缝滚动
    images.forEach(img => {
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });

    const imageWidth = 200; // 每张图片的宽度
    const gap = 48; // 图片之间的间隔
    const totalWidth = (imageWidth + gap) * images.length;

    // 调整动画时长，确保持续滚动
    const animationDuration = totalWidth / 50; // 按滚动速度计算动画时长
    carousel.style.animationDuration = `${animationDuration}s`;

    // 控制速度的事件监听
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
});