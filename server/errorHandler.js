// server/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    // Log error details
    console.error('Error occurred at:', new Date().toISOString());
    console.error('Request URL:', req.originalUrl);
    console.error('Request Method:', req.method);
    console.error('Error Message:', err.message);
    console.error('Error Stack:', err.stack);
  
    // Send error response
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Internal Server Error',
        status: err.status || 500
      }
    });
  };
  
  module.exports = errorHandler;