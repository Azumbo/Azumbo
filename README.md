# Azumbo Website

Viral games with Italian soul 🇮🇹

## Cornetto Clicker

The game is located at `public/cornettoclicker/`.

### Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/cornettoclicker/` to play.

### Deploy to Vercel

1. Push the repo to your GitHub account.
2. Create a new project on [Vercel](https://vercel.com/) and import the repo.
3. Use the default Next.js build settings.
4. After deployment, the game will be available at `/cornettoclicker/` on your Vercel domain.

### Updating assets

Replace files in `public/cornettoclicker/`:
- `logoPucciPane.png` for the logo.
- `sounds/*.mp3` for audio effects and music.

### High score storage

The best completion time is stored in `localStorage` under the key `cornettoBest` in the browser.
