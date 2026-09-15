const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");


convertButton.addEventListener("click", function () {

    const inputValue = temperatureInput.value.trim();
    const temperature = parseFloat(inputValue);
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (inputValue === "" || isNaN(temperature)) {
        errorMessage.textContent = "Please enter a valid temperature.";
        clearResults();
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;


    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } else if (unit === "kelvin") {

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }


    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero.";

        clearResults();
        return;
    }


    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";
});


function clearResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}
