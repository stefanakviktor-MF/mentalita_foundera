# Mentalita Foundera — Next.js Website

Built with **Next.js 14**, **Tailwind CSS**, and **Sanity CMS**.

---

## 🚀 Quick Start (deploy in ~15 minutes)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/mentalitafoundera.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live on `your-project.vercel.app` in ~2 minutes

### 3. Connect WebSupport domain
In **Vercel → Project → Settings → Domains**, add `mentalitafoundera.sk`.

Then in **WebSupport DNS** panel, add:

| Typ    | Meno | Hodnota              |
|--------|------|----------------------|
| `A`    | `@`  | `76.76.21.21`        |
| `CNAME`| `www`| `cname.vercel-dns.com` |

DNS propagation: 5–30 minutes.

---

## 📝 Set up Sanity CMS (edit content without code)

### 1. Create Sanity project
```bash
npx sanity@latest init --env
# Choose: Create new project → name it "Mentalita Foundera" → dataset: production
```

This writes your Project ID + token to `.env.local` automatically.

### 2. Install dependencies & run locally
```bash
npm install
npm run dev
```

### 3. Open the Studio
Go to `http://localhost:3000/studio` — you'll see the Sanity CMS dashboard.

### 4. Add your content:
- **🎙 Epizódy** — add podcast episodes (title, guest, Spotify link, cover image, etc.)
- **👤 Profil Viktora** — edit your bio, photo, stats, quote
- **🏆 Achievements** — add milestones to the timeline

### 5. Add env vars to Vercel
In **Vercel → Settings → Environment Variables**, add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_id
NEXT_PUBLIC_SANITY_DATASET    = production
SANITY_API_TOKEN              = your_token
RESEND_API_KEY                = re_xxx  (optional, for contact form emails)
CONTACT_TO_EMAIL              = viktor@mentalitafoundera.sk
```

---

## 📁 Project Structure

```
app/             → Pages (Next.js App Router)
  page.tsx       → Home / one-pager
  podcast/       → Episode archive + individual episode pages
  studio/        → Sanity CMS (at /studio)
  api/           → API routes (contact form, subscribe)
components/      → React components
  layout/        → Navbar, Footer
  sections/      → Hero, About, Podcast, Achievements, Community, Contact
  podcast/       → EpisodeCard
lib/             → Sanity queries, utilities, mock data
sanity/schemas/  → CMS content types
types/           → TypeScript types
```

## 🔄 How content updates work
1. You add/edit an episode in Sanity Studio (`/studio`)
2. Site auto-refreshes within **1 hour** (ISR)
3. Or trigger instant re-deploy from Vercel dashboard

---

## 📧 Contact Form
Works out of the box — emails sent via [Resend](https://resend.com).
Without `RESEND_API_KEY`, it logs to console (dev mode).
