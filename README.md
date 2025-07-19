# bknd starter: Cloudflare Workers
A minimal Node.js project with bknd integration.

## Project Structure

Inside of your Node.js project, you'll see the following folders and files:

```text
/
├── src/
│   └── index.ts
├── package.json
└── wrangler.json
```

To update `bknd` config, check `src/index.ts`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                   |
|:------------------|:---------------------------------------------------------|
| `npm install`     | Installs dependencies                                    |
| `npm run dev`     | Starts local dev server with `watch` at `localhost:53384` |
| `npm run typegen` | Generates wrangler types                                 |

## Before you deploy
If you're using a D1 database, make sure to create a database in your cloudflare account and replace the `database_id` accordingly in `wrangler.json`.

```sh
npx wrangler d1 create my-database
```

## Want to learn more?

Feel free to check [our documentation](https://docs.bknd.io/integration/cloudflare) or jump into our [Discord server](https://discord.gg/952SFk8Tb8).
