# Academic Website — GitHub Pages

A clean, minimal personal academic website. Built with pure HTML, CSS, and vanilla JS — no frameworks, no build step, works out of the box.

---

## 🗂 File Structure

```
your-repo/
├── index.html       ← main page (all sections)
├── style.css        ← all styles
├── script.js        ← nav, animations, mobile menu
├── assets/
│   ├── photo.jpg    ← your profile photo (add this!)
│   └── cv.pdf       ← your CV PDF (add this!)
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create your repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repo exactly: **`yourusername.github.io`**  
   *(replace `yourusername` with your actual GitHub username)*
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload your files

**Option A — via browser (easiest):**
1. Open your new repo on GitHub
2. Click **Add file → Upload files**
3. Drag and drop: `index.html`, `style.css`, `script.js`, and the `assets/` folder
4. Click **Commit changes**

**Option B — via Git (recommended):**
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy all the site files into this folder, then:
git add .
git commit -m "Initial site"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Select branch: **main** (or **master**), folder: **/ (root)**
4. Click **Save**

### Step 4 — Visit your site

After ~60 seconds, your site will be live at:  
**`https://yourusername.github.io`**

---

## ✏️ Personalizing Your Content

Open `index.html` and find/replace the following placeholders:

| Placeholder | Replace with |
|---|---|
| `YOUR NAME` | Your full name |
| `[YOUR FIELD]` | e.g., Computer Science |
| `[YOUR UNIVERSITY]` | e.g., MIT |
| `you@university.edu` | Your email address |
| `[ADVISOR NAME]` | Your advisor's name |
| `PhD Candidate / Postdoctoral...` | Your actual title |
| Publications, courses, etc. | Your real content |

### Adding your photo
- Name it `photo.jpg` (or `photo.png`)
- Place it in the `assets/` folder
- Recommended size: ~400×500px

### Adding your CV
- Save as `cv.pdf`
- Place it in the `assets/` folder

---

## 🎨 Customizing Colors

Open `style.css` and edit the `:root` variables at the top:

```css
:root {
  --ink:       #1a1814;   /* main text color */
  --accent:    #7c5c3a;   /* highlight / link color (currently warm brown) */
  --paper:     #faf8f5;   /* background */
  --paper-alt: #f3f0eb;   /* alternate section background */
}
```

---

## 💡 Tips

- **Publications**: Add new `<div class="pub-item">` blocks. Group them under `<div class="pub-year-group">` by year.
- **Research cards**: Add or remove `<div class="research-card">` blocks — the grid adjusts automatically.
- **Teaching table**: Add rows with `<tr>` inside `<tbody>`.
- **Social links**: Update the `href` values in the Contact section with your real profile URLs.
- **Remove a section**: Delete the entire `<section id="...">` block and its corresponding `<li>` in the nav.

---

## 🔒 Custom Domain (optional)

If you have a custom domain (e.g., `yourname.com`):
1. In your repo, create a file called `CNAME` containing just your domain:
   ```
   yourname.com
   ```
2. Point your domain's DNS to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

Built with ❤️ — no dependencies, no build tools, just files.
