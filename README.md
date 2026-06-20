<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 黒 Kurogane Protocol

A cinematic, operative-themed landing page built with pure HTML, CSS, and JavaScript. A celestial dossier for an elite division — letter-by-letter hero reveal, classified mission directives, and interactive operative ID cards.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

* 🖋️ **Letter-by-Letter Hero Reveal** — Each character of the logo rises into formation with a staggered spring animation
* 🗂️ **Classified Mission Directives** — Feature cards styled as redacted dossier panels, complete with classification stamps and redacted text bars
* 🪪 **Operative ID Cards** — Hover-expanding member cards with a clearance-file layout: file tags, status indicators, name/index pairing, and a hairline divider before contact icons
* 🎯 **Custom SVG Icon System** — Hand-built icon sprite sheet (no external icon font dependency) for feature icons and social links
* 🌓 **Warm Midnight Palette** — Deep charcoal background with warm beige and amber accents
* 🎞️ **Smooth Hover Choreography** — Cards expand, dim siblings, and reveal socials with cubic-bezier easing
* 📱 **Fully Responsive** — Centered, balanced layout from desktop down to small mobile screens

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Zeddy-Forreal/Kurogane-Protocol.git
cd Kurogane-Protocol
```

**2. Open in browser**

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**3. Add your media**

Drop your operative photos and background image into a `media/` folder next to `index.html`:

```
media/
├── background.jpg
├── img_1.jpg
├── img_2.jpg
├── img_3.jpg
└── img_4.jpg
```

---

## 📁 File Structure

```
Kurogane-Protocol/
├── index.html          Full app — markup, styles, and SVG icons in one file
└── media/               Background and operative portrait images
```

> The app is intentionally single-file for simplicity. All CSS, JavaScript, and SVG icon symbols are embedded inline.

---

## 🪪 Operative Cards

Each member card is built from a single repeatable block — name, title, and social links:

```html
<div class="card" style="background-image:url(media/img_1.jpg);">
    <div class="card-tag">
        <span class="card-tag-id">FILE_001</span>
        <span class="card-tag-dot"></span>
    </div>
    <div class="socials">
        <div class="socials-name-row">
            <p>Riku Hayato</p>
            <span class="socials-num">№ 001</span>
        </div>
        <p class="title">Operations Strategist</p>
        <div class="socials-divider"></div>
        <nav>
            <a href="#"><svg><use href="#ic-fb"/></svg></a>
            <a href="#"><svg><use href="#ic-mail"/></svg></a>
            <a href="#"><svg><use href="#ic-linkedin"/></svg></a>
            <a href="#"><svg><use href="#ic-phone"/></svg></a>
        </nav>
    </div>
</div>
```

Add or remove operatives by duplicating this block inside `<main id="cardMain">`.

---

## 🎨 Customization

All colors are CSS custom properties at the top of the `<style>` block. Edit these to retheme the whole site:

```css
:root {
  --bg:     #252525;   /* Page background        */
  --bg2:    #181818;   /* Footer background       */
  --bg3:    #ffffff0d;  /* Subtle panel fill       */
  --main:   #ebd2be;   /* Primary accent color    */
  --sec:    #f0b572;   /* Secondary accent / glow */
  --dtext:  rgb(33,33,33); /* Text on light accents */
  --text:   #cfc6bd;   /* Primary text            */
  --muted:  #a49a8f;   /* Secondary / muted text  */
}
```

Feature icons are referenced from a single SVG sprite sheet near the top of `<body>` — swap the `<symbol>` contents or add new ones, then point any `<use href="#ic-name"/>` at it:

```html
<symbol id="ic-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
  <circle cx="12" cy="12" r="9"/>
  <circle cx="12" cy="12" r="5"/>
</symbol>
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
