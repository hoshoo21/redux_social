const express = require('express');
const path = require('path');
const app = express();
const PORT = 7780;

// Middleware to serve static files from the 'public' directory
// This makes the contents of the public folder accessible directly at the URL root '/'
app.use(express.static(path.join(__dirname, 'public')));

// Simple fallback route (optional)
app.get('/', (req, res) => {
    // Replace 'index.html' with the correct path to your main HTML file
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});