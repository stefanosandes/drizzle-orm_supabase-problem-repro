# Issue with Dizzle ORM and Supabase

This repository is about this issue: https://github.com/drizzle-team/drizzle-orm/issues/2312#event-13469207768

## Reproduction

- Install deps `bun install`
- Rename the .env.example and fill the DATABASE_URL variable with a valid supabase connection string
- Run the push command: `bun drizzle-kit push`
