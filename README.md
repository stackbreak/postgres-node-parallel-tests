# Sample CRUD with parallel isolated tests.

```sh
# start pg container
docker-compose up
```

```sh
# dev migrations
make up_migrate
make down_migrate

# test migrations (only for check, no need to run)
make test_up_migrate
make test_down_migrate
```

```sh
# start server
npm run start

# run all tests
npm run test
```
