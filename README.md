# EasyASTA (fresh start)

This repository contains a minimal Next.js 13 project configured for the EasyASTA visa assistance platform. The goal is to provide a clean starting point free from previous deployment issues. The project includes:

- **Next.js 13 app directory** with TypeScript support
- Tailwind CSS with a red white blue palette and a simple hero section
- Static assets including a US landmark silhouette
- Basic `getDictionary` helper for future internationalisation
- Strict security headers defined in `next.config.js`

## Getting Started

1. Install dependencies with `npm install` (requires Node.js 18+).
2. Run the development server with `npm run dev`.
3. Build and start in production with `npm run build && npm start`.

You can extend this base by adding the multi‑step apply wizard, payment integrations (Stripe/PayPal), and multilingual routes according to the project specification.
