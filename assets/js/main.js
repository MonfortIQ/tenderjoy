/**
 * TenderJoy - Premium Tender Coconut & Fresh Juice Bar Website Template
 * Main Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

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

        const matchesCat = (currentCategory === 'all' || category.toLowerCase() === currentCategory.toLowerCase());
        const matchesSearch = (!searchQuery || title.includes(searchQuery) || desc.includes(searchQuery));

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
  const contactForms = document.querySelectorAll('.tj-ajax-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      // Check honeypot field
      const honeypot = form.querySelector('input[name="_honey"]');
      if (honeypot && honeypot.value.trim() !== '') {
        e.preventDefault();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Transmitting Fresh Order...
        `;
        // Let natural form submission happen to FormSubmit endpoint
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
});
