/* ── Stars ── */
(function generateStars() {
  var layer = document.getElementById('stars-layer');
  for (var i = 0; i < 30; i++) {
    var s = document.createElement('i');
    s.className = 'st' + (Math.random() > .82 ? ' st-b' : '');
    s.style.top = (Math.random() * 75) + '%';
    s.style.left = (Math.random() * 100) + '%';
    s.style.animationDelay = (Math.random() * 3) + 's';
    layer.appendChild(s);
  }
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
  navigator.clipboard.writeText('jamesalcarde11042008@gmail.com').then(function() {
    var t = document.getElementById('toast');
    t.className = 'toast-show';
    setTimeout(function() { t.className = 'toast-hide'; }, 2000);
  });
}

/* ── Close overlays on Escape ── */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    hideAchievements();
    hideSocials();
  }
});
