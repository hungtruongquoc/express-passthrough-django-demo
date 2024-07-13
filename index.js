require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const apiProxy = createProxyMiddleware({
    target: process.env.TARGET_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/v1': '/api/v1',
    },
});

app.use('/api/v1', apiProxy);

app.get('/', (req, res) => {
    res.send('Proxy server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
