// routeManager.js
const express = require("express");
const router = express.Router();

const homePageRoutes = require("./homeRoutes");
const bmiRoutes = require("./bmiRoutes");

router.use("/", homePageRoutes);
router.use("/bmicalculator", bmiRoutes);

module.exports = router;
