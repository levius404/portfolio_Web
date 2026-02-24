// Works 页面交互脚本

(function () {
    const detailContainer = document.getElementById('worksDetail');
    const listContainer = document.getElementById('worksList');

    // 箭头SVG模板（和 jiantou.svg 外形一致，旋转90度指向右方）
    const arrowSvg = `
        <svg class="works-link-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.1 124.5">
            <path fill="#1f1f1d"
                d="m124.68,58.74c1.79.15,3.59.24,5.42.24v-7.5c-1.83,0-3.63.09-5.42.24C94.68,48.97,71.1,23.68,71.1,0h-7c0,28.72,18.44,53.2,44.1,62.25-25.66,9.05-44.1,33.53-44.1,62.25h7c0-30.7,23.58-55.99,53.58-58.74Z"/>
            <rect fill="#1f1f1d" x="0" y="59" width="76.6" height="7"/>
        </svg>
    `;

    // 渲染右侧列表
    function renderList() {
        listContainer.innerHTML = '';
        worksData.forEach((work, index) => {
            const item = document.createElement('div');
            item.className = 'works-list-item' + (index === 0 ? ' active' : '');
            item.setAttribute('data-index', index);
            item.innerHTML = `
                <span class="works-list-number">${work.number}</span>
                <div class="works-list-info">
                    <span class="works-list-subtitle">${work.subtitle}</span>
                    <span class="works-list-title">${work.title}</span>
                </div>
                <span class="works-list-arrow">→</span>
            `;
            item.addEventListener('click', () => selectWork(index));
            listContainer.appendChild(item);
        });
    }

    // 渲染左侧详情
    function renderDetail(index) {
        const work = worksData[index];
        if (!work) return;

        // 构建图片HTML
        const imagesHtml = work.images
            .map(src => `<img src="${src}" alt="${work.title}">`)
            .join('');

        // 构建链接箭头HTML（仅当 linkUrl 存在时显示）
        const linkHtml = work.linkUrl
            ? `<a href="${work.linkUrl}" target="_blank" rel="noopener noreferrer" class="works-detail-link clickable-element">${arrowSvg}</a>`
            : '';

        detailContainer.innerHTML = `
            <div class="works-detail-images">
                ${imagesHtml}
            </div>
            <div class="works-detail-text">
                <h2 class="works-detail-title">${work.title}</h2>
                <div class="works-detail-desc">
                    ${work.description}
                </div>
                ${linkHtml}
            </div>
        `;

        // 滚动回顶部
        detailContainer.scrollTop = 0;
    }

    // 选中作品
    function selectWork(index) {
        // 更新列表高亮
        document.querySelectorAll('.works-list-item').forEach(item => {
            item.classList.remove('active');
        });
        const target = listContainer.querySelector(`[data-index="${index}"]`);
        if (target) {
            target.classList.add('active');
        }

        // 渲染详情
        renderDetail(index);
    }

    // 初始化
    renderList();
    renderDetail(0);
})();
