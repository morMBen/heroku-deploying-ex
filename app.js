const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'client/build');

// app.use(cors());
app.use(express.static(publicDirectoryPath));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/users', (req, res) => {
  try {
    res.status(200).send({ userName: 'Bob' });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.get('*', (req, res) => {
  req.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});
app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log('Server running on port + ' + port);
});
