# wp-api-surya
Warung Pintar coding test by Surya Surakhman

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them
(Note: Please use yarn instead of npm)

```
NodeJS version 12.6.0
yarn version 1.17.3
```

### Installing

A step by step series get a development env running
To start the server with development environment

```
$ git clone https://github.com/suryakun/wp-api-surya.git
$ cd wp-api-surya
$ wp-api-surya > yarn
$ wp-api-surya > cp src/config/development/dotenv .env
$ wp-api-surya > yarn dev
```

## How to use
To create a new message, simply use this code below
```
POST /v1/messages HTTP/1.1
Host: localhost:8080
Content-Type: application/json
User-Agent: PostmanRuntime/7.17.1
Accept: */*
Cache-Control: no-cache
Postman-Token: d0f0b0c0-293f-4e0d-8547-2e0807d8e85c,10bba1c4-d2fc-461b-8632-7b286197f98a
Host: localhost:8080
Accept-Encoding: gzip, deflate
Content-Length: 29
Connection: keep-alive
cache-control: no-cache

{
"message": "Testing test"
}
```

To get all messages from server, use this code below
```
GET /v1/messages HTTP/1.1
Host: localhost:8080
User-Agent: PostmanRuntime/7.17.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 6ac62c28-2830-4f2c-998a-b130c3b03e9c,c9915154-2ff9-42be-b7dc-affdde090dbd
Host: localhost:8080
Accept-Encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache
```

Connect your websocket to this url `ws://localhost:40510` and it will receive the message that just created
![alt text](https://github.com/suryakun/wp-api-surya/blob/master/blob/socket.png?raw=true)

## Running the tests

This project contains unit test, integration test, and coverage 
### Unit and integration tests

Run this command below

```
yarn test
```
The screen will show the results
![alt text](https://github.com/suryakun/wp-api-surya/blob/master/blob/test.png?raw=true)

### Coverage tests

Run this command below

```
yarn coverage
```
The screen will show the results
![alt text](https://github.com/suryakun/wp-api-surya/blob/master/blob/coverage.png?raw=true)


## Documentation

You can see the documentation by open this url `http://localhost:8080/api-docs`
![alt text](https://github.com/suryakun/wp-api-surya/blob/master/blob/swagger.png?raw=true)

Cheers
