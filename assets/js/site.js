// スマホ用メニュー（三本線ボタンで開閉）
(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-toggle');
  if (!header || !btn) return;

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  // Esc キーで閉じる
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false);
      btn.focus();
    }
  });
  // メニューの外をタップしたら閉じる
  document.addEventListener('click', function (e) {
    if (header.classList.contains('is-open') && !header.contains(e.target)) setOpen(false);
  });
  // PC幅に戻ったら状態をリセット
  window.matchMedia('(min-width: 960px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

// ギャラリーの拡大表示
(function () {
  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img');
  var cap = dlg.querySelector('figcaption');

  document.querySelectorAll('.gallery-open').forEach(function (btn) {
    btn.addEventListener('click', function () {
      img.src = btn.dataset.full;
      img.alt = btn.dataset.alt || '';
      cap.textContent = btn.dataset.caption || '';
      dlg.showModal();
    });
  });

  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.closest('.lightbox-close')) dlg.close();
  });
})();
