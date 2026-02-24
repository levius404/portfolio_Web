document.addEventListener('scroll', function () {
    const shape = document.querySelector('.shape');
    const scrollY = window.scrollY;

    // 根据滚动位置计算旋转角度
    const rotateDeg = scrollY * 0.05; // 调整旋转速度

    // 设置旋转到90度时的最大滚动位置
    const maxScrollForCircle = 450; // 滚动到这个值时旋转角度达到90度
    const maxRadius = 400; // 最大圆角半径值 (应为元素的一半)
    
    // 根据滚动位置计算圆角半径
    const radius = rotateDeg >= 90 ? maxRadius : (rotateDeg / 90) * maxRadius;

    // 应用旋转和圆角半径
    shape.style.transform = `translate(-50%, -50%) rotate(${rotateDeg}deg)`;
    shape.style.borderRadius = `${radius}px`;
});