# TenderJoy – Premium Tender Coconut & Fresh Juice Bar Website Template

**TenderJoy** is a commercial-grade, multipurpose HTML5/CSS3/JavaScript website template designed specifically for tender coconut stalls, fresh cold-pressed juice bars, organic smoothie lounges, tropical cafes, and beverage catering enterprises.

Crafted to meet the highest visual and code standards required by **ThemeForest** and **TemplateMonster**, this template features modern tropical aesthetics, responsive typography, genuine working functionality (category filters, search, sorting, FormSubmit email handling, interactive countdown timer, lightbox gallery), full **RTL** text direction support, and a smooth **Dark / Light mode** switcher with `localStorage` persistence.

---

## 🌴 Key Features

- **Two Distinct Homepages**:
  - `index.html`: Modern Fresh Juice Landing Page (17 comprehensive sections, metrics counters, daily menu highlights, catering promotion).
  - `home-2.html`: Niche-Specific Tropical Juice Bar (editorial layout, asymmetric image grid, craft mocktail focus, dark tropical hero).
- **100% Valid HTML5 & Semantic Hierarchy**: Clean, accessible headings (`<h1>`-`<h6>`), descriptive `alt` tags, and Open Graph metadata.
- **RTL (Right-to-Left) Native Support**: One-click RTL toggle with logical CSS properties (`margin-inline`, `padding-inline`, `text-align: start`) that works across all pages.
- **Dark & Light Mode**: Accessible color palette with persistent theme storage in `localStorage`.
- **Dynamic Product Menu (`menu.html`)**: Live category filtering, instant client-side search, and price/alphabetical sorting.
- **14 Dedicated Product Detail Pages (`product-details/`)**: Each beverage features unique photography, taste notes, ingredients, responsible non-medical benefits, and related products.
- **Comprehensive Services (`services.html`) & 6 Service Detail Pages (`service-details/`)**: Featuring step-by-step processes, tiered packages, and interactive FAQ accordions.
- **Location Finder (`locations.html`)**: Filterable store cards with opening hours, direct phone numbers, and Google Maps directions.
- **Editorial Blog (`blog.html`) & 6 Full Article Pages (`blog-details/`)**: Filterable journal with author avatars, reading times, table of contents, and social share links.
- **Pricing & Comparison Table (`pricing.html`)**: Transparent retail pricing table and tiered event catering package cards.
- **Working Contact & Catering Booking (`contact.html`)**: Dual FormSubmit forms with loading spinner states, email validation, and honeypot anti-spam protection.
- **Utility Pages**: Tropical `404.html`, Animated `coming-soon.html` with countdown timer, and `maintenance.html`.
- **Zero Heavy Framework Dependencies**: Pure Vanilla JS + Bootstrap 5.3.3 + Bootstrap Icons. Fast loading and zero bloat.

---

## 🎨 Brand Identity & Color Palette

| Token Name | Hex Code | Purpose |
|---|---|---|
| **Deep Coconut Green** | `#145C38` | Primary Brand Color, buttons, navigation accents |
| **Fresh Leaf Green** | `#45A85A` | Secondary Accent, success icons, badges |
| **Lime Green** | `#B8D94B` | Highlighting accents, special badges, dark mode glow |
| **Coconut Cream** | `#FFF9EC` | Soft background surface, section backdrops |
| **Dark Text** | `#192A21` | High-contrast typography |
| **White** | `#FFFFFF` | Crisp surface cards |

---

## 📁 Project Folder Structure

```
tenderjoy/
│
├── index.html                           # Home 1 - Modern Fresh Juice Landing
├── home-2.html                          # Home 2 - Editorial Tropical Juice Bar
├── about.html                           # Brand story, sourcing process & team
├── menu.html                            # Product menu with search, filters & sort
├── services.html                        # Services overview
├── locations.html                       # Store finder with zone filters
├── blog.html                            # Journal listing with category search
├── pricing.html                         # Retail prices & catering packages
├── contact.html                         # Contact & Catering forms (FormSubmit)
├── 404.html                             # Custom tropical error page
├── coming-soon.html                     # Animated launch timer & newsletter
├── maintenance.html                     # Scheduled maintenance notice
│
├── product-details/                     # 14 Individual Product Pages
│   ├── classic-tender-coconut.html
│   ├── diamond-cut-royal-coconut.html
│   ├── pollachi-sweet-coconut.html
│   ├── pure-raw-coconut-water.html
│   ├── chilled-mint-coconut-water.html
│   ├── chia-seed-coconut-water.html
│   ├── sunburst-valencia-orange.html
│   ├── cold-pressed-watermelon-splash.html
│   ├── golden-queen-pineapple.html
│   ├── tropical-detox-elixir.html
│   ├── abc-vitality-glow.html
│   ├── creamy-coconut-cold-brew.html
│   ├── coconut-mojito-mocktail.html
│   └── alphonso-mango-coconut-cream.html
│
├── service-details/                     # 6 Individual Service Pages
│   ├── fresh-tender-coconut-supply.html
│   ├── fresh-juice-preparation.html
│   ├── event-party-catering.html
│   ├── corporate-beverage-catering.html
│   ├── bulk-coconut-orders.html
│   └── customized-fresh-juice-packages.html
│
├── blog-details/                        # 6 Individual Article Pages
│   ├── coconut-water-electrolytes-hydration-science.html
│   ├── cold-pressed-vs-centrifugal-juicing-guide.html
│   ├── sustainable-coconut-farming-pollachi-farms.html
│   ├── tropical-summer-detox-recipes.html
│   ├── art-of-crafting-coconut-milk-beverages.html
│   └── wellness-trends-raw-natural-beverages-2026.html
│
├── assets/
│   ├── css/
│   │   └── style.css                    # Core CSS system & RTL/Dark styles
│   ├── js/
│   │   └── main.js                      # Interactivity, filters, theme, timers
│   └── images/
│       ├── logo.svg                     # Vector brand logo (Dark text)
│       ├── logo-light.svg               # Vector brand logo (Light text)
│       └── favicon.svg                  # Brand favicon
│
└── README.md                            # Documentation
```

---

## ⚙️ Configuration & Customization Guide

### 1. Connecting FormSubmit to Your Email
The contact and catering forms in `contact.html` and `index.html` use [FormSubmit](https://formsubmit.co).
To activate submissions to your inbox:
1. Open `contact.html` (or `index.html`).
2. Search for `action="https://formsubmit.co/hello@tenderjoyjuices.com"`.
3. Replace `hello@tenderjoyjuices.com` with your real email address:
   ```html
   <form action="https://formsubmit.co/your-email@example.com" method="POST" class="tj-ajax-form">
   ```
4. The first time you submit the form, FormSubmit will send a confirmation link to your inbox. Click **Activate Form**, and all subsequent customer submissions will be forwarded directly to you.

### 2. Changing Google Maps Locations
In `contact.html` and `locations.html`:
Find the `<iframe>` element or direction links:
```html
<iframe src="https://maps.google.com/maps?q=YOUR_STORE_ADDRESS&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>
```
Simply replace `YOUR_STORE_ADDRESS` with your city, street, or Google Maps place query.

### 3. Adding New Menu Products
To add a new product to `menu.html`:
Duplicate any `.product-item-col` div inside `#menu-items-grid` and set the appropriate `data-category` and `data-price`:
```html
<div class="col-md-6 col-lg-3 product-item-col" data-category="fresh-fruit" data-price="95">
  <!-- Card contents -->
</div>
```
The search and category filter scripts will automatically detect and include your new item!

---

## 📱 Responsive Testing Matrix

Tested and optimized for:
- **Large Desktop**: 1920px+
- **Standard Desktop**: 1440px
- **Laptops**: 1366px, 1280px
- **Tablets**: 1024px (iPad Pro), 768px (iPad Mini)
- **Mobiles**: 430px (iPhone 15 Pro Max), 390px, 375px, 320px (iPhone SE)

---

## 📄 License & Credits
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Typography**: [Google Fonts (Plus Jakarta Sans & Playfair Display)](https://fonts.google.com/)
- **Imagery**: Unsplash (Editorial curated photography)
- **CSS Framework**: Bootstrap 5.3.3 + Custom Handcrafted Styling Engine

Created with passion for **TenderJoy**.
