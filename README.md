
# Getting Started
<sub><sup>forked from [timcash/lesson3](https://github.com/timcash/lesson3)

Install the dependencies:
```
npm install
#or
yarn install
```

Change the name of `env_example` to `.env.local`.
Do not push this file to github because it has a token for the database in it.
`.env.local` is already in the `.gitignore` file. 
```
mv env_example .env.local
```

Fill out and save the `.env_local` with values from `pscale` for each `''`:
```
export PLANETSCALE_TOKEN=''
export PLANETSCALE_TOKEN_NAME=''
export PLANETSCALE_ORG=''
export PLANETSCALE_DB=''
```

Next source the .env.local to your shell / terminal
```
source .env.local
```

Verify the values are in your `env`
```
env | grep PLANET
```

Run the development server:
```bash
npm run dev
# or
yarn dev
```
#
<sup> Restart server: <br> 
```
control+C
```
```
source .env.local
```
```
env | grep PLANET
```
```
npm run dev 
#or 
yarn dev
```
#

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
#
## Other various setups

Convert a **local directory** into a **repository**. In working directory run:
``` 
git init 
```

Rename branch from master to main:
```
git branch -m master main
```

Clone a repository. In working directory, clone repo:
```
git clone https://github.com/patree-code/database-lesson3.git
```
#
## MySQL

Connect to the database. Open a MySQL shell instance to the given database and branch:
```
pscale shell chromadb main
```

Remove rows with no date or date `IS NULL` from table:
```
DELETE FROM events WHERE created_at IS NULL;
```

```
SHOW TABLE;
```

```
SELECT * FROM events;
```

Examples of table:
```
+----------+-----------------+------------+
| event_id | title           | created_at |
+----------+-----------------+------------+
|        2 | My Second Event | 2021-11-29 |
|        3 | My Third Event  | 2021-11-29 |
|        4 | My Fourth Event | 2021-11-29 |
|        5 | My Fourth Event | 2021-11-29 |
|        6 | My Fourth Event | 2021-11-29 |
|        7 | My Fourth Event | 2021-11-29 |
+----------+-----------------+------------+
```

Creates a table
```
CREATE TABLE `events` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255),
    `description` varchar(255),
);
```

Deletes or creates a table from the database

```
mysql> drop database [database name];       -- deletes
mysql> create database [database name];     -- creates
```

Adds values to table or creates rows
```
INSERT INTO `events` (id, name, description) VALUES
(1, 'Event 1', 'Description 1'),
(2, 'Event 2', 'Description 2'),
(3, 'Event 3', 'Description 3');
```

<sub> See [timcas/database_lesson1](https://github.com/timcash/database_lesson1/blob/master/main.sql) for more on databases
#