# Static immigration resource landing page

## Build
- Replace the `/` placeholder with the supplied one-page affiliate bridge page: trust strip, offer, problem overview, bundle contents, community perspectives, guarantee, and disclosures.
- Use a mobile-first navy, white, slate, amber, and green visual system with system fonts, inline icons, and CSS-only artwork; no remote imagery, APIs, forms, or dynamic data.
- Keep every purchase link pointed to the exact supplied affiliate URL and open safely in a new tab.
- Add route-specific page metadata and keep the page on `/` only.

## Static hosting
- Enable prerendering for `/` only and disable route auto-discovery, so the page can be deployed as static output without app-specific server features.
- Keep the existing TanStack/Vite project setup and verify the static output/build signals; Cloudflare Free Tier availability and deployment settings remain subject to the account and hosting configuration.

## Technical notes
- Use the existing Tailwind v4 tokens and semantic component styles; add only required palette tokens.
- Avoid unverified fabricated testimonials or legal-success guarantees; use the supplied story themes as non-quoted community scenarios and retain educational/affiliate disclosures.
