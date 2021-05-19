# Development Challenge for Node.js 

**HTTP REST API**

I used the structure of **[express-generator](https://expressjs.com/en/starter/generator.html)**

It is to quickly create an application skeleton, but it was modified a little because this is an API

## Steps

Clone this repository

		# Using GithubCLI
		gh repo clone norbix14/httprestapi

Install dependencies

		npm i

## Use

Run development mode (compile Typescript)

		npm run development

Run server (compiled)

		npm start

Server: **http://localhost:4000**

Entry point: **/api/v1/improvein**

## Paths

**Login**

* Login: **POST /login**. Example:
		
		# In the body of the request
		{
			"email": "email@mail.com",
			"password": "password"
		}

**Jwt**

* Refresh token: **POST /jwt/refresh**

		# In the body of the request
		{
			"email": "email@mail.com"
		}

**Movies**

* Get all the movies: **GET /movies**
* Get a movie **GET /movies/:query**. Example: **/movies/name=titanic**
* Add a new movie **POST /movies**

**Tv Shows**

* Get all the tv shows: **GET /tvshows**
* Get a tv show **GET /tvshows/:query**. Example: **/tvshows/name=tvshow&episode=1**
* Add a new tv show **POST /tvshows**

## Environment

In the `.env` file:

		# MongoDB URI
		URI_MONGODB="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"

		# App port
		PORT="4000"

		# JSONWebToken secret
		JWT_SECRET="somesecretkey"

## Linters

[JsHint](https://jshint.com/docs/options/)
