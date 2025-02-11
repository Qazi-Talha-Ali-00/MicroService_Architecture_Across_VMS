const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

app.get('/api/greeting', (req, res) => {
    console.log("hello");
    res.json({"message": "Hello from the greeting microservice hosted on VM-viraj" });
});

app.listen(port, () => {
    console.log(`Microservice running on port ${port}`);
});