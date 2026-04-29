// ===== YEAR =====
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// ===== TOAST =====
function showToast(msg, type) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast' + (type ? ' ' + type : '');
  requestAnimationFrame(function () {
    toast.classList.add('show');
  });
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

// ===== COPY SECTION LINK =====
function fallbackCopy(text) {
  var input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  showToast('Enlace copiado', 'success');
}

function copySectionLink(sectionId) {
  var url = new URL(window.location.href);
  url.hash = sectionId;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url.toString())
      .then(function () {
        showToast('Enlace copiado', 'success');
      })
      .catch(function () {
        fallbackCopy(url.toString());
      });
  } else {
    fallbackCopy(url.toString());
  }
}

// ===== NAV SCROLL =====
function initNavScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
    });
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothNav() {
  var navbar = document.getElementById('navbar');

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      var offset = navbar ? navbar.offsetHeight : 0;
      var y = target.getBoundingClientRect().top + window.scrollY - offset - 14;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', href);
    });
  });
}

// ===== COPY BUTTONS =====
function initCopyButtons() {
  document.querySelectorAll('.copy-section-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sectionId = btn.getAttribute('data-section');
      if (sectionId) {
        copySectionLink(sectionId);
      }
    });
  });
}

// ===== FADE UP =====
function initFadeUp() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
  initNavScroll();
  initMobileNav();
  initSmoothNav();
  initCopyButtons();
  setTimeout(initFadeUp, 100);
});
