# OUR LOVE, ON REPEAT ♡

A Spotify-inspired (not Spotify-affiliated) birthday experience, built in vanilla JavaScript / Vite. Full source code included.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Visit the address printed by Vite. Other commands:

```bash
npm run build
npm run preview
npm test
```

## Personalize

- Edit **`src/data/config.js`**: `recipient`, `sender`, messages, birthday, anniversary, secret keyword, seven Wrapped lines, love reasons and letter paragraphs. Any sample strings and `GANTI_DENGAN_...` fields are placeholders, not real memories.
- Edit **`src/data/content.js`**: tracks, playlist groupings and memory albums. `trackIds` must match the `tracks` entries' `id` values.
- Add your photos under **`public/images/`**. Use paths such as `/images/first-date.jpg` inside each memory's `images` array. The photo modal supports next/previous navigation and keyboard Escape. Missing photos show designed abstract placeholders.
- Add licensed or self-owned audio files under **`public/audio/`**. Update each track's `src` to `/audio/your-song.mp3`. This project includes four SHORT ORIGINAL SYNTHESIZED DEMO MELODIES (WAV). They are not commercial songs.
- Cover artwork is generated in CSS, so no private or commercial images are required.

## Interaction guide

- Enter via **Enter our world**. Audio is never autoplayed at entry.
- Choose a song, press Play/Pause, Previous/Next, seek, change volume, mute, shuffle and repeat (off → all → one). Player remains mounted across scrolling.
- Playlist cards play their associated track queue.
- Use search for tracks, playlists and memory titles. Favorite tracks using the heart icon.
- Navigate the seven Wrapped cards using the controls, progress indicators or left/right keys in that chapter.
- Unwrap individual love reasons (no repeat until all are seen).
- Find the Secret Track with the keyword in the config (demo hint: `always`). The password is an **Easter egg only**, not security.
- Explore memory modals, birthday finale and love letter. **Replay** returns to the first chapter.
- Volume, favorites, revealed reasons and secret unlock are stored locally when browser storage is available. A user can clear site data to reset progress.

## Architecture

- `src/main.js` — chapter markup, navigation and UI actions
- `src/data/config.js` — personal messages
- `src/data/content.js` — track / playlist / memory data
- `src/audio/AudioManager.js` — one persistent `HTMLAudioElement`, playback events and error handling
- `src/audio/QueueManager.js` — shuffle, repeat and sequential playback
- `src/ui/icons.js` — inline SVG icon library
- `src/ui/helpers.js` — escaping, time formatting, safe storage wrappers
- `src/styles/main.css` — design system, animations, responsive styles
- `tests/` — queue behavior and utilities

## Spotify and audio limitations

This is a fan-made visual experience, **not affiliated with or endorsed by Spotify**. No Spotify branding, undocumented Spotify streams, DRM circumvention, or scraping are used. Regular Spotify page URLs are **not** playable audio file links. Official Spotify embeds, if added separately, have their own playback UI and cannot be assumed to be fully controlled by this custom audio player. External audio servers may disallow playback due to CORS or other access restrictions. The provided demo uses local WAV files to avoid dependence on third-party APIs or logins.

## Known limitations

- Search matches titles only; no full-text content indexing.
- Player supports direct playable URLs/local assets, not official Spotify embeds or OAuth.
- Abstract artwork is a placeholder until personalized.
- Photo swiping by touch is not custom-implemented; on mobile use navigation arrows.
- Long cinematic sequences and WebGL particle scenes were intentionally replaced by lightweight CSS art/transitions to improve performance. No fake audio analyzer is displayed.
- The final project is a static frontend; secret words stored in frontend JavaScript are visible to anyone inspecting source code.
- Audio depends on browser audio codec support and is started only after explicit user action.

## QA

Run `npm test` for automated queue and format tests and `npm run build` to validate production compilation. Browser/device visual testing must be performed separately; do not treat these script checks as proof of mobile performance.
