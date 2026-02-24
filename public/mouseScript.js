const cursorDot = document.getElementById('cursor-dot');
const cursorCircle = document.getElementById('cursor-circle');
const clickableElements = document.querySelectorAll('.clickable-element');

let cursorCircleX = 0;
let cursorCircleY = 0;
let mouseX = 0;
let mouseY = 0;

// 计算空心圆的偏移量
function getCursorCircleOffset(size) {
    return size / 2; // 偏移量是元素宽度的一半
}

document.addEventListener('mousemove', (event) => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorCircle = document.getElementById('cursor-circle');

    mouseX = event.clientX;
    mouseY = event.clientY;

     // 立即跟随的圆点
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    // 计算空心圆的尺寸和偏移量
    const cursorCircleSize = cursorCircle.classList.contains('shrink') ? 12 : 48;
    const offset = getCursorCircleOffset(cursorCircleSize);


 // 确保空心圆缩小时仍然保持中心对齐
    cursorCircle.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    cursorCircle.style.width = `${cursorCircleSize}px`;
    cursorCircle.style.height = `${cursorCircleSize}px`;


 // 根据空心圆的状态调整圆点颜色
    if (cursorCircle.classList.contains('shrink')) {
    cursorDot.classList.add('cursor-dot-inverse');
    }
    else {
    cursorDot.classList.remove('cursor-dot-inverse');
    }
});

//鼠标悬停在可交互元素上的效果
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
    cursorCircle.classList.add('shrink');
    });


    element.addEventListener('mouseleave', () => {
    cursorCircle.classList.remove('shrink');
    });
});

// 使用 requestAnimationFrame 实现延迟跟随效果
function animate() {
    requestAnimationFrame(animate);

  // 计算当前的位置和目标位置之间的差距
  cursorCircleX += (mouseX - cursorCircleX) * 0.1;
  cursorCircleY += (mouseY - cursorCircleY) * 0.1;

    // 计算圆的尺寸和偏移量
    const cursorCircleSize = cursorCircle.classList.contains('shrink') ? 12 : 48;
    const offset = getCursorCircleOffset(cursorCircleSize);

  // 更新空心圆的位置
    cursorCircle.style.transform = `translate(${cursorCircleX}px, ${cursorCircleY}px) translate(-50%, -50%)`;
}
animate();