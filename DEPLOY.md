# FDGC Website – Deployment Guide

## Build (already done)
```bash
npm run build
```

## Run Production Server
```bash
npm start
```
Runs on `http://127.0.0.1:3001` by default.

### Change Port
Edit `package.json` scripts or run:
```bash
PORT=3000 npm start
```

### Production Host
For public access, bind to `0.0.0.0`:
```bash
npx next start -H 0.0.0.0 -p 3000
```

## Environment Variables (optional)
- `COINMARKETCAP_API_KEY` – For live metrics from CoinMarketCap. Without it, fallback data is used.
- Copy `.env.example` to `.env.local` and add your API key.

## Server Setup (Node.js)
1. `git push` your code
2. On server: `git clone` → `npm install` → `npm run build` → `npm start`
3. Use PM2, systemd, or reverse proxy (nginx) for process management

## Static Export (alternative)
For static hosting (Vercel, Netlify, S3), the app uses server-side API routes. Use a Node.js-compatible host, or switch the metrics to client-side fetch only.
