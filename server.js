const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other routes by serving their respective HTML files
app.get('*.html', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

// Start the server
app.listen(PORT, () => {
  console.log(`MCA Study Portal is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
