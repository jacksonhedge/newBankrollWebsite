const app = require("./app");
const port = process.env.PORT || 3001; // Note: Using 3001 since Vite uses 5173

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});