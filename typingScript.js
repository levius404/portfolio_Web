function startTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    const text = 'hello.'; // 你想要显示的文本
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 500); // 调整打字速度
        }
        else {
            // 打字完成后移除光标样式
            textElement.style.borderRight = 'none';
        }
    }

    type();
};