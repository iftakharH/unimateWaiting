# Unimate — Waiting List Page

> **Mates for Mates** · A university-verified marketplace built exclusively for students.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 About

**Unimate** is a peer-to-peer marketplace where university students can buy, sell, and exchange items safely within their own campus. Every account is university-verified, so you only ever deal with fellow students — no strangers, no hassle.

This repository contains the **waiting list landing page** used to collect early-access sign-ups before the platform launches.

---

## ✨ Features

### For Students
- 🎓 **Verified community** — only university students, no strangers
- 🛒 **Buy & sell anything** — textbooks, gadgets, furniture, and more
- 💬 **In-app chat** — negotiate directly with buyers and sellers

### For Sellers
- 📢 **Unlimited listings** — post as many items as you like
- 📋 **Seller dashboard** — manage all your listings and sales in one place
- 🔥 **Promotion tools** — boost visibility and sell faster

### For Delivery Partners
- 🚲 **Campus-only delivery** — free, fast, and familiar routes
- 🧭 **Real-time tracking** — stay updated on every order

---

## 🗂️ Project Structure

```
unimateWaiting/
├── index.html      # Landing page markup
├── style.css       # Styles (CSS variables, Flexbox/Grid, animations)
├── script.js       # Smooth scroll, form handling & toast notifications
├── hero.png        # Hero section image
├── favicon.png     # Site favicon
└── README.md       # This file
```

---

## 🚀 Getting Started

No build tools or package managers are required — this is a plain static website.

### Prerequisites

Any modern web browser plus one of the following local servers:

| Option | Command |
|--------|---------|
| Python 3 | `python -m http.server 8000` |
| Python 2 | `python -m SimpleHTTPServer 8000` |
| Node.js  | `npx http-server` |
| VS Code  | **Live Server** extension |

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/iftakharH/unimateWaiting.git
cd unimateWaiting

# 2. Start a local server (example using Python 3)
python -m http.server 8000

# 3. Open in your browser
open http://localhost:8000
```

---

## 🖥️ Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Main headline, tagline, and two CTA buttons |
| **About** | What Unimate is and why it exists |
| **Features** | Cards for students, sellers, and delivery partners |
| **Why Join Early** | Benefits of being a founding community member |
| **Waiting List Form** | Email sign-up powered by [Web3Forms](https://web3forms.com/) |
| **Community** | Link to the WhatsApp community group |
| **Footer** | Branding and credits |

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| HTML5 | Page structure and semantics |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript (ES6+) | Smooth scroll, form submission, toast alerts |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Typography |
| [Web3Forms](https://web3forms.com/) | Serverless email form submissions |

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and adapt it for your own waiting-list pages.

---

<p align="center">Built with ❤️ by students, for students · <strong>Purple Tech</strong></p>
