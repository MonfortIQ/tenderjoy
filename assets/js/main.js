/**
 * TenderJoy - Premium Tender Coconut & Fresh Juice Bar Website Template
 * Main Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
     Shared Premium Footer
     ------------------------------------------------------------------------ */
  const footerIsNested = /\/(?:product-details|service-details|blog-details)\//.test(window.location.pathname.replace(/\\/g, '/'));
  const footerPrefix = footerIsNested ? '../' : '';
  const footerPath = path => `${footerPrefix}${path}`;
  const footerSocialLinks = {
    instagram: 'https://www.instagram.com/tenderjoyjuices/',
    facebook: 'https://www.facebook.com/tenderjoyjuices/',
    x: 'https://x.com/tenderjoyjuices',
    youtube: 'https://www.youtube.com/@tenderjoyjuices'
  };
  const currentFooter = document.querySelector('footer');

  if (currentFooter) {
    const premiumFooter = document.createElement('footer');
    premiumFooter.id = 'premium-footer';
    premiumFooter.className = 'tj-footer tj-footer-premium';
    premiumFooter.innerHTML = `
      <div class="tj-footer-glow" aria-hidden="true"></div>
      <div class="container position-relative">
        <section class="tj-footer-newsletter tj-reveal" aria-labelledby="footer-newsletter-title">
          <div>
            <span class="tj-footer-eyebrow">Fresh from the grove</span>
            <h2 id="footer-newsletter-title">Stay Fresh with TenderJoy.</h2>
            <p>Get updates on fresh arrivals, seasonal drinks, and special offers.</p>
          </div>
          <form action="https://formsubmit.co/hello@tenderjoyjuices.com" method="POST" class="tj-footer-newsletter-form tj-ajax-form">
            <input type="hidden" name="_subject" value="New TenderJoy Newsletter Subscriber">
            <input type="hidden" name="_captcha" value="false">
            <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
            <label class="visually-hidden" for="footer-newsletter-email">Email address</label>
            <input id="footer-newsletter-email" type="email" name="email" placeholder="Your email address" required>
            <button type="submit" class="btn-tj btn-tj-accent"><span>Subscribe</span><i class="bi bi-arrow-up-right"></i></button>
            <small>By subscribing, you agree to receive occasional TenderJoy updates.</small>
          </form>
        </section>

        <div class="tj-footer-grid">
          <section class="tj-footer-brand tj-reveal">
            <a href="${footerPath('index.html')}" class="tj-footer-logo-link">
              <img class="tj-footer-logo site-logo-img" src="${footerPath('assets/images/logo-light.svg')}" data-logo-light="${footerPath('assets/images/logo.svg')}" data-logo-dark="${footerPath('assets/images/logo-light.svg')}" alt="TenderJoy – Tender Coconut & Fresh Juice">
            </a>
            <p class="tj-footer-tagline">Nature's Freshness in Every Sip.</p>
            <span class="tj-footer-rule" aria-hidden="true"></span>
            <p class="tj-footer-copy">TenderJoy is an artisanal tender coconut and fresh juice brand dedicated to delivering nature's purest hydration through fresh ingredients, careful preparation, and sustainable practices.</p>
            <div class="tj-footer-socials" aria-label="Social media">
              <a href="${footerSocialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="tj-footer-social" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="${footerSocialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="tj-footer-social" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="${footerSocialLinks.x}" target="_blank" rel="noopener noreferrer" class="tj-footer-social" aria-label="X"><i class="bi bi-twitter-x"></i></a>
              <a href="${footerSocialLinks.youtube}" target="_blank" rel="noopener noreferrer" class="tj-footer-social" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            </div>
          </section>

          <section class="tj-footer-column tj-reveal">
            <h2>Quick Explore</h2>
            <ul class="tj-footer-links">
              <li><a href="${footerPath('index.html')}">Home 1 – Landing</a></li>
              <li><a href="${footerPath('home-2.html')}">Home 2 – Juice Bar</a></li>
              <li><a href="${footerPath('about.html')}">About Us</a></li>
              <li><a href="${footerPath('about.html#story')}">Our Story &amp; Farms</a></li>
              <li><a href="${footerPath('menu.html')}">Fresh Beverage Menu</a></li>
              <li><a href="${footerPath('pricing.html')}">Pricing &amp; Packages</a></li>
              <li><a href="${footerPath('locations.html')}">Juice Bar Locations</a></li>
              <li><a href="${footerPath('contact.html')}">Contact Us</a></li>
            </ul>
          </section>

          <section class="tj-footer-column tj-reveal">
            <h2>Services &amp; Catering</h2>
            <ul class="tj-footer-links">
              <li><a href="${footerPath('service-details/fresh-tender-coconut-supply.html')}">Tender Coconut Supply</a></li>
              <li><a href="${footerPath('service-details/fresh-juice-preparation.html')}">Live Juice Preparation</a></li>
              <li><a href="${footerPath('service-details/event-party-catering.html')}">Wedding &amp; Party Catering</a></li>
              <li><a href="${footerPath('service-details/corporate-beverage-catering.html')}">Corporate Office Catering</a></li>
              <li><a href="${footerPath('service-details/bulk-coconut-orders.html')}">Bulk Coconut Orders</a></li>
              <li><a href="${footerPath('service-details/customized-fresh-juice-packages.html')}">Custom Juice Packages</a></li>
            </ul>
          </section>

          <section class="tj-footer-column tj-footer-contact tj-reveal">
            <h2>Get in Touch</h2>
            <a href="https://maps.google.com/maps?q=100+Feet+Road+Indiranagar+Bengaluru" target="_blank" rel="noopener" class="tj-footer-contact-row"><i class="bi bi-geo-alt-fill"></i><span>100 Feet Road, Indiranagar,<br>Bengaluru, KA 560038</span></a>
            <a href="tel:+919845012345" class="tj-footer-contact-row"><i class="bi bi-telephone-fill"></i><span>+91 98450 12345</span></a>
            <a href="mailto:hello@tenderjoyjuices.com" class="tj-footer-contact-row"><i class="bi bi-envelope-fill"></i><span>hello@tenderjoyjuices.com</span></a>
            <div class="tj-footer-hours">
              <i class="bi bi-clock-fill"></i>
              <div><strong>Opening Hours</strong><span>Monday – Sunday</span><span>7:00 AM – 10:30 PM</span></div>
            </div>
          </section>
        </div>

        <div class="tj-footer-bottom">
          <span>© 2026 TenderJoy Beverages Pvt. Ltd. All rights reserved.</span>
        </div>
      </div>
    `;
    currentFooter.replaceWith(premiumFooter);
  }

  if (!document.querySelector('.back-to-top')) {
    document.body.insertAdjacentHTML('beforeend', '<a href="#" class="back-to-top" aria-label="Back to top"><i class="bi bi-arrow-up"></i></a>');
  }

  /* Upgrade the standalone utility pages to the same shared navbar. */
  const legacyHeader = document.querySelector('header.tj-header');
  if (legacyHeader && !legacyHeader.querySelector('.tj-navbar')) {
    legacyHeader.className = 'tj-header';
    legacyHeader.innerHTML = `
      <div class="container">
        <nav class="navbar navbar-expand-lg tj-navbar py-2">
          <a class="navbar-brand tj-logo" href="${footerPath('index.html')}">
            <img src="${footerPath('assets/images/logo.svg')}" alt="TenderJoy Logo" class="site-logo-img" data-logo-light="${footerPath('assets/images/logo.svg')}" data-logo-dark="${footerPath('assets/images/logo-light.svg')}">
          </a>
          <button class="navbar-toggler border-0 shadow-none p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#tjMobileNav" aria-controls="tjMobileNav" aria-label="Toggle navigation">
            <i class="bi bi-list fs-1 text-tj-primary"></i>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarMain">
            <ul class="navbar-nav align-items-center gap-1">
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="${footerPath('index.html')}">Home 1 – Fresh Juice Landing</a></li><li><a class="dropdown-item" href="${footerPath('home-2.html')}">Home 2 – Tropical Juice Bar</a></li></ul></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('about.html')}">About</a></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('menu.html')}">Menu</a></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('services.html')}">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('locations.html')}">Locations</a></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('blog.html')}">Blog</a></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('pricing.html')}">Pricing</a></li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="${footerPath('404.html')}">404 Error Page</a></li><li><a class="dropdown-item" href="${footerPath('coming-soon.html')}">Coming Soon Page</a></li><li><a class="dropdown-item" href="${footerPath('maintenance.html')}">Maintenance Page</a></li></ul></li>
              <li class="nav-item"><a class="nav-link" href="${footerPath('contact.html')}">Contact</a></li>
            </ul>
          </div>
          <div class="d-none d-lg-flex align-items-center gap-2"><a href="${footerPath('menu.html')}" class="btn-tj btn-tj-primary btn-tj-sm"><span>Order Fresh</span><i class="bi bi-arrow-right"></i></a></div>
        </nav>
      </div>`;

    if (!document.querySelector('#tjMobileNav')) {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="offcanvas offcanvas-end tj-mobile-menu" tabindex="-1" id="tjMobileNav" aria-labelledby="tjMobileNavLabel">
          <div class="offcanvas-header border-bottom"><a href="${footerPath('index.html')}" class="offcanvas-title" id="tjMobileNavLabel"><img src="${footerPath('assets/images/logo.svg')}" alt="TenderJoy" height="40"></a><button type="button" class="tj-mobile-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
          <div class="offcanvas-body"><ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="${footerPath('index.html')}">Home 1 (Fresh Juice)</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('home-2.html')}">Home 2 (Tropical Bar)</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('about.html')}">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('menu.html')}">Our Menu</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('services.html')}">Services &amp; Catering</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('blog.html')}">Articles &amp; Wellness</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('pricing.html')}">Pricing &amp; Packages</a></li>
            <li class="nav-item"><a class="nav-link" href="${footerPath('contact.html')}">Contact Us</a></li>
          </ul><div class="mt-4 pt-3 border-top"><a href="${footerPath('menu.html')}" class="btn-tj btn-tj-primary w-100 justify-content-center tj-mobile-order"><i class="bi bi-cup-straw"></i><span>Order Fresh</span></a></div></div>
        </div>`);
    }
  }

  /* Add the shared controls to every visible desktop navbar. */
  document.querySelectorAll('.tj-navbar').forEach(navbar => {
    navbar.querySelectorAll('a.nav-link[href$="locations.html"]').forEach(link => {
      link.closest('.nav-item')?.remove();
    });

    if (navbar.querySelector('.tj-navbar-controls')) return;

    const controls = document.createElement('div');
    controls.className = 'tj-navbar-controls d-none d-lg-flex align-items-center gap-2';
    controls.innerHTML = `
      <button class="btn-ctrl btn-ctrl-rtl rtl-toggle-btn" type="button" aria-label="Toggle text direction" title="Switch to Right to Left">
        <span class="dir-label">RTL</span>
      </button>
      <button class="btn-ctrl theme-toggle-btn" type="button" aria-label="Switch to Dark Mode" title="Switch to Dark Mode">
        <i class="bi bi-moon-stars-fill" aria-hidden="true"></i>
      </button>
    `;

    const actionGroup = navbar.querySelector(':scope > .d-lg-flex');
    if (actionGroup) {
      actionGroup.parentNode.insertBefore(controls, actionGroup);
    } else {
      navbar.appendChild(controls);
    }
  });

  document.querySelectorAll('.tj-mobile-menu .navbar-nav').forEach(menu => {
    menu.innerHTML = `
      <li class="nav-item">
        <a class="nav-link dropdown-toggle" href="#mobileHomeSubmenu" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="mobileHomeSubmenu">Home</a>
        <div class="collapse mobile-submenu" id="mobileHomeSubmenu">
          <a class="nav-link" href="${footerPath('index.html')}">Home 1 – Fresh Juice Landing</a>
          <a class="nav-link" href="${footerPath('home-2.html')}">Home 2 – Tropical Juice Bar</a>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('about.html')}">About</a></li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('menu.html')}">Menu</a></li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('services.html')}">Services</a></li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('blog.html')}">Blog</a></li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('pricing.html')}">Pricing</a></li>
      <li class="nav-item">
        <a class="nav-link dropdown-toggle" href="#mobilePagesSubmenu" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="mobilePagesSubmenu">Pages</a>
        <div class="collapse mobile-submenu" id="mobilePagesSubmenu">
          <a class="nav-link" href="${footerPath('404.html')}">404 Error Page</a>
          <a class="nav-link" href="${footerPath('coming-soon.html')}">Coming Soon Page</a>
          <a class="nav-link" href="${footerPath('maintenance.html')}">Maintenance Page</a>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link" href="${footerPath('contact.html')}">Contact</a></li>
    `;
  });

  document.querySelectorAll('.tj-mobile-menu .theme-toggle-btn').forEach(button => {
    button.setAttribute('aria-label', 'Toggle color theme');
    button.setAttribute('title', 'Toggle color theme');
  });

  document.querySelectorAll('.tj-mobile-menu .rtl-toggle-btn').forEach(button => {
    button.setAttribute('aria-label', 'Toggle text direction');
    button.setAttribute('title', 'Toggle text direction');
  });

  document.querySelectorAll('.tj-mobile-menu').forEach(mobileMenu => {
    if (mobileMenu.querySelector('.tj-mobile-order')) return;

    const orderLink = document.createElement('a');
    orderLink.className = 'btn-tj btn-tj-primary w-100 justify-content-center tj-mobile-order';
    orderLink.href = footerPath('menu.html');
    orderLink.innerHTML = '<i class="bi bi-cup-straw"></i><span>Order Fresh</span>';

    const actionPanel = mobileMenu.querySelector('.offcanvas-body > .mt-4.pt-3.border-top');
    if (actionPanel) {
      actionPanel.appendChild(orderLink);
    } else {
      mobileMenu.querySelector('.offcanvas-body')?.appendChild(orderLink);
    }
  });

  /* ------------------------------------------------------------------------
     1. Theme Switcher (Light / Dark) with Persistence
     ------------------------------------------------------------------------ */
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('tenderjoy_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tenderjoy_theme', theme);

    // Update logos if available
    const logos = document.querySelectorAll('.site-logo-img');
    logos.forEach(img => {
      const isHeaderDark = document.body.classList.contains('header-dark-fixed');
      if (theme === 'dark' || isHeaderDark) {
        if (img.dataset.logoDark) img.src = img.dataset.logoDark;
      } else {
        if (img.dataset.logoLight) img.src = img.dataset.logoLight;
      }
    });

    // Update button icons
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('title', 'Switch to Light Mode');
          btn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
          icon.className = 'bi bi-moon-stars-fill text-tj-primary';
          btn.setAttribute('title', 'Switch to Dark Mode');
          btn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
      }
    });
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  /* ------------------------------------------------------------------------
     2. RTL (Right-to-Left) Switcher with Persistence
     ------------------------------------------------------------------------ */
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const storedDir = localStorage.getItem('tenderjoy_direction') || 'ltr';
  applyDirection(storedDir);

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('tenderjoy_direction', dir);

    rtlToggleBtns.forEach(btn => {
      const textSpan = btn.querySelector('.dir-label') || btn;
      if (dir === 'rtl') {
        textSpan.textContent = 'LTR';
        btn.setAttribute('title', 'Switch to Left to Right');
      } else {
        textSpan.textContent = 'RTL';
        btn.setAttribute('title', 'Switch to Right to Left');
      }
    });
  }

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
    });
  });

  /* ------------------------------------------------------------------------
     3. Sticky Header & Back to Top
     ------------------------------------------------------------------------ */
  const header = document.querySelector('.tj-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     4. Product Filtering, Searching & Sorting (Menu Page)
     ------------------------------------------------------------------------ */
  const menuContainer = document.getElementById('menu-items-grid');
  const categoryFilterBtns = document.querySelectorAll('[data-menu-filter]');
  const menuSearchInput = document.getElementById('menu-search-input');
  const menuSortSelect = document.getElementById('menu-sort-select');
  const noResultsMsg = document.getElementById('menu-no-results');

  if (menuContainer) {
    let currentCategory = 'all';
    let searchQuery = '';
    let sortMode = 'default';

    function filterAndSortProducts() {
      const productCards = Array.from(menuContainer.querySelectorAll('.product-item-col'));
      let visibleCount = 0;

      productCards.forEach(card => {
        const category = card.dataset.category || '';
        const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.product-desc')?.textContent || '').toLowerCase();
        const categoryLabel = (card.querySelector('.product-category')?.textContent || '').toLowerCase();
        const badge = (card.querySelector('.product-badge-float')?.textContent || '').toLowerCase();
        const imageAlt = (card.querySelector('img')?.getAttribute('alt') || '').toLowerCase();

        const matchesCat = (currentCategory === 'all' || category.toLowerCase() === currentCategory.toLowerCase());
        const searchableText = [category, categoryLabel, title, desc, badge, imageAlt].join(' ');
        const matchesSearch = (!searchQuery || searchableText.includes(searchQuery));

        if (matchesCat && matchesSearch) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Sorting
      if (sortMode !== 'default') {
        const sortedCards = productCards.slice().sort((a, b) => {
          const priceA = parseFloat(a.dataset.price || '0');
          const priceB = parseFloat(b.dataset.price || '0');
          const titleA = (a.querySelector('.product-title')?.textContent || '').trim();
          const titleB = (b.querySelector('.product-title')?.textContent || '').trim();

          if (sortMode === 'price-low') return priceA - priceB;
          if (sortMode === 'price-high') return priceB - priceA;
          if (sortMode === 'title-asc') return titleA.localeCompare(titleB);
          return 0;
        });

        sortedCards.forEach(card => menuContainer.appendChild(card));
      }

      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    categoryFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.menuFilter;
        filterAndSortProducts();
      });
    });

    if (menuSearchInput) {
      menuSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterAndSortProducts();
      });
    }

    if (menuSortSelect) {
      menuSortSelect.addEventListener('change', (e) => {
        sortMode = e.target.value;
        filterAndSortProducts();
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. Blog Filtering & Searching (Blog Page)
     ------------------------------------------------------------------------ */
  const blogContainer = document.getElementById('blog-posts-grid');
  const blogFilterBtns = document.querySelectorAll('[data-blog-filter]');
  const blogSearchInput = document.getElementById('blog-search-input');
  const blogNoResults = document.getElementById('blog-no-results');

  if (blogContainer) {
    let blogCategory = 'all';
    let blogQuery = '';

    function filterBlogPosts() {
      const posts = blogContainer.querySelectorAll('.blog-item-col');
      let visible = 0;

      posts.forEach(post => {
        const category = post.dataset.category || '';
        const title = (post.querySelector('.blog-title')?.textContent || '').toLowerCase();
        const excerpt = (post.querySelector('.blog-desc')?.textContent || '').toLowerCase();

        const matchCat = (blogCategory === 'all' || category.toLowerCase() === blogCategory.toLowerCase());
        const matchSearch = (!blogQuery || title.includes(blogQuery) || excerpt.includes(blogQuery));

        if (matchCat && matchSearch) {
          post.style.display = '';
          visible++;
        } else {
          post.style.display = 'none';
        }
      });

      if (blogNoResults) {
        blogNoResults.style.display = visible === 0 ? 'block' : 'none';
      }
    }

    blogFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        blogFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        blogCategory = btn.dataset.blogFilter;
        filterBlogPosts();
      });
    });

    if (blogSearchInput) {
      blogSearchInput.addEventListener('input', (e) => {
        blogQuery = e.target.value.trim().toLowerCase();
        filterBlogPosts();
      });
    }
  }

  /* ------------------------------------------------------------------------
     6. Location Filtering (Locations Page)
     ------------------------------------------------------------------------ */
  const locationBtns = document.querySelectorAll('[data-location-filter]');
  const locationCards = document.querySelectorAll('.location-item-col');

  if (locationBtns.length > 0 && locationCards.length > 0) {
    locationBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        locationBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const city = btn.dataset.locationFilter;
        locationCards.forEach(card => {
          if (city === 'all' || card.dataset.city === city) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. Animated Counters
     ------------------------------------------------------------------------ */
  const counterElements = document.querySelectorAll('.counter-num[data-target]');
  if (counterElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          const prefix = entry.target.getAttribute('data-prefix') || '';
          const suffix = entry.target.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = Math.max(1, Math.floor(target / 45));

          const updateCount = () => {
            count += speed;
            if (count < target) {
              entry.target.textContent = prefix + count.toLocaleString() + suffix;
              requestAnimationFrame(updateCount);
            } else {
              entry.target.textContent = prefix + target.toLocaleString() + suffix;
            }
          };

          updateCount();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     8. Image Gallery Lightbox Modal
     ------------------------------------------------------------------------ */
  const galleryItems = document.querySelectorAll('.gallery-lightbox-trigger');
  const lightboxModal = document.getElementById('tj-lightbox-modal');
  const lightboxImg = document.getElementById('tj-lightbox-image');
  const lightboxClose = document.getElementById('tj-lightbox-close');

  if (galleryItems.length > 0 && lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const fullSrc = item.getAttribute('href') || item.dataset.imgSrc || item.querySelector('img')?.src;
        if (fullSrc) {
          lightboxImg.src = fullSrc;
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* ------------------------------------------------------------------------
     9. Form Validation & FormSubmit Loading States
     ------------------------------------------------------------------------ */
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0')
  ].join('-');

  document.querySelectorAll('input[type="date"][name="event_date"]').forEach(dateInput => {
    dateInput.min = localToday;
  });

  const contactForms = document.querySelectorAll('.tj-ajax-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      const honeypot = form.querySelector('input[name="_honey"]');
      if (honeypot && honeypot.value.trim() !== '') return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHtml = submitBtn ? submitBtn.innerHTML : '';
      const subject = form.querySelector('input[name="_subject"]')?.value || '';
      const isNewsletter = /newsletter|subscriber|fresh club|launch/i.test(subject);
      const successText = isNewsletter
        ? 'Subscribed successfully! Thank you for joining TenderJoy.'
        : 'Sent successfully! Thank you. We will get back to you soon.';

      let status = form.nextElementSibling;
      if (!status || !status.classList.contains('tj-form-status')) {
        status = document.createElement('div');
        status.className = 'tj-form-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        form.insertAdjacentElement('afterend', status);
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Sending...
        `;
      }

      const action = new URL(form.getAttribute('action') || '', window.location.href);
      if (action.hostname === 'formsubmit.co') {
        action.pathname = `/ajax${action.pathname}`;
      }

      try {
        const response = await fetch(action.toString(), {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        const result = await response.json().catch(() => null);

        if (!response.ok || (result && result.success === false)) {
          throw new Error('Submission failed');
        }

        status.className = 'tj-form-status is-success';
        status.textContent = successText;
        form.reset();
        form.classList.remove('was-validated');
      } catch (error) {
        status.className = 'tj-form-status is-error';
        status.textContent = 'Unable to send right now. Please try again or call us directly.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      }
    });
  });

  /* ------------------------------------------------------------------------
     10. Coming Soon Countdown Timer
     ------------------------------------------------------------------------ */
  const countdownEl = document.getElementById('coming-soon-timer');
  if (countdownEl) {
    // Target 60 days from current date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const dEl = document.getElementById('timer-days');
        const hEl = document.getElementById('timer-hours');
        const mEl = document.getElementById('timer-minutes');
        const sEl = document.getElementById('timer-seconds');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ------------------------------------------------------------------------
     11. Hero Entrance Motion
     ------------------------------------------------------------------------ */
  const heroRevealItems = document.querySelectorAll('.tj-reveal');
  if (heroRevealItems.length) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      heroRevealItems.forEach(item => item.classList.add('is-visible'));
    } else {
      const heroObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      heroRevealItems.forEach(item => heroObserver.observe(item));
    }
  }
});
