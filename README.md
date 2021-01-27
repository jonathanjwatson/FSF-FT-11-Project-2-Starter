# FSF-FT-11-Project-2-Starter

## Initial App Setup

1. `touch server.js`
2. `npm init -y`
3. `npm install express express-handlebars mysql2 sequelize`

_Optional_ 4. `npm install nodemon` 5. Create a watch script and add it to the package.json

```javascript
    "watch": "nodemon server.js"
```

## Create Express Server

1. Require express
2. Create an instance of express
3. Create a PORT
4. Listen on the PORT
5. Add middleware

```javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
```

6. Create routes

## Add Handlebars

1. Require express-handlebars
2. Configure express-handlebars in the server.

```javascript
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

3. Create the folder structure `/views/layouts/main.handlebars`
4. Add boilerplate to the main.handlebars with a `{{{body}}}`

_Optional_ 5. Creating an index.handlebars for your homepage. 6. Adding a root get route to render the home page. 7. Add a CSS library.

## Setup Sequelize

1. Run `sequelize init:config & sequelize init:models` (Confirm when you see the config and models directories.)
2. Create a `schema.sql` file to store your new database creation queries.
3. Run the schema in MySQL Workbench to create the database.
4. Modify `config.json` file with database name and password (for development).
5. Create a model (at least one).
6. Update the server by requiring the db and syncing with sequelize before listening on the PORT.

## Deploy to Heroku

1. Run `heroku create`
2. Provision JawsDB on Heroku
3. Change the `config.json` for production to use the environment variable provided by JawsDB on Heroku.

```javascript
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
```

## Build a Controller for each Model and add CRUD

**_ SEVEN RESTFUL ROUTES _**

1. View all trains
2. View a single train.
3. View a form to create a new train.
4. View a form to edit a train.
5. API to create a train.
6. API to update a train.
7. API to delete a train.

## Allow Insecure Prototype Access for Handlebars

1. Run `npm install handlebars @handlebars/allow-prototype-access`
2. Go to `server.js` and require these two packages.
3. Update the app.engine with the following code:

```javascript
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
```
