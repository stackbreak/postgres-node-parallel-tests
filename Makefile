up_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet npm run migrate up

down_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet npm run migrate down
