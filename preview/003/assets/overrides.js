(() => {
  function applyHomeChanges(){
    const aboutButton = document.querySelector('#home .about-card a.button');
    if (aboutButton) aboutButton.textContent = 'ABOUT →';
  }

  function applyNewsChanges(){
    const newsPage = document.querySelector('#page-news');
    if (!newsPage) return;
    newsPage.querySelectorAll('.news-item').forEach(item => {
      const tag = item.querySelector('.tag');
      if (tag && tag.textContent.trim() === 'ILLUST') item.remove();
    });
    const description = newsPage.querySelector('.page-head > p:last-child');
    if (description) description.textContent = 'サイト更新情報のお知らせ。';
  }

  function setupActorSort(){
    const toolbar = document.querySelector('#page-actor .actor-toolbar');
    if (!toolbar || toolbar.querySelector('.actor-sort-select-wrap')) return;

    const wrap = document.createElement('div');
    wrap.className = 'actor-sort-select-wrap';
    wrap.innerHTML = '<label for="actor-sort-select">並び順</label><select id="actor-sort-select" aria-label="アクターの並び順"><option value="name">名前順</option><option value="debut">デビュー順</option><option value="subscribers">登録者順</option><option value="group">グループ別</option></select>';
    toolbar.appendChild(wrap);

    const select = wrap.querySelector('select');
    select.addEventListener('change', () => {
      const button = toolbar.querySelector(`[data-actor-mode="${select.value}"]`);
      if (button) button.click();
    });
  }

  function syncActorSort(){
    const select = document.querySelector('#actor-sort-select');
    if (!select) return;
    const active = document.querySelector('#page-actor .actor-toolbar .filter.active');
    if (active?.dataset.actorMode) select.value = active.dataset.actorMode;
  }

  function applyAll(){
    applyHomeChanges();
    applyNewsChanges();
    setupActorSort();
    syncActorSort();
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyAll();
    setTimeout(applyAll, 50);
  });

  window.addEventListener('hashchange', () => {
    setTimeout(applyAll, 30);
  });
})();
