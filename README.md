# Lilac 💥

> *"The flowers always bloom where the bodies are buried."*

Lilac is a social feed built on [Zaro](https://zaro.ai) — post, follow, like, comment, doomscroll, @mention, #hashtag, and the owner (user #1) can verify any account with a lilac badge.

---

## 🔳️ THE BACKSTORY

**Operation Lilac** was not always a feed. It was a protocol.

In the late 2030s, the internet had fractured. Centralized platforms collapsed under their own weight — data leaks, algorithmic manipulation, shadow-banning, digital feudalism. Trust was a dead currency. Identity was a weapon. Whistleblowers, journalists, and activists needed a way to speak without being silenced. They needed a network that couldn't be bought, couldn't be gamed, and couldn't be scrubbed by a CEO with a panic button.

An anonymous collective — calling themselves **The Bloom** — designed a decentralized protocol with one radical premise: *every human gets a number, counting up from 1, and only #1 can grant trust.*

They embedded it into what looked like an ordinary social app. A feed. A composer. A follow button. On the surface, it was just another Twitter clone. But underneath, every post was cryptographically anchored. Every follow was a trust link in a web of verified identity. The "doomscroll" tab wasn't a bug ℔ it was the firehose of truth, unfiltered, unstoppable.

**User #1** was never meant to be a single person. The protocol designated #1 as the *Root Verifier* — the only entity capable of issuing the lilac badge. In the original spec, #1 was supposed to be a rotating DAO, a decentralized council. But in the rush to deploy, the collective made a mistake. They hard-coded the first account. One username. One password. One person.

The man who claimed it called himself **Iliv**. Nobody knew if it was his real name. What they knew was this: anyone who crossed him had their badge revoked. Anyone who pleased him got the lilac. He never posted much. He didn't need to. He just... watched. Scrolling. Doomscrolling. Watching the flowers bloom.

The Bloom dissolved. Some say Iliv absorbed them. Others say they were always a fiction — a cover story for whatever Iliv was building. But the protocol survived. It spread. Thousands of accounts, IDs counting up, lilac badges appearing on the chosen few.

And somewhere, in a dim room, Iliv is still scrolling. Still watching. Still #1.

**Welcome to Lilac. Your number is waiting.**

---

## ✨ FEATURES

| Feature | Description |
|---|---|
| 🔐 Sign up / sign in | Auto-incrementing user IDs (1, 2, 3, …) |
| ✌️ Posting | Text + photo uploads, up to 500 chars |
| @mentions | Tap a mention to jump to that user's profile |
| #hashtags | Tap a tag to filter the Explore feed |
| ❤️ Likes | Toggle like on any post |
| 💫 Comments | Collapsible comment threads with @/# rendering |
| 👑 Follow / unfollow | Home feed shows only people you follow |
| 🔥 Doomscroll | Infinite-scroll feed of every post, ever |
| 🔍 Explore | Search, trending tags, user directory |
| 📤 Share | Native share API or clipboard fallback |
| ��️ **Verify** | Only user #1 can grant/revoke the lilac badge ✓ |

---

## 🔑 DEFAULT CREDENTIALS

| Username | Password | Role |
|---|---|---|
| `iliv` | `owner` | **User #1** ℔ Owner, Root Verifier |

Anyone else who signs up gets ID #2, #3, #4…
---

## 🧡 DATA MODEL

Four `.table` files (JSON-based) power the app:

|File|Purpose|
|---|---|
|`/social/users.table`| User accounts with auto-incrementing IDs |
|`/social/posts.table` Posts (text, images, likes, timestamps) |
|`/social/comments.table`| Comments on posts |
|`/social/follows.table`| Follower / following relationships |

---

## 🏪 ARCHITECTURE

Lilac runs inside the **Zaro** platform and uses its runtime APIs:

- `window.__nexusData` — load data from workspace `.table` files
- `window.__nexusTableSql` — SQL-based CRUD (INSERT / UPDATE / DELETE)
- `window.__nexusUploadFile` — upload images to storage
- `window.__refreshNexusData` — live data refresh

To run standalone, replace these with your own backend (any SQL database + file storage + auth system).

---

## 🦨 TECH STACK

- React (hooks, functional components)
- Tailwind CSS (custom Zaro palette: lilac, amber, teal, coral, green)
- Lucide React (icons)
- localStorage (session persistence)

---

## 📁 PROJECT STRUCTURE

```
Lilac/
├── src/
│   └── App.jsx          # Full React component (~33KB)
├── data/
│   ├── users.table      # User accounts schema + seed data
│   └── posts.table      # Posts schema + seed data
│   └── comments.table   # Comments schema
│   └── follows.table     # Follows schema
└── README.md
```

---

## 🔛 LINKS

- Full source on GitHub: [github.com/ilivrightnow-cell/Lilac](https://github.com/ilivrightnow-cell/Lilac)
- Zaro: [zaro.ai](https://zaro.ai)

---

> *"In a garden of lies, the lilac is the only flower that tells the truth.*  
— The Bloom manifesto, final transmission
