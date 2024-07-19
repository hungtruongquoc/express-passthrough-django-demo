require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Setup Morgan for HTTP request logging
app.use(morgan('combined'));

const apiProxy = createProxyMiddleware({
    target: process.env.TARGET_URL,
    changeOrigin: true,
    logLevel: 'debug', // Enable debug level logging
    logProvider: () => console // Use the console for logging
});

app.use('/', apiProxy);

app.get('/', (req, res) => {
    res.send('Proxy server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
