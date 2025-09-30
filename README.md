## Solace Candidate Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

## Database set up

The app is configured to return a default list of advocates. This will allow you to get the app up and running without needing to configure a database. If you’d like to configure a database, you’re encouraged to do so. You can uncomment the url in `.env` and the line in `src/app/api/advocates/route.ts` to test retrieving advocates from the database.

1. Feel free to use whatever configuration of postgres you like. The project is set up to use docker-compose.yml to set up postgres. The url is in .env.

```bash
docker compose up -d
```

2. Create a `solaceassignment` database.

3. Push migration to the database

```bash
npx drizzle-kit push
```

4. Seed the database

```bash
curl -X POST http://localhost:3000/api/seed
```


Missed PRs for first 3 commits
Initial commit -e5a3493
changes
-Added SearchTerm state it replaced he DOM manipulation
-Removed InnerHTMP now uses SearchTerm
-Added search term to the input
-reset clears search term
-fixed specialty filtering
-fixed case sensitive searching
-added keys

commit d09a142
-cleaned up the UI
-used the solace website to create a page that mimics the same styling
-separated the components to reusable individual ones

commit 3fba008
-fixed import error

Last PR for the backend shown in repo