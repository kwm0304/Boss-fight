//**Need to look up es6 syntax for 3js */
const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// const sequelize = require("./config/connection")

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('node_modules'));


//Connect to db
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'cards'
//     },
//     console.log('Connected to cards db')
// );

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/login.html'));
  });

//'Not found' 'Catch all'
app.use((req, res) => {
    res.status(404).end();
})

//Starts server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });