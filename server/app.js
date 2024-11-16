// server/app.js
const express = require("express");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In development, proxy requests from Vite
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
}

// API routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;