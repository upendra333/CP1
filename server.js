const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Remove .html extension middleware
app.use((req, res, next) => {
    // If the request ends with .html, redirect to the clean URL
    if (req.path.endsWith('.html')) {
        const cleanPath = req.path.replace(/\.html$/, '');
        return res.redirect(301, cleanPath);
    }
    
    // If the request doesn't have an extension and the file exists with .html
    if (!path.extname(req.path) && req.path !== '/') {
        const htmlPath = path.join(__dirname, req.path + '.html');
        const fs = require('fs');
        if (fs.existsSync(htmlPath)) {
            return res.sendFile(htmlPath);
        }
    }
    
    next();
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other routes
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.path + '.html');
    const fs = require('fs');
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Page not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Clean URLs enabled - .html extensions are hidden');
}); 