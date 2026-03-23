# 🚀 Portfolio Website — GitHub Pages Deployment Guide

## Files in this project
```
portfolio/
├── index.html      ← Main HTML structure
├── style.css       ← All styling
├── script.js       ← Animations & interactions
└── README.md       ← This guide
```

---

## Step-by-Step: Deploy to GitHub Pages

### STEP 1 — Create a GitHub Account
1. Go to https://github.com
2. Click **Sign Up** and create a free account
3. Verify your email

---

### STEP 2 — Create a New Repository
1. Click the **+** button (top-right) → **New repository**
2. Name it EXACTLY: `yourusername.github.io`  
   *(replace `yourusername` with your actual GitHub username)*
3. Set visibility to **Public**
4. Do NOT check "Add README"
5. Click **Create repository**

---

### STEP 3 — Upload Your Files
**Option A — Using GitHub Website (Easiest)**
1. On your new repository page, click **uploading an existing file**
2. Drag and drop all 3 files: `index.html`, `style.css`, `script.js`
3. Scroll down → click **Commit changes**

**Option B — Using Git (Recommended)**
```bash
# 1. Install Git from https://git-scm.com/downloads

# 2. Open terminal/command prompt in your portfolio folder
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

---

### STEP 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** section (left sidebar)
3. Under **Source** → select **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**

---

### STEP 5 — Your Site is Live! 🎉
Wait 2–5 minutes, then visit:
**https://yourusername.github.io**

---

## Customising Your Portfolio

### Change Your Name
In `index.html`, replace all instances of "Your Name" and "YN" with your real name.

### Change Your Details
| What | Where | How |
|------|-------|-----|
| Your name | `index.html` — `.hero-title` | Replace "Your" and "Name" |
| Email | `index.html` — contact section | Replace `your@email.com` |
| GitHub link | `index.html` — about section | Replace `yourusername` |
| LinkedIn | `index.html` — contact socials | Replace URL |
| Projects | `index.html` — `.project-card` | Edit title, description, tags |
| Skills | `index.html` — `.skill-group` | Edit labels and `--w` percentages |
| Stats | `index.html` — `.hero-stat-bar` | Change numbers |
| Location | `index.html` — `.hero-tag` | Change "London, UK" |

### Change Accent Color
In `style.css`, line 6:
```css
--accent: #e8c547;   /* Change this to any color you like */
```
Popular choices: `#00d4ff` (cyan), `#ff4d6d` (pink), `#39ff14` (neon green)

### Add a Real Photo
Replace the `.img-placeholder` div in `index.html` with:
```html
<img src="photo.jpg" alt="Your Name" style="width:100%;border-radius:12px;">
```
Upload your `photo.jpg` to the same folder.

### Add Real Project Screenshots
Replace the `style="background: linear-gradient(...)"` on `.project-img` with:
```html
<div class="project-img" style="background-image:url('project1.png');background-size:cover">
```

---

## Updating Your Site Later
Every time you make changes, push them to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Changes go live within 1–2 minutes.

---

## Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub → Settings → Pages → **Custom domain** → enter your domain
3. Add a CNAME record at your domain registrar pointing to `yourusername.github.io`

---

## Tips
- Use https://favicon.io to generate a favicon and add it to `<head>`
- Add Google Analytics for visitor tracking
- Test on mobile — the site is fully responsive
- Check https://pagespeed.web.dev for performance score
