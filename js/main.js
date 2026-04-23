/* ========================================
   OAkley Gas Station - Main JavaScript
   Shared Header/Footer + Interactivity
   ======================================== */

(function () {
  'use strict';

  // ========= SHARED HEADER & FOOTER =========
  var NAV_LINKS = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'fuel-services.html', label: 'Fuel &amp; Services', page: 'fuel' },
    { href: 'store.html', label: 'Store', page: 'store' },
    { href: 'deals.html', label: 'Deals &amp; Rewards', page: 'deals' },
    { href: 'contact.html', label: 'Visit Us', page: 'contact' }
  ];

  function getActivePage() {
    return document.body.getAttribute('data-page') || 'home';
  }

  function buildNavLinks(activePage, isMobile) {
    return NAV_LINKS.map(function (link) {
      var cls = link.page === activePage ? ' class="active"' : '';
      return '<a href="' + link.href + '"' + cls + '>' + link.label + '</a>';
    }).join('\n');
  }

  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;
    var activePage = getActivePage();

    el.innerHTML = '\
    <nav class="nav" role="navigation" aria-label="Main navigation">\
      <div class="container nav-inner">\
        <a href="index.html" class="nav-logo" aria-label="OakleyGasAndSave Home">\
          <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>\
          <span class="logo-text"><span class="logo-accent">O</span>akleyGas<span class="logo-ampersand">&amp;</span>Save</span>\
        </a>\
        <div class="nav-links">\
          ' + buildNavLinks(activePage, false) + '\
        </div>\
        <div class="nav-right">\
          <a href="tel:+19250000000" class="nav-phone" aria-label="Call us">\
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\
            <span class="nav-phone-text">(925) 000-0000</span>\
          </a>\
          <a href="https://www.google.com/maps/dir/?api=1&destination=37.9974,-121.7127" class="btn btn-primary btn-nav" target="_blank" rel="noopener noreferrer">\
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>\
            Directions\
          </a>\
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">\
            <span></span>\
            <span></span>\
            <span></span>\
          </button>\
        </div>\
      </div>\
    </nav>\
    <div class="nav-mobile" id="mobile-menu" aria-hidden="true">\
      <div class="nav-mobile-brand">\
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent)"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>\
        <span style="font-size:var(--text-lg);font-weight:800;color:var(--text-primary)"><span style="color:var(--accent)">O</span>akleyGas&amp;Save</span>\
      </div>\
      ' + buildNavLinks(activePage, true) + '\
      <div class="nav-mobile-contact">\
        <a href="tel:+19250000000" class="btn btn-secondary" style="width:100%;justify-content:center;">\
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\
          Call (925) 000-0000\
        </a>\
        <a href="https://www.google.com/maps/dir/?api=1&destination=37.9974,-121.7127" class="btn btn-primary" style="width:100%;justify-content:center;" target="_blank" rel="noopener noreferrer">\
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>\
          Get Directions\
        </a>\
      </div>\
    </div>';
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML = '\
    <div class="container">\
      <div class="footer-grid">\
        <div class="footer-brand">\
          <a href="index.html" class="nav-logo" aria-label="OakleyGasAndSave Home">\
            <span class="logo-accent">O</span>akleyGasAndSave\
          </a>\
          <p>Your neighborhood gas station and convenience store in Oakley, CA. Quality fuel, everyday essentials, and friendly service right off Highway 4.</p>\
        </div>\
        <div>\
          <h5>Quick Links</h5>\
          <ul class="footer-links">\
            <li><a href="index.html">Home</a></li>\
            <li><a href="fuel-services.html">Fuel &amp; Services</a></li>\
            <li><a href="store.html">Store</a></li>\
            <li><a href="deals.html">Deals &amp; Rewards</a></li>\
            <li><a href="contact.html">Visit Us</a></li>\
          </ul>\
        </div>\
        <div>\
          <h5>Services</h5>\
          <ul class="footer-links">\
            <li><a href="fuel-services.html">Fuel Options</a></li>\
            <li><a href="store.html">Convenience Store</a></li>\
            <li><a href="deals.html">Deals &amp; Promotions</a></li>\
            <li><a href="contact.html">Contact Us</a></li>\
          </ul>\
        </div>\
        <div>\
          <h5>Contact Info</h5>\
          <address class="footer-contact">\
            <p>123 Main Street<br>Oakley, CA 94561</p>\
            <p><a href="tel:+19250000000">(925) 000-0000</a></p>\
            <p>Open Daily: 5 AM &ndash; 11 PM</p>\
          </address>\
        </div>\
      </div>\
      <div class="footer-bottom">\
        <p>&copy; 2026 OakleyGasAndSave. All rights reserved.</p>\
        <p>Oakley, CA &middot; Near Highway 4</p>\
      </div>\
    </div>';
  }

  function renderMobileCTA() {
    var el = document.getElementById('mobile-cta');
    if (!el) return;

    el.innerHTML = '\
      <a href="https://www.google.com/maps/dir/?api=1&destination=37.9974,-121.7127" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Directions</a>\
      <a href="tel:+19250000000" class="btn btn-secondary">Call Now</a>';
  }

  // Inject shared components
  renderHeader();
  renderFooter();
  renderMobileCTA();

  // ========= MOBILE NAV =========
  function initMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var navMobile = document.querySelector('.nav-mobile');

    if (!navToggle || !navMobile) return;

    navToggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      navMobile.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navMobile.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close on link click
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
        navToggle.focus();
      }
    });
  }

  initMobileNav();

  // ========= NAV SCROLL EFFECT =========
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ========= SCROLL ANIMATIONS =========
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ========= ACCORDION =========
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;

    var item = trigger.closest('.accordion-item');
    var content = item.querySelector('.accordion-content');
    var isOpen = item.classList.contains('is-open');

    // Close other items in same accordion
    var accordion = item.closest('.accordion');
    if (accordion) {
      accordion.querySelectorAll('.accordion-item.is-open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('is-open');
          openItem.querySelector('.accordion-content').style.maxHeight = '0';
          openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (isOpen) {
      item.classList.remove('is-open');
      content.style.maxHeight = '0';
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('is-open');
      content.style.maxHeight = content.scrollHeight + 'px';
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  // ========= MOBILE CTA BAR =========
  var ctaBar = document.getElementById('mobile-cta');
  var footer = document.getElementById('site-footer');

  if (ctaBar && footer) {
    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          ctaBar.classList.add('hidden');
        } else {
          ctaBar.classList.remove('hidden');
        }
      });
    }, { threshold: 0.1 });

    footerObserver.observe(footer);
  }

  // ========= BUSINESS HOURS STATUS =========
  function updateBusinessStatus() {
    var statusElements = document.querySelectorAll('[data-business-status]');
    if (!statusElements.length) return;

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var currentTime = hours * 60 + minutes;

    var openTime = 5 * 60;   // 5:00 AM
    var closeTime = 23 * 60;  // 11:00 PM

    var isOpen = currentTime >= openTime && currentTime < closeTime;

    statusElements.forEach(function (el) {
      if (isOpen) {
        el.className = 'status-bar status-bar--open';
        var minsUntilClose = closeTime - currentTime;
        if (minsUntilClose <= 60) {
          el.innerHTML = '<span class="status-dot"></span> Open &middot; Closes in ' + minsUntilClose + ' min';
        } else {
          el.innerHTML = '<span class="status-dot"></span> Open Now &middot; Until 11:00 PM';
        }
      } else {
        el.className = 'status-bar status-bar--closed';
        el.innerHTML = '<span class="status-dot"></span> Closed &middot; Opens at 5:00 AM';
      }
    });
  }

  updateBusinessStatus();
  setInterval(updateBusinessStatus, 60000);

  // ========= HIGHLIGHT TODAY IN HOURS TABLE =========
  var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var today = dayNames[new Date().getDay()];
  document.querySelectorAll('.hours-row').forEach(function (row) {
    if (row.dataset.day === today) {
      row.classList.add('today');
    }
  });

  // ========= CONTACT FORM =========
  var contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Message Sent!';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        contactForm.reset();
      }, 3000);
    });
  }

  // ========= REWARDS FORM =========
  var rewardsForm = document.getElementById('rewards-signup-form');
  if (rewardsForm) {
    rewardsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = rewardsForm.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.textContent = "You're In!";
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.opacity = '1';
        rewardsForm.reset();
      }, 3000);
    });
  }

})();
