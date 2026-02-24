// Works 页面模态框交互脚本

// 作品数据
const worksData = {
    1: {
        title: "作品 01",
        image: "image/image1.png",
        description: `
            <p>这是第一个摄影作品的详细描述。这张照片拍摄于某个美丽的地方，展现了光影的完美结合。</p>
            <p>拍摄时间：2024年春季<br>
            拍摄地点：日本东京<br>
            器材：Canon EOS R5 + RF 24-70mm f/2.8</p>
            <p>创作理念：通过捕捉自然光线与建筑的互动，展现都市中的静谧时刻。</p>
        `
    },
    2: {
        title: "作品 02",
        image: "image/image2.jpg",
        description: `
            <p>第二个作品展示了独特的视角和构图。</p>
            <p>拍摄时间：2024年夏季<br>
            拍摄地点：京都<br>
            器材：Canon EOS R6</p>
            <p>这张照片捕捉到了瞬间的美好，展现了摄影的魅力。</p>
        `
    },
    3: {
        title: "作品 03",
        image: "image/image3.jpg",
        description: `
            <p>第三个作品系列展示了色彩与构图的完美平衡。</p>
            <p>拍摄时间：2024年秋季<br>
            拍摄地点：大阪<br>
            器材：Sony A7IV</p>
            <p>通过精心的后期处理，强化了照片的情感表达。</p>
        `
    },
    4: {
        title: "作品 04",
        image: "image/image4.png",
        description: `
            <p>第四个作品聚焦于细节的捕捉。</p>
            <p>拍摄时间：2024年冬季<br>
            拍摄地点：北海道<br>
            器材：Fujifilm X-T4</p>
            <p>极简的构图让观众能够专注于作品的核心元素。</p>
        `
    },
    5: {
        title: "作品 05",
        image: "image/image5.jpg",
        description: `
            <p>第五个作品展示了动态与静态的对比。</p>
            <p>拍摄时间：2024年春季<br>
            拍摄地点：横滨<br>
            器材：Nikon Z9</p>
            <p>通过长曝光技术，创造出流动的视觉效果。</p>
        `
    },
    6: {
        title: "作品 06",
        image: "image/image6.JPG",
        description: `
            <p>第六个作品捕捉了自然的壮美。</p>
            <p>拍摄时间：2024年夏季<br>
            拍摄地点：富士山<br>
            器材：Canon EOS R5</p>
            <p>等待了数小时才捕捉到完美的光线条件。</p>
        `
    },
    7: {
        title: "作品 07",
        image: "image/image7.JPG",
        description: `
            <p>第七个作品展现了人文关怀。</p>
            <p>拍摄时间：2024年秋季<br>
            拍摄地点：奈良<br>
            器材：Leica Q2</p>
            <p>街头摄影中最重要的是捕捉真实的情感。</p>
        `
    },
    8: {
        title: "作品 08",
        image: "image/image8.JPG",
        description: `
            <p>第八个作品是系列的总结之作。</p>
            <p>拍摄时间：2024年冬季<br>
            拍摄地点：神户<br>
            器材：Sony A7RIII</p>
            <p>这张照片融合了前面所有作品的拍摄技巧和理念。</p>
        `
    }
};

// 获取元素
const modal = document.getElementById('workModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// 为所有作品项添加点击事件
document.querySelectorAll('.works-carousel-item').forEach(item => {
    item.addEventListener('click', function () {
        const workId = this.getAttribute('data-work');
        openModal(workId);
    });
});

// 打开模态框
function openModal(workId) {
    const work = worksData[workId];
    if (work) {
        modalImage.src = work.image;
        modalTitle.textContent = work.title;
        modalDescription.innerHTML = work.description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    }
}

// 关闭模态框
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
}

// 点击关闭按钮
modalClose.addEventListener('click', closeModal);

// 点击背景关闭
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC 键关闭
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
