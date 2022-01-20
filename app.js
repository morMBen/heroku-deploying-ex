const express = require('express');
const app = express();

const path = require('path');

const port = 5000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'client/build');

// Setup static directory to serve
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(publicDirectoryPath));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log('Server running on port + ' + port);
});
