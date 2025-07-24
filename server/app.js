const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { db, initDB } = require('./db');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'osint-secret', resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '../public')));

initDB();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../views/login.html')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (row) {
      req.session.user = row;
      res.redirect('/dashboard');
    } else {
      res.send('Login failed');
    }
  });
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
