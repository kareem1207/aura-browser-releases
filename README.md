# Aura Browser — Landing Page

A clean, premium landing page for the Aura Browser. Built with Next.js, deployable to Vercel in minutes.

---

## 🚀 Deploy to Vercel (Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Aura landing page"
gh repo create aura-landing --public --push
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your `aura-landing` GitHub repo
3. Click **Deploy** — that's it. Done in ~60 seconds.

Vercel auto-detects Next.js and builds it for you.

---

## 📦 Hosting Your Download File

For the Windows `.exe` installer, use **GitHub Releases** (free, no bandwidth limits):

1. Go to your main `aura-browser` repo on GitHub
2. Click **Releases** → **Create a new release**
3. Tag it `v1.0.0`
4. Upload your `Aura-Setup.exe` as a release asset
5. Update the download link in `app/page.js`:

```js
href="https://github.com/YOUR_USERNAME/aura-browser/releases/latest/download/Aura-Setup.exe"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## ✏️ Things to Update Before Launch

| Location | What to change |
|----------|----------------|
| `app/page.js` line ~215 | Replace `YOUR_USERNAME` in the download href |
| `app/page.js` footer | Update email address |
| `app/page.js` GitHub links | Replace `YOUR_USERNAME` with real username |
| `app/layout.js` | Update metadata description |
| `app/page.js` installer size | Update "~120 MB" to actual file size |

---

## 📁 Structure

```
aura-landing/
├── app/
│   ├── globals.css     ← all styles
│   ├── layout.js       ← HTML head, metadata
│   └── page.js         ← full landing page
├── next.config.js
├── vercel.json
└── package.json
```
