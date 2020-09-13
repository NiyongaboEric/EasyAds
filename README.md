[![Build Status](https://travis-ci.org/NiyongaboEric/EasyAds.svg?branch=develop)](https://travis-ci.org/NiyongaboEric/EasyAds) [![Test Coverage](https://api.codeclimate.com/v1/badges/e46595e319f7557cd0dc/test_coverage)](https://codeclimate.com/github/NiyongaboEric/EasyAds/test_coverage) [![Coverage Status](https://coveralls.io/repos/github/NiyongaboEric/EasyAds/badge.svg?branch=develop)](https://coveralls.io/github/NiyongaboEric/EasyAds?branch=develop)

# EasyAds
Easy Ads is an online marketplace for selling the stuff you don’t need anymore. With Easy Ads, users should be able to post stuff such as Clothing, Cameras, Furniture, Cars, and Phones.

### Connect database url format
> postgresql://user:password@host:5432/dbname

### Tools used for the backend
- Server side framework: Node/express
- Linting Library: ESLint
- Style Guide: Airbnb
- Testing framework: Jest
- Database: PostgreSql
- ORM: Sequelize
- Language: Javascript

### Deployment and Accessibility
The api built are deployed and available on [Heroku](https://easyadapp.herokuapp.com/)

### Do you have issue with dependencies?
> heroku config:set NPM_CONFIG_PRODUCTION=true -a your-app-name


### API Authentication

If you use tools like `Postman` or `Insomnia`. The following endpoint request token and should be passed in the headers.

 ```
  `post` request
  `/add-product` route
```

> We assume you are using Authorization `Bearer` token. Otherwise, you are not granted to access the resources.

### Image Upload
At the time of designing API, Whenever a user is going to add new product images are being uploaded on my cloudinary image cloud service hosting.
