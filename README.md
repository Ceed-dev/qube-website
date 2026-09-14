# Qube Website

Marketing site for Qube — India's physical AI data collection company.
Built per `Qube/projects/website/context.md`. Next.js 14 (App Router) + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Forms

Both forms (`#partner`, `#contributor`) post to Formspree and are wired to read
endpoint URLs from env vars — see `.env.local.example`:

```
NEXT_PUBLIC_FORMSPREE_PARTNER_ENDPOINT=https://formspree.io/f/xxxxxxxx
NEXT_PUBLIC_FORMSPREE_CONTRIBUTOR_ENDPOINT=https://formspree.io/f/yyyyyyyy
NEXT_PUBLIC_CALENDLY_URL=  # optional, falls back to mailto:ldrago@0xqube.xyz
```

Until these are set, submitting either form shows an inline error pointing
people to email ldrago@0xqube.xyz directly — nothing is silently lost.

To wire them up:
1. Create a free account at [formspree.io](https://formspree.io).
2. Create two forms, both delivering to `ldrago@0xqube.xyz`.
3. Copy `.env.local.example` to `.env.local` and paste in the two endpoint URLs.
4. Add the same three variables in the Vercel project's Environment Variables
   settings, then redeploy.

## Deploy

Production: **https://www.0xqube.xyz** (`0xqube.xyz` redirects to `www` with a 308).

Hosted on Vercel under the **Ceed** team, project `qube-website`, connected to
this GitHub repository (`Ceed-dev/qube-website`):

- Push to `main` → automatic production deploy to `www.0xqube.xyz`.
- Push to any other branch / open a PR → automatic preview deploy.
- Fallback production alias: https://qube-website-self.vercel.app

The domain `0xqube.xyz` is registered and DNS-managed in Vercel (Ceed team).
Other subdomains (`quest.`, `web.`, `mod.`, `docs.`, mail records, etc.) belong
to separate projects/services and are unaffected by deploys of this repo.

Environment variables (Formspree / Calendly, see [Forms](#forms)) are set in the
Vercel project's Environment Variables settings — redeploy after changing them.
