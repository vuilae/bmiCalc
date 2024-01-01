# BMI Calculator Project

## Description

This project is a BMI (Body Mass Index) calculator web application. It allows users to input their age, gender, unit of measurement (metric or imperial), height, and weight. The application calculates and displays their BMI along with an interpretation of the result.

## Features

- Calculates BMI based on user input.
- Provides an interpretation of the BMI result (e.g., underweight, normal weight, overweight, obese).
- Dynamically updates the background color of the result container based on the BMI interpretation.
- Responsive design for a user-friendly experience.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS (Bootstrap for styling)
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js

## File Structure

The project is structured to provide organization and maintainability. Here's a high-level overview of the main directories and files:

- **public/**: Contains public assets and client-side JavaScript.
  - `bmiCalculator.js`: Client-side JavaScript for DOM.
  - `styles.css`: CSS styles for the application.
  - `navbar.js`: JavaScript code to add appropriate CSS.
  - `images/`: Directory for images.

- **routes/**: Houses Express.js route handlers.
  - `routeManager.js`: Main route handler.
  - `bmiRoutes.js`: Route handler for BMI calculations(/bmicalculator).
  - `homeRoutes.js`: Route handler for Home(/).
  
- **views/**: Contains HTML views for different pages.
  - `homePage.html`: HTML for the home page.
  - `bmiCalculator.html`: HTML for the BMI Calculator page.
  - **shared/**: Reusable HTML components shared across multiple pages.
    - `header.html`: HTML for the header component.
    - `footer.html`: HTML for the footer component.
   
## Installation and Running Server

1. Clone the repository:

   ```bash
   git clone -b master https://github.com/vuilae/bmiCalc/

2. Run the Server:

   ```bash
   nodemon server.js
   
## Dependencies

The following Node.js packages are used as dependencies in this project:

- **express** (^4.18.2)
- **body-parser** (^1.20.2): Middleware for handling incoming HTTP request bodies. It extracts the entire body portion of an incoming request and exposes it on `req.body`.
- **is-valid-json** (^1.0.2): A simple utility to check if a string is valid JSON.

## Author

- **Bakeyeva Darina | SE-2206**
