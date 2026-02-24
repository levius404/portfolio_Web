document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.loading'); // 使用 class 选择器

    const speed = 200; // 调整速度，数值越小，速度越快
    let completedCounters = 0; // 追踪已完成的计数器

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // 获取目标数值
            const count = +counter.innerText; // 获取当前数值

            // 计算增量
            const increment = target / speed;

            // 如果当前值小于目标值，继续递增
            if (count < target) {

                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 18);

            } 
            else {
                counter.innerText = target;
                counter.style.display = 'none';// 加载完成后隐藏元素
                completedCounters++; // 增加已完成的计数器


                // 检查是否所有计数器都已完成
                if (completedCounters === counters.length) {
                    loadMainPage(); // 加载主页面
                }
            }
        };

        updateCount();
    });

    function loadMainPage() {
        // 显示主内容
        document.querySelector('.main-content').style.display = 'block';
        document.querySelector('.footer').style.visibility = 'visible';
        startTypingAnimation(); //开始打字动画
    }
});

