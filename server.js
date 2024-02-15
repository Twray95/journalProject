const path = require("path");
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

//Set up session storage using SequelizeStore
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});

//Set up express to use handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Give access to public assets (css, js, images)
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
