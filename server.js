const path = require("path");
const express = require("express");
  //  HANDLEBARS
const exphbs = require("express-handlebars");
  //  SESSION
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
  //  CONTROLLER
const routes = require("./controllers");
  //  SEQUELIZE
const sequelize = require("./config/connection");
const helpers = require("./util/helpers");
  //  SERVER
const app = express();
const PORT = process.env.PORT || 3001;

  //  SESSION SETUP
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({ helpers });

  //  SET HANDLEBARS AS RENDERER
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

  //  MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sess));

  //  CONTROLLER
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});