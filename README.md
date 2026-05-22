# template-nestjs-vps

Template GitHub per backend NestJS 10 + TypeScript + Node 20, deployato via Docker su VPS `zaknafein.ovh`.

## Stack

| Layer | Tecnologia |
|---|---|
| Framework | NestJS 10 |
| Linguaggio | TypeScript 5.6 |
| Runtime | Node 20 LTS |
| ORM | TypeORM (di default disattivato, lo attivi quando ti serve un DB) |
| Health | `@nestjs/terminus` |
| Test | Jest |
| Container | Docker multi-stage (node:20-alpine, user non-root) |

## Endpoint

- `GET /hello` → "Hello from myapp"
- `GET /health` → JSON status terminus

## Sviluppo locale

```bash
npm install
npm run start:dev
# → http://localhost:3000/hello
```

## Test

```bash
npm test
```

## Attivare il DB

Per default il template non si collega a Postgres (per restare runnable in dev senza dipendenze). Quando ti serve:

1. `src/app.module.ts`: decommenta `TypeOrmModule.forRoot({...})`
2. `src/health.controller.ts`: aggiungi `this.db.pingCheck('database')` al `this.health.check([...])`
3. Crea le entity (`@Entity`), e usa `npm install @nestjs/config` se vuoi gestire config tipata.

Per MongoDB: scambia `@nestjs/typeorm` + `pg` con `@nestjs/mongoose` + `mongoose`. Vedi docs ufficiali.

## Init

```bash
./init-rename.sh <nome-progetto>
```

## Licenza

[MIT](LICENSE)
