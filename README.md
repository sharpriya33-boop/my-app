# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Publish as a static site on Cloudflare Pages

This site contains a single pre-rendered page and does not need a database, API, or server at request time.

1. Run `bun run build`.
2. In Cloudflare Pages, set the build command to `bun run build` and the build output directory to `dist/client`.
3. Deploy the generated files from `dist/client` as a static Pages site.

The root page is configured for build-time prerendering. Cloudflare account limits and plan terms can change, so confirm current Free plan terms in Cloudflare before deployment. A successful preview or build does not create or publish a Cloudflare Pages project automatically.
