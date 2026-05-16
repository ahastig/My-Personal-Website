/* ── Stars ── */
(function () {
  var layer = document.getElementById('stars-layer');
  for (var i = 0; i < 40; i++) {
    var s = document.createElement('i');
    s.className = 'st' + (Math.random() > .8 ? ' st-b' : '');
    s.style.top = (Math.random() * 78) + '%';
    s.style.left = (Math.random() * 100) + '%';
    s.style.animationDelay = (Math.random() * 3) + 's';
    layer.appendChild(s);
  }
})();

/* ── Dust particles ── */
(function () {
  var room = document.getElementById('room');
  var dustLayer = document.getElementById('dust-layer');
  dustLayer.style.cssText = 'position:absolute;inset:0;z-index:20;pointer-events:none;overflow:hidden';
  function spawnDust() {
    var d = document.createElement('span');
    d.className = 'dust';
    var startX = 30 + Math.random() * 40;
    var startY = 10 + Math.random() * 50;
    d.style.left = startX + '%';
    d.style.top = startY + '%';
    d.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
    d.style.setProperty('--dy', (Math.random() * 80 + 40) + 'px');
    var dur = 6 + Math.random() * 8;
    d.style.animationDuration = dur + 's';
    d.style.width = (2 + Math.random() * 2) + 'px';
    d.style.height = d.style.width;
    dustLayer.appendChild(d);
    setTimeout(function () { d.remove(); }, dur * 1000);
  }
  for (var i = 0; i < 8; i++) setTimeout(spawnDust, i * 800);
  setInterval(spawnDust, 1200);
})();

/* ── Day / Night ── */
function toggleDN() {
  document.body.classList.toggle('night');
  document.getElementById('dn-label').textContent =
    document.body.classList.contains('night') ? 'day' : 'night';
}

/* ── Achievements ── */
function showAchievements() {
  document.getElementById('achieve-overlay').classList.add('open');
}
function hideAchievements() {
  document.getElementById('achieve-overlay').classList.remove('open');
}

/* ── Socials ── */
function showSocials() {
  document.getElementById('social-overlay').classList.add('open');
}
function hideSocials() {
  document.getElementById('social-overlay').classList.remove('open');
}

/* ── Copy email ── */
function copyEmail() {
  navigator.clipboard.writeText('jamesalcarde11042008@gmail.com').then(function () {
    var t = document.getElementById('toast');
    t.className = 'toast-show';
    setTimeout(function () { t.className = 'toast-hide'; }, 2000);
  });
}

/* ── Close overlays on Escape ── */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideAchievements();
    hideSocials();
  }
});
