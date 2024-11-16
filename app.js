const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3002;  // Changed to 3002
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});