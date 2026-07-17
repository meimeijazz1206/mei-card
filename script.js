// =========================================
// Email 反爬蟲：拆成片段在載入後才組出來，原始碼裡看不到完整地址
// 想換信箱，改下面這三段字串即可
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('emailLink');
    const text = document.getElementById('emailText');
    if (!link || !text) return;
    const user = ['m', 'e', 'i', 'j', 'a', 'z', 'z', '1', '2', '0', '6'].join('');
    const domain = ['g', 'm', 'a', 'i', 'l'].join('') + '.' + ['c', 'o', 'm'].join('');
    const addr = user + '@' + domain;
    link.href = 'mailto:' + addr;
    text.textContent = addr;
});

// =========================================
// 作品資料：想改標題／說明，直接編輯這裡即可
// key = assets/works/ 裡的圖檔名
// =========================================
const WORKS = {
    // ── 左輪盤：瑞鎰印刷包裝 ─ 母親節／勞動節／七夕系列 ──
    'zayie-labor.jpg': { title: '五一勞動節主視覺', meta: '瑞鎰印刷包裝 · 2026', body: 'HAPPY LABOR DAY。\n勞動節社群主視覺。' },
    'zayie-mday-pantone.jpg': { title: '母親節主視覺 ─ PANTONE Mother', meta: '瑞鎰印刷包裝 · 2026', body: 'PANTONE Mother 520。\n以色票概念傳達母親節主視覺。' },
    'zayie-mday-a.jpg': { title: '母親節禮盒視覺', meta: '瑞鎰印刷包裝 · 2026', body: '母親節檔期禮盒包裝情境。' },
    'zayie-mday-b.jpg': { title: '母親節禮盒視覺 ─ A Gift of Perfect', meta: '瑞鎰印刷包裝 · 2026', body: 'A GIFT OF PERFECT FOR MOTHER。' },
    'zayie-mday-c.jpg': { title: '母親節禮盒視覺 ─ Crafting Perfection', meta: '瑞鎰印刷包裝 · 2026', body: 'CRAFTING PERFECTION ─ CHERISH THE MOMENT。' },
    'zayie-mday-d.jpg': { title: '母親節禮盒視覺 ─ Pure Love', meta: '瑞鎰印刷包裝 · 2026', body: 'PURE LOVE, DEAREST MOTHER。' },
    'zayie-qixi-a.jpg': { title: '七夕情人節 ─ 愛的設計', meta: '瑞鎰印刷包裝 · 2026', body: 'LOVE IS IN THE DESIGN。\n七夕情人節禮盒視覺。' },
    'zayie-qixi-b.jpg': { title: '七夕情人節 ─ 花卉版', meta: '瑞鎰印刷包裝 · 2026', body: 'HAPPY QIXI FESTIVAL。\n七夕情人節主視覺。' },
    'zayie-qixi-c.jpg': { title: '七夕情人節 ─ Love to Go', meta: '瑞鎰印刷包裝 · 2026', body: 'LOVE TO GO！\n七夕情人節提袋情境視覺。' },
    'zayie-qixi-d.jpg': { title: '七夕情人節 ─ 插畫禮盒', meta: '瑞鎰印刷包裝 · 2026', body: 'QIXI FESTIVAL。\n喜鵲＋禮盒插畫風主視覺。' },
    'zayie-qixi-e.jpg': { title: '七夕情人節 ─ Gift of Love', meta: '瑞鎰印刷包裝 · 2026', body: 'GIFT OF LOVE。\n七夕禮盒主視覺，星光紫調。' },
    'zayie-mday-e.jpg': { title: '母親節主視覺 ─ Heartfelt Gratitude', meta: '瑞鎰印刷包裝 · 2026', body: 'HEARTFELT GRATITUDE, INCOMPARABLE LOVE。\n康乃馨與愛心意象。' },

    // ── 右輪盤：瑞鎰印刷包裝 ─ 父親節／端午／減法包裝系列 ──
    'zayie-father-a.jpg': { title: '父親節主視覺 ─ 插畫版', meta: '瑞鎰印刷包裝 · 2026', body: '父愛如樹，插畫風父親節主視覺。' },
    'zayie-father-b.jpg': { title: '父親節主視覺 ─ 領結禮盒', meta: '瑞鎰印刷包裝 · 2026', body: 'HAPPY FATHER\'S DAY。\n領結禮盒視覺。' },
    'zayie-father-c.jpg': { title: '父親節主視覺 ─ 深色禮盒', meta: '瑞鎰印刷包裝 · 2026', body: 'HAPPY FATHER\'S DAY。\n深色調禮盒情境視覺。' },
    'zayie-duanwu-a.jpg': { title: '端午節主視覺 ─ 書法版', meta: '瑞鎰印刷包裝 · 2026', body: '書法「端午」× 粽葉意象，節氣主視覺。' },
    'zayie-duanwu-b.jpg': { title: '端午節主視覺 ─ 慶端午', meta: '瑞鎰印刷包裝 · 2026', body: '慶端午，禮盒攝影情境。' },
    'zayie-duanwu-c.jpg': { title: '端午節主視覺 ─ 粽形攝影', meta: '瑞鎰印刷包裝 · 2026', body: '書法「端午」× 粽形攝影主視覺。' },
    'zayie-slim-a.jpg': { title: '減法包裝 ─ SLIM PACKAGING', meta: '瑞鎰印刷包裝 · 2026', body: 'SLIM PACKAGING。\nLove is enough，減法就是足夠。' },
    'zayie-g7.jpg': { title: 'Love in Full Spectrum', meta: '瑞鎰印刷包裝 · 2026', body: 'G7 色域校準標準。\n以全彩虹光譜傳達印刷色彩管理實力。' },
    'zayie-father-d.jpg': { title: '父親節主視覺 ─ 父愛如樹', meta: '瑞鎰印刷包裝 · 2026', body: '父愛如樹，抽象線條風格主視覺。' },
    'zayie-duanwu-d.jpg': { title: '端午節主視覺 ─ ZAYIE 綠意版', meta: '瑞鎰印刷包裝 · 2026', body: 'DRAGON BOAT FESTIVAL。\n粽葉綠意主視覺。' },
    'zayie-duanwu-e.jpg': { title: '端午節主視覺 ─ 粽子攝影', meta: '瑞鎰印刷包裝 · 2026', body: 'DRAGON BOAT FESTIVAL。\n粽子攝影情境視覺。' },
    'zayie-slim-b.jpg': { title: '減法包裝 ─ 雲朵版', meta: '瑞鎰印刷包裝 · 2026', body: '減法包裝，納涼季限定，藍天雲朵意象。' },
};

// =========================================
// 圓點過場（固定疊層）＋ 作品輪盤：共用一個捲動迴圈
// 原理：JS 只算捲動進度，寫進 CSS 變數，視覺全交給 CSS
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('dotOverlay');
    const grid = document.getElementById('dotGrid');
    const hero = document.querySelector('.hero-links');
    const stage = document.getElementById('worksStage');

    // 降低動態偏好：交給 CSS 降級，不跑 JS
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 鋪滿視窗的點陣
    function buildGrid() {
        if (!grid) return;
        const cell = 36; // 每格目標像素
        const cols = Math.max(8, Math.min(40, Math.round(window.innerWidth / cell)));
        const rows = Math.max(10, Math.min(40, Math.round(window.innerHeight / cell)));
        grid.style.setProperty('--cols', cols);
        grid.style.setProperty('--rows', rows);
        const frag = document.createDocumentFragment();
        for (let r = 0; r < rows; r++) {
            // 由下往上：最底排門檻最小（最先出現）
            const base = rows > 1 ? (rows - 1 - r) / (rows - 1) : 0;
            for (let c = 0; c < cols; c++) {
                const dot = document.createElement('div');
                dot.className = 'pixel-dot';
                // 位置門檻（下→上）＋ 雜訊邊緣
                let t = base + (Math.random() - 0.5) * 0.16;
                t = Math.max(0, Math.min(1, t));
                dot.style.setProperty('--t', t.toFixed(3));
                frag.appendChild(dot);
            }
        }
        grid.innerHTML = '';
        grid.appendChild(frag);
    }

    const clamp01 = (v) => Math.max(0, Math.min(1, v));
    let ticking = false;

    function update() {
        const vh = window.innerHeight;
        if (!vh) return; // 重載瞬間 viewport 可能為 0，避免除零產生 Infinity
        const scrollY = window.scrollY;

        // 圓點進度 p：錨點從連結區開始，到輪盤登場結束
        if (overlay && hero && stage) {
            const heroAbs = hero.getBoundingClientRect().top + scrollY;
            const stageAbs = stage.getBoundingClientRect().top + scrollY;
            const start = heroAbs - vh * 0.35;
            const end = stageAbs + vh * 0.1;
            const p = clamp01((scrollY - start) / Math.max(1, end - start));
            overlay.style.setProperty('--p', p.toFixed(4));
        }

        // 輪盤轉動：依舞台在視窗內的進度，左右反向
        if (stage) {
            const rect = stage.getBoundingClientRect();
            const prog = (vh - (rect.top + rect.height / 2)) / vh;
            const rot = prog * 260;
            stage.style.setProperty('--rot-l', rot.toFixed(1) + 'deg');
            stage.style.setProperty('--rot-r', (-rot).toFixed(1) + 'deg');

            // 圓心隨釘住捲動進度上升，露出更多圓
            const pinProg = clamp01(-rect.top / Math.max(1, rect.height - vh));
            const rise = pinProg * vh * 0.35;
            stage.style.setProperty('--rise', (-rise).toFixed(1) + 'px');
        }
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    buildGrid();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    // 開發輔助：網址帶 #y=數字 時，載入後跳到該捲動位置（不影響一般瀏覽）
    const m = location.hash.match(/^#y=(\d+)$/);
    if (m) {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        const jump = () => {
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, +m[1]);
            update();
        };
        [50, 200, 500, 900].forEach((d) => setTimeout(jump, d));
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildGrid();
            update();
        }, 200);
    });
});

// =========================================
// 作品燈箱
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cardModal');
    const modalImg = document.getElementById('cardModalImg');
    const modalTitle = document.getElementById('cardModalTitle');
    const modalMeta = document.getElementById('cardModalMeta');
    const modalDesc = document.getElementById('cardModalDesc');
    if (!modal) return;

    function infoFor(src) {
        const name = decodeURIComponent(src.split('/').pop());
        return WORKS[name] || { title: name.replace(/\.\w+$/, ''), meta: '', body: '' };
    }

    function openModal(src) {
        const info = infoFor(src);
        modalImg.src = src;
        modalTitle.textContent = info.title;
        modalMeta.textContent = info.meta;
        modalDesc.textContent = info.body || '';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    document.querySelectorAll('.work-card').forEach((card) => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            if (img) openModal(img.src);
        });
    });

    modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

