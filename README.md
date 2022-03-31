# Microservices demo with nestJS

Create file `.env` and copy the contents of `.env.example` in it. Then, run `docker-compose up` to start the services.

## Using the API

Try the api by creating an item object and a bar object.

## Create item

Send a POST request to `http://localhost:3000/items` with the body

```
{
  "name": "item 1"
}
```

You should get the stored item back as a response. Get the item by send a GET request to `http://localhost:3000/items/<id>`.

## Create bar

Send a POST request to `http://localhost:3000/bars` with the body

```
{
  "name": "bar 1"
}
```

You should get the stored bar object back as a response. Get the item by send a GET request to `http://localhost:3000/bars/<id>`.
