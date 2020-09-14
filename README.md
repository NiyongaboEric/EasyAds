[![Build Status](https://travis-ci.org/NiyongaboEric/EasyAds.svg?branch=develop)](https://travis-ci.org/NiyongaboEric/EasyAds) [![Maintainability](https://api.codeclimate.com/v1/badges/e46595e319f7557cd0dc/maintainability)](https://codeclimate.com/github/NiyongaboEric/EasyAds/maintainability) [![Coverage Status](https://coveralls.io/repos/github/NiyongaboEric/EasyAds/badge.svg?branch=develop)](https://coveralls.io/github/NiyongaboEric/EasyAds?branch=develop)

# EasyAds
Easy Ads is an online marketplace for selling the stuff you don’t need anymore. With Easy Ads, users should be able to post stuff such as Clothing, Cameras, Furniture, Cars, and Phones. 

## Tools used for the backend
- Server side framework: Node/express
- Linting Library: ESLint
- Style Guide: Airbnb
- Testing framework: Jest
- Database: PostgreSql
- ORM: Sequelize
- Language: Javascript

## Deployment and Accessibility
The api built are deployed and available on [Heroku](https://easyadapp.herokuapp.com/)

## Do you have issue with dependencies?
> heroku config:set NPM_CONFIG_PRODUCTION=true -a your-app-name

## Image Handling and Upload
At the time of designing API, Whenever a user is going to add new product images are being uploaded on my cloudinary image cloud service hosting.


## Setting Up The Application

### A. Clone the Application

1. Open your terminal 

2. Run `clone https://github.com/NiyongaboEric/EasyAds.git` OR [Download](https://github.com/NiyongaboEric/EasyAds/archive/develop.zip) the project


### B. Setting up the environment

1. **rename** a `.env.example` to `.env` file

2. Then add the values to all environmental variables in `.env` file
 
3. Install postgres

4. When the server is running, create a database on your new PG server. Ensure your new development database is the same name as your ` easydevdb `  and your test database is the same name as ` easytestdb  ` environment variables

5. Ensure you have Postgres running 

6. Postgres connection string form ```js DATABASE_URL_DEV=postgresql://user:password@host:5432/dbname ```

### B. Running the application

In your terminal:

1. Run `npm install` to install all dependencies

2. For **Testing**: run `npm run test`

3. For **Development**: run `npm run dev`

7. Access ` http://localhost:<:APPLICATION_PORT> ` (by default, the port is `5000`) in Postman, if app is running correctly, you will get a response with a message:

    ```javascript
   { 
       "message": "Welcome to Easy Ads"
   }
    ```

## API Authentication
If you use tools like `Postman` or `Insomnia`. The following endpoint request token and should be passed in the headers.

> We assume you are using Authorization `Bearer` token. Otherwise, you are not granted to access some of the resources.

|     URL     |     HTTP Methods     |     Description     |  Authentication |
| ----------- | -------------------- | ------------------- | --------------- |
| api/v1/auth/signup | POST | Create user account | False |
| api/v1/auth/signin | POST  | Login a user | False |
| api/v1/add-category | POST | Add a category | True |
| api/v1/category | GET |Get all categories | True |
| api/v1/add-product | POST | Add new product | True |
| api/v1/product | GET | Get all products | True |
| api/v1/product/<:id> | GET | Get a specific product | True |
| api/v1/owner-product | GET | Get all owners product | True |
| api/v1/owner-product/<:id>?status="" | PATCH | Mark status as sold | True |
| api/v1/owner-product/<:id>?Price="" | PATCH | Update price of a product | True |
| api/v1/owner-product/<:id> | Delete | Delete a product | True |
