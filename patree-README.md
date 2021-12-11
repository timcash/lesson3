# Additional setup notes
<sub><sup>source: [timcash/lesson3](https://github.com/timcash/lesson3)

MySQL: cleans table ('events')
- removes all rows with no date or date `IS NULL`

```
DELETE FROM events WHERE created_at IS NULL;
```

Start git
```
git init 
```

Rename branch from master to main
```
git branch -m master main
```

Clone a repository
- in working direcotry, clone repo
```
git clone https://github.com/patree-code/database-lesson3.git
```

#
## Getting Started

- Install the dependencies:
```
npm install
#or
yarn install
```

- Change the name of `env_example` to `.env.local`.
Do not push this file to github because it has a token for the database in it.
`.env.local` is already in the `.gitignore` file. 
```
mv env_example .env.local
```

- Fill out and save the `.env_local` with values from `pscale` for each `''`:
```
export PLANETSCALE_TOKEN=''
export PLANETSCALE_TOKEN_NAME=''
export PLANETSCALE_ORG=''
export PLANETSCALE_DB=''
```

- Next source the .env.local to your shell / terminal
```
source .env.local
```
Verify the values are in your `env`
```
env | grep PLANET
```

- Run the development server:
```bash
npm run dev
# or
yarn dev
```

- <sub><sup>Restart server `control+C` and:
    ```
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
#
## Next Section