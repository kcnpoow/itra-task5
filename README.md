# Music Catalog — Song Generator & Browser

A small full-stack demo that generates and serves fake song data (with localization support) from a Node/Express backend and a React + Vite frontend.

This repository contains a client app (UI) and a lightweight server that produces paginated lists of songs using deterministic seeds so the same seed always yields the same list.

## Key features

- Deterministic song generation from a seed (useful for reproducible results)
- Localization (English / Russian)
- Pagination and simple infinite scroll support
- View modes: grid / list toggling
- Audio player with a placeholder sample
- Seed input + likes filter to influence generated content
- Small, dependency-light Express backend (no database required)

## Tech stack

Frontend
- React 19 + TypeScript
- Vite dev server
- Tailwind CSS
- TanStack Query (data fetching)
- TanStack Table (list/grid display)
- i18next (localization)
- Axios (HTTP client)

Backend
- Node.js + TypeScript
- Express
- @faker-js/faker (data generation)
- CORS

## Project structure (top-level)

```
├── client/      # Frontend application (Vite + React + TS)
├── server/      # Backend (Express + TypeScript) - no DB required
└── README.md
```

Inside `server/src` you'll find controllers, services and a `song-maker` library used to generate songs. The client lives in `client/src` and contains app, features, entities and shared UI.

## Quick start (development)

Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm or yarn

1. Install server dependencies

```bash
cd server
npm install
```

2. Install client dependencies

```bash
cd ../client
npm install
```

3. Start the server (dev)

Open a terminal in `server/` and run:

```bash
cd server
# set CLIENT_URL to your frontend dev url (default below) before starting if you want CORS restricted
export CLIENT_URL=http://localhost:5173
npm run dev
```

Server default: http://localhost:3000

4. Start the client (dev)

Open a new terminal in `client/` and run:

```bash
cd client
# set the backend URL used by the client
export VITE_SERVER_URL=http://localhost:3000
npm run dev
```

Client default: http://localhost:5173

Now open the client URL in your browser.

## Backend API

The server exposes a tiny API used by the frontend.

GET /songs
- Query parameters:
  - `locale` — `en` or `ru` (required)
  - `page` — zero-based page number (required)
  - `seed` — string seed used to deterministically generate songs (required)
  - `likes` — number of likes (required, used to vary generated data)
- Response: JSON array of songs (see models in `server/src/models/song.ts`)

## Environment variables

Server (`server/.env` or exported env vars):
- `PORT` - port for the server (default: 3000)
- `CLIENT_URL` - frontend origin used for CORS (recommended for dev)

Client (`client/.env` or exported env vars):
- `VITE_SERVER_URL` - base URL of the backend API (e.g. http://localhost:3000)