# AGENTS.md

## Quick start
- Use `npm` in this repo (`package-lock.json` is present; no pnpm/yarn workspace config).
- Toolchain is Vite 6 + esbuild 0.25 (lockfile), so use Node.js 18+.
- Install deps: `npm install`.
- Dev server: `npm run dev` (binds to `0.0.0.0:3000` via `vite.config.js`, not Vite's default port).
- Build: `npm run build` (outputs to `dist/`).
- Preview build: `npm run preview`.
- `package.json` has no lint/test/typecheck scripts; do not assume `npm test`/`npm run lint` exist.

## Source-of-truth files
- Edit app code in `src/` and root config (`vite.config.js`, `index.html`, `package.json`).
- Do not hand-edit `dist/` (build output) or `node_modules/`.

## Runtime wiring
- Entry chain: `index.html` -> `src/main.js` -> `src/App.vue`.
- `src/App.vue` is the orchestrator: it creates `GameEngine`, `AudioManager`, `GyroscopeInput`, `NailongController`, and `GameStateManager`, then runs/stops the main `requestAnimationFrame` loop.
- `src/components/` is UI/HUD; gameplay and platform behavior live in `src/game/*.js`.

## Easy-to-break behavior
- Keep `GyroscopeInput.requestPermission()` as the first awaited action in `handleStart` (`src/App.vue`) for iOS sensor permission flow.
- `GyroscopeInput` intentionally enables mouse/touch fallback and only switches to gyro after receiving valid `deviceorientation` data.
- Hit detection uses an invisible sphere collider in `GameEngine` (`nailongCollider`); there is no visible enemy mesh in the Three.js scene.
- Hard mode depends on both `NailongController.getPositionHistory()` and `GameEngine.updateAfterimages()`; changing one side without the other breaks afterimages.
- Best score persistence key is `localStorage['kill_nailong_best']`.

## Assets
- Media assets are imported from `src/assets/` with Chinese filenames; keep paths exact when moving/renaming files.
