const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  const bmiPagePath = path.join(__dirname, "..", "views", "homePage.html");
  const headerPath = path.join(__dirname, "..", "views", "shared", "header.html");
  const footerPath = path.join(__dirname, "..", "views", "shared", "footer.html");

  const header = fs.readFileSync(headerPath, "utf-8");
  const footer = fs.readFileSync(footerPath, "utf-8");
  const content = fs.readFileSync(bmiPagePath, "utf-8");

  res.send(header + content + footer);
});

module.exports = router;
