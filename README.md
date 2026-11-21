# joyy_dev · Flutter & Mobile UI Developer Portfolio

A responsive developer portfolio and showcase for **Joyce (joyy_dev)**, built to highlight mobile development expertise in Flutter, Dart, Firebase, and mobile UI engineering.

---

## 📁 Project Structure

The project strictly adheres to the following directory and file architecture:

```text
joyy_dev/
│
├── index.html
├── about.html
├── contact.html
├── 404.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
│
├── projects/
│   ├── index.html
│   ├── localfixers.html
│   ├── workout-tracker.html
│   ├── tixora.html
│   ├── taskify.html
│   └── gs-analyzer.html
│
├── blog/
│   ├── index.html
│   │
│   ├── flutter-project-structure/
│   │   └── index.html
│   │
│   ├── flutter-state-management/
│   │   └── index.html
│   │
│   └── lessons-from-building-taskify/
│       └── index.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   ├── projects.css
│   │   └── blog.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── projects.js
│   │   ├── blog.js
│   │   └── contact.js
│   │
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile.webp
│   │   │
│   │   ├── projects/
│   │   │   ├── localfixers.webp
│   │   │   ├── workout-tracker.webp
│   │   │   ├── tixora.webp
│   │   │   ├── taskify.webp
│   │   │   └── gs-analyzer.webp
│   │   │
│   │   └── blog/
│   │       ├── flutter-project-structure.webp
│   │       └── flutter-state-management.webp
│   │
│   ├── icons/
│   │   ├── joyy-dev-wordmark.svg
│   │   └── joyy-dev-symbol.svg
│   │
│   └── files/
│       └── resume.pdf
│
└── README.md
```

---

## 🎨 Design System & Aesthetic

- **Theme:** Dark cosmic aesthetic with glassmorphism and subtle gradients
- **Color Palette:**
  - Background: `#040520` (Dark Space Navy)
  - Card / Panel: `#0B1033` (Deep Midnight Blue)
  - Accent: `#7BE7DF` (Cyan Glow)
  - Secondary Accent: `#A89AFF` (Lavender Violet)
  - Accent Spark: `#C9A45C` (Warm Gold)
  - Text Primary: `#F4F6FF` (Clean White)
  - Text Muted: `#A4ACCB` (Steel Indigo)
- **Typography:** `Inter` (via Google Fonts)

---

## 📱 Features

- **Interactive 3D Phone Mockup:** Responsive 3D tilt interaction on desktop with dynamic checklist and goal progress tracking.
- **Projects Showcase:** Detailed case studies for 5 applications:
  - **LocalFixers:** On-demand services platform with geolocation matching.
  - **Workout Tracker:** Offline-first gym progression log.
  - **Tixora:** Event ticketing platform with encrypted QR codes.
  - **Taskify:** Gesture-driven priority productivity tool.
  - **GS Analyzer:** Spreadsheet data intelligence dashboard.
- **Engineering Blog:** Technical deep dives on Flutter architecture and state management.
- **Accessible Navigation:** Full keyboard navigation support, skip links, ARIA attributes, and responsive mobile drawer.

---

## 🚀 Running Locally

You can preview the portfolio using any local HTTP static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx serve)
npx serve .
```

Open `http://localhost:8000` in your web browser.
