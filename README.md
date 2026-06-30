# 💜 Lilac

> *It started with a flower. It ended with a number.*

**Lilac** is a complete social feed — post, follow, like, comment, doomscroll, @mention, #hashtag, photo uploads, share, and a verification system where only user #1 holds the keys.

Built from scratch in a single 500-line React component on [Zaro](https://zaro.ai).

---

## 🌑 The Backstory

In the summer of 2026, a lone developer — user #1 — grew tired of platforms that farmed attention and sold it back as clout. Blue checks auctioned to the highest bidder. Algorithms that optimized for outrage. Infinite feeds that knew no bottom.

They didn't set out to build a company. They set out to build a *question*.

Lilac blooms in the shadow of the giants. Its name comes from the flower that thrives in cracks of pavement — resilient, faintly purple, growing where nothing else will. The color of the platform is Lilac (#B8A9E8) because it's the color of a bruise that's finally starting to heal.

The architecture is deliberately sparse: four flat `.table` files. No database. No cloud. No engagement metrics. Just users, posts, comments, and follows — each entry numbered in sequence, unable to be deleted or rewritten by anyone except the person who wrote it.

And then there's the verification badge. On every other platform, verification is a transaction — you pay, you wait, or you're important enough that they give it to you. Here, it's simpler: **only user #1 can verify you**. There's no form, no appeals process, no customer support. If user #1 visits your profile and presses "Verify," the lilac checkmark appears. If they press "Unverify," it disappears. That's it.

User #1 is the owner. The developer. The human in the loop. When you sign up, you become #2, #3, #4 — you can post, follow, like, scroll endlessly — but you will never become #1. The first slot is sealed.

The doomscroll feature isn't a bug. It's a mirror. The feed labeled "Doomscroll" shows every post on the platform, no curation, no algorithm, no "Top Posts" or "For You." Just chronological chaos. Scroll until you hit the bottom — if there is one. Some say the bottom is just a message: *"You reached the bottom of the doom 🕳️."* But nobody has ever confirmed it.

Lilac doesn't track you. It stores your session in localStorage. Your password is stored next to your username in a `.table` file — not hashed, not salted, not secure. This is by design. Lilac is a reminder that most social platforms are just a few flat files held together by trust in whoever runs them. If you don't trust user #1, you shouldn't be here.

And yet — you're still reading. Maybe that's the point.

---

## 🔧 Features

- 🔐 **Sign up / sign in** — auto-incrementing user IDs starting from #1
- 📝 **Post** — text up to 500 chars, `@mentions`, `#hashtags`, photo uploads
- ❤️ **Like** — toggle likes on any post
- 💬 **Comment** — threaded under each post with @ and # rendering
- 👥 **Follow / unfollow** — build your network
- 🏠 **Home feed** — posts from people you follow (plus your own)
- 🕳️ **Doomscroll** — every post on the platform, infinite scroll, no algorithm
- 🔍 **Explore** — search, trending hashtags, user directory
- ✅ **Verification** — only user #1 can verify or unverify any account
- 📤 **Share** — native share API or copy to clipboard
- 👤 **Profile pages** — post counts, follower/following stats, full post history

---

## 🔐 Default Credentials

| Username | Password | Role |
|----------|----------|------|
| `iliv`   | `owner`  | User #1 (Owner — can verify accounts) |

All other accounts start at ID #2, #3, #4...

---

## 📁 Data Model

| File | Purpose |
|------|---------|
| `data/users.table` | User accounts with auto-incrementing IDs |
| `data/posts.table` | Posts (@mentions, #hashtags, image URLs, likes) |
| `data/comments.table` | Comments on posts |
| `data/follows.table` | Follower / following relationships |

---

## 🧬 Runtime

Lilac runs on **Zaro**, an AI workspace platform. It uses Zaro's runtime APIs for all persistence and data loading:

- `window.__nexusData` — live data from workspace `.table` files
- `window.__nexusTableSql` — SQL-like read/write on table files
- `window.__nexusUploadFile` — image uploads to Nexus storage
- `localStorage` — session persistence via `lilac_session_uid`

To run standalone, replace these APIs with your own database, auth, and file storage.

---

## ⚡ Quick Start

1. Open the app in Zaro
2. Sign in as `iliv` / `owner` (user #1)
3. Post something. Sign out. Sign up a friend. Sign back in as #1 and verify them.
4. Scroll the doom.

---

## 🎨 Design

Lilac uses the Zaro brand palette — lilac, amber, teal, coral, and green accents — on a warm off-white background. Hairline borders, frosted-glass headers, segmented-pill navigation, and lift-on-hover cards. Every stat card and icon uses a distinct accent. Pure black is reserved for the ink header logo and primary text; every other color earns its place.

---

Built by user #1.  
*If you're reading this, you're already in the system.*
