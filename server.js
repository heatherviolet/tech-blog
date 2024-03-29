const express = require('express');
<<<<<<< HEAD
const routes = require('./controllers');
=======
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
>>>>>>> develop
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;
=======
const PORT = process.env.PORT || 3000;


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
>>>>>>> develop

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
=======


>>>>>>> develop
// turn on routes
app.use(require('./controllers'));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});