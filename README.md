# Cosmoscope

A responsive Cosmos Hub explorer for following network activity without leaving the browser.

**Live demo:** [cosmoscope.vercel.app](https://cosmoscope.vercel.app)

## Features

- Current ATOM market information and historical price chart
- Latest blocks and transactions
- Search by block height or transaction hash
- Block and transaction detail pages
- Validator and governance proposal views
- Responsive layouts for desktop and mobile

## Technical highlights

Cosmoscope is a React and TypeScript single-page application built with Vite. It reads Cosmos Hub data from a REST provider, obtains market data from CoinGecko, renders charts with Tremor, and uses React Router for explorer-style navigation.

Search values with 64 characters are treated as transaction hashes; other non-empty values are treated as block heights. API helpers centralize provider authentication and surface unsuccessful HTTP responses to the page-level error handling.

## Run locally

Requirements:

- Node.js 20+
- npm
- An All That Node API key
- A CoinGecko demo API key

```sh
git clone https://github.com/MargeryOlethea/Cosmoscope.git
cd Cosmoscope/front-end
cp .env.example .env.local
npm ci
npm run dev
```

Set these values in `.env.local`:

```dotenv
VITE_ALL_THAT_NODE_API_KEY=your_all_that_node_api_key
VITE_COIN_GECKO_API_KEY=your_coin_gecko_demo_api_key
```

Open [http://localhost:5173](http://localhost:5173).

## Quality checks

```sh
npm run lint
npm run build
```

GitHub Actions runs both checks for pull requests and pushes to `main`.

## Project status

I built Cosmoscope on my own. It is read-only, and availability depends on third-party Cosmos and market-data providers, which may enforce rate limits or change their public endpoints.
