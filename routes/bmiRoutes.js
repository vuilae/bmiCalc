const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const isValidJson = require("is-valid-json");


const calculateBMI = (age, gender, unit, height, weight) => {
  let bmi;

  const ageFactor = age >= 50 ? 1.1 : 1.0; //adults over 50 might have a slightly higher BMI
  const genderFactor = gender === "female" ? 0.95 : 1.0; //females might have a slightly lower BMI

  // Convert height and weight to metric units if in imperial
  const heightInMeters = unit === "imperial" ? height * 0.0254 : height / 100;
  const weightInKg = unit === "imperial" ? weight * 0.453592 : weight;

  bmi =
    (weightInKg / (heightInMeters * heightInMeters)) * ageFactor * genderFactor;
  let interpretation;
  let bgColorClass = "";

  if (bmi < 18.5) {
    interpretation = "Underweight";
    bgColorClass = "underweight";
  } else if (bmi < 24.9) {
    interpretation = "Normal Weight";
    bgColorClass = "normal-weight";
  } else if (bmi < 29.9) {
    interpretation = "Overweight";
    bgColorClass = "overweight";
  } else {
    interpretation = "Obese";
    bgColorClass = "obese";
  }

  return { bmi: bmi.toFixed(2), interpretation, bgColorClass };
};


router.get("/", (req, res) => {
  const bmiPagePath = path.join(__dirname, "..", "views", "bmiCalculator.html");
  const headerPath = path.join(__dirname, "..", "views", "shared", "header.html");
  const footerPath = path.join(__dirname, "..", "views", "shared", "footer.html");

  const header = fs.readFileSync(headerPath, "utf-8");
  const footer = fs.readFileSync(footerPath, "utf-8");
  const content = fs.readFileSync(bmiPagePath, "utf-8");

  res.send(header + content + footer);
});



router.post("/", (req, res) => {
  // Check if the request body is valid JSON
  if (!isValidJson(req.body)) {
    return res.status(400).json({
      error: "Invalid JSON format in the request body.",
    });
  }

  const { age, gender, unit, height, weight } = req.body;

  // Check if age, height, and weight are valid numbers
  if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
    const result = calculateBMI(age, gender, unit, height, weight);

    // Send BMI result and interpretation along with appropriate messages
    res.json({
      bmi: result.bmi,
      interpretation: result.interpretation,
      bgColorClass: result.bgColorClass,
    });
  } else {
    res.status(400).json({
      error:
        "Invalid input. Please enter valid numbers for age, height, and weight.",
    });
  }
});

module.exports = router;