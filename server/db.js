const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/osint.db');

function initDB() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT
    )`);
    db.get('SELECT * FROM users WHERE username = "Admin"', (err, row) => {
      if (!row) {
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['Admin', 'Admin1010']);
      }
    });
  });
}

module.exports = { db, initDB };
