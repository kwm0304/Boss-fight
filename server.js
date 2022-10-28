//**Need to look up es6 syntax for 3js */
const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars')
const routes = require('./routes/index');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// app.use(`/script`, express.static(__dirname + `./node_modules/gsap/`));


//Connect to db
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'Puasboi155.',
//         database: 'cards'
//     },
//     console.log('Connected to cards db')
// );

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/html/login.html'));
});

// app.get('/gsap', (req, res) => {
//   res.sendFile(path.join(__dirname, './node_modules/gsap/all.js'));
// });


// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT,  () => console.log('Now listening'));
});

//'Not found' 'Catch all'
app.use((req, res) => {
    res.status(404).end();
})

//Starts server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });