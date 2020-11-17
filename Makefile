up_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet npm run migrate up

down_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet npm run migrate down

test_up_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet__test npm run migrate up

test_down_migrate:
	DATABASE_URL=postgres://dockerdev:dockerdev@localhost:5432/socnet__test npm run migrate down
