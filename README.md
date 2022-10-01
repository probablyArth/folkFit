# FolkFit

_where healthy minds connect_

## Tech Stack

- NextJs
- Prisma
- Next-Auth with Google Provider
- Tailwind CSS and Mantine UI
- Yarn package manager

## Developing

- Install the dependencies

```
yarn
```

- add `.env`

```
nano .env
```

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/fitfolk

# Next Auth
NEXTAUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000

# GOOGLE AUTH
GOOGLE_CLIENT_ID=<your google client id>
GOOGLE_CLIENT_SECRET=<your google client secret>
```

- Run the development server

```
yarn dev
```

#### Google Client

- Create a web app from [Google Cloud Console](https://console.cloud.google.com/).
- Add `http://localhost:3000` in Authorized JS origins
- Add `http://localhost:3000/api/auth/callback/google` in Authorized redirect URIs
- Copy the credentials
