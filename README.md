# Next.js `output: 'standalone'` copies unused `*.nft.json` files

Minimal reproduction showing that `next build` with `output: 'standalone'` copies build-time `*.nft.json` trace manifests from `.next/server/pages/` and `.next/server/app/` into `.next/standalone/.next/server/`.

## Reproduce

```sh
pnpm install
pnpm run repro
```

Observed output lists `*.nft.json` files inside `.next/standalone/.next/server/`:

- `.next/standalone/.next/server/app/page.js.nft.json`
- `.next/standalone/.next/server/app/_not-found/page.js.nft.json`
- `.next/standalone/.next/server/pages/legacy.js.nft.json`
- `.next/standalone/.next/server/pages/_app.js.nft.json`
- `.next/standalone/.next/server/pages/_document.js.nft.json`
- `.next/standalone/.next/server/pages/_error.js.nft.json`

Nothing in `next/dist/server/` reads `.nft.json` at runtime. In large apps with hundreds of routes, these unused manifests can exceed 500 MB (over half of uncompressed `.next/standalone`).
