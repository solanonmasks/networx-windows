# Networx Windows & More website

A one-page website for **Networx Windows & More**, a windows, doors and exteriors company with a showroom at 27250 58 Crescent, Langley BC.

It's built with [Astro](https://astro.build), which turns the files in `src/` into a plain, fast HTML page. There's no database and no server code.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads by itself when you save a file. Press `Ctrl + C` in the terminal to stop it.

To build the final site (goes into the `dist/` folder):

```bash
npm run build
```

## Where to change things

| What you want to change | File |
| --- | --- |
| Phone, email, address, hours, social links | `src/data/site.js` (the `business` section) |
| Services, projects, reviews, stats, form buttons | `src/data/site.js` |
| Photos and logo | `src/data/site.js` (the image links) |
| Colours and fonts | top of `src/styles/global.css` |
| Page layout / headings | `src/pages/index.astro` |

Most edits only need `src/data/site.js`.

## Put it online with Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects **Astro** by itself. Leave the defaults and click **Deploy**.
4. Every time you push to `main`, Vercel updates the live site.

## Make the contact form send emails

Right now the form just shows the thank-you message and **doesn't send anything**.

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy its URL (it looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `formEndpoint` at the top of `src/data/site.js`:
   ```js
   export const formEndpoint = 'https://formspree.io/f/abcdwxyz';
   ```
4. Push the change. Messages will now arrive in your Formspree inbox/email.

## Open items before launch

- [ ] **Download the photos and logo.** They're currently linked straight from `networxwindowsandmore.com/images/`. Save them into `public/images/` and change the links in `src/data/site.js` to `/images/your-file.jpg`. Otherwise the site breaks if the old site goes offline.
- [ ] **Hook up the contact form** (see above).
- [ ] Add a social-sharing image (1200×630) if you want a nicer preview on Facebook etc. It currently uses the hero photo.
- [ ] Point the domain `networxwindowsandmore.com` at Vercel once you're happy.

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

- See the history: `git log --oneline`
- Undo one commit (makes a new commit that reverses it, safe to push):
  ```bash
  git revert <commit-id>
  ```
- Throw away edits you haven't committed yet: `git checkout -- <file>`
