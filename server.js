const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routeManager = require("./routes/routeManager");
const app = express();

//specifiyng port
const PORT = 3000;

// Use body-parser middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, "views")));

app.use("/", routeManager);

app.listen(PORT, () => {
  console.log(`running at: http://localhost:${PORT}`);
});