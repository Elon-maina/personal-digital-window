
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql-sfn5.railway.internal',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rAUjZBLADTiksNvEEspQaMJgYuAcmzaz',
  database: 'railway'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      subject VARCHAR(200) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table created or already exists');
    }
  });
});

// Route to handle form submissions
app.post('/api/railway', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error saving message:', err);
      return res.status(500).json({ error: 'Failed to save message' });
    }
    
    return res.status(201).json({ success: true, id: result.insertId });
  });
});

// Route to get all messages
app.get('/api/railway', (req, res) => {
  db.query('SELECT * FROM messages ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
    
    return res.status(200).json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
