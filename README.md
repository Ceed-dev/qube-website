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

Currently deployed (Vercel, `gamer-tech-coder` personal account) at:
https://qube-physical-ai.vercel.app

This is **not** yet the production domain. `0xqube.xyz` is live under a
different Vercel account/team with old content ("QUBE | Train AI on Asia")
that this session didn't have access to. To cut over:

1. Either add `0xqube.xyz` as a custom domain to the `qube-physical-ai`
   project in this Vercel account (requires updating the domain's DNS/nameservers
   to point at Vercel), or deploy this repo under whichever Vercel
   account/team currently owns `0xqube.xyz` and add the domain there.
2. Set the Formspree env vars in the new project before/while cutting over,
   so the forms work immediately on the live domain.
