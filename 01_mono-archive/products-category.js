(function () {
  'use strict';

  var categories = {
    all: { title: 'SHOP ALL', description: '열여섯 가지 아카이브 — 전 상품' },
    apparel: { title: 'APPAREL', description: '아우터 · 톱 · 팬츠 — 일상을 구성하는 의류' },
    jewelry: { title: 'JEWELRY', description: '링 · 네크리스 · 이어링 · 브레이슬릿 — 빛을 담은 주얼리' },
    bags: { title: 'BAGS', description: '크로스백 · 토트백 — 매일을 함께하는 가방' },
    acc: { title: 'ACC', description: '볼캡 · 버킷햇 — 스타일을 완성하는 헤드웨어 액세서리' }
  };
  var requested = new URLSearchParams(window.location.search).get('category');
  if (requested === 'headwear') requested = 'acc';
  var category = Object.prototype.hasOwnProperty.call(categories, requested) ? requested : 'all';
  var current = categories[category];
  var visibleCount = 0;

  document.querySelectorAll('.prod-grid > .item').forEach(function (item) {
    item.hidden = category !== 'all' && item.dataset.category !== category;
    if (!item.hidden) visibleCount++;
  });

  document.title = current.title + ' — MONO ARCHIVE';
  document.querySelector('.page-head h1').textContent = current.title;
  document.querySelector('.page-head .kr').textContent = current.description;
  document.querySelector('.page-head .crumb-current').textContent = current.title;
  document.querySelector('.sort-bar .total b').textContent = visibleCount;

  document.querySelectorAll('.filter-tabs a, .main-nav a').forEach(function (link) {
    var target = new URL(link.getAttribute('href'), window.location.href);
    if (!target.pathname.endsWith('/products.html')) return;
    var linkCategory = target.searchParams.get('category') || 'all';
    var active = linkCategory === category;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  // All current categories fit on one page; keep the current category in its URL.
  document.querySelector('.pagination .current').href = category === 'all'
    ? 'products.html'
    : 'products.html?category=' + category;
})();
