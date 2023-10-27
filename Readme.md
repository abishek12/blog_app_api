# NodeJS Blog Api Backend

## About Project

The Blog Application Backend API is a robust and scalable web service designed to power a modern and feature-rich blogging platform. This API includes essential functionalities like user authentication, blog post management, user interactions such as liking and commenting on posts, and more. It serves as the foundation for the entire blogging application, providing the necessary infrastructure to create, manage, and engage with blog content.

## Installation

To install this project run

```bash
  git clone https://github.com/abishek12/blog_app_api.git
```


```bash
  cd blog_app_api
```

```bash
  npm install
```

```bash
  nodemon
```

To setup database open terminal and run

```bash
  mysql -u root -p
```

Now, go to query.sql in the file and run query


## Setup .env

Create .env file in root directory

```bash
  apiVersion = api/v1
  baseUrl = http://localhost
  port = 3000
```

Database configuration
```bash
  db_user = root
  db_pass = ['database password']
  db_host = localhost
  db_name = blog
```
secret key
```bash
  secretKey = ['add_your_key']
````