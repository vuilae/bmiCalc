document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.getElementById("bmiForm");
  const resultContainer = document.getElementById("resultContainer");
  const bmiResult = document.getElementById("bmiResult");
  const interpretation = document.getElementById("interpretation");

  bmiForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const unit = document.getElementById("unit").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
      // Remove previous background color class(colors are in styles.css)
      resultContainer.classList.remove(
        "underweight",
        "normal-weight",
        "overweight",
        "obese"
      );

      // Send a POST request to "/bmi" endpoint
      try {
        const response = await fetch("/bmicalculator", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            age,
            gender,
            unit,
            height,
            weight,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const responseData = await response.json();

        // Check if the expected properties are present in the response data
        if (
          responseData &&
          responseData.bmi !== undefined &&
          responseData.interpretation !== undefined
        ) {
          // Apply the background color class to resultContainer
          resultContainer.classList.add(responseData.bgColorClass);
          console.log(resultContainer.classList);

          resultContainer.style.display = "block";
          bmiResult.textContent = `Your BMI is: ${responseData.bmi}`;
          interpretation.textContent = `Interpretation: ${responseData.interpretation}`;
        } else {
          throw new Error("Invalid server response format");
        }
      } catch (error) {
        console.error("Error fetching BMI data:", error.message);
      }
    } else {
      alert("Please enter valid numbers for age, height, and weight.");
    }
  });
});
