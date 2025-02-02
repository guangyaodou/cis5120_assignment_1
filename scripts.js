// script.js

// Default temperature in Fahrenheit
let currentTemperature = 68; // Example default temperature
let isFahrenheit = true; 
 
document.addEventListener("DOMContentLoaded", function () {
    updateTemperatureDisplay();
});

function toggleTemperature() {
    isFahrenheit = !isFahrenheit;
    updateTemperatureDisplay();
}

function updateTemperatureDisplay() {
    let unitSpan = document.getElementById("unit");
    let tempDisplay = document.getElementById("convertedTemp");

    if (isFahrenheit) {
        unitSpan.innerText = "Celsius";
        tempDisplay.innerText = `Temperature: ${currentTemperature} °F`;
    } else {
        let celsiusTemp = ((currentTemperature - 32) * 5 / 9).toFixed(2);
        unitSpan.innerText = "Fahrenheit";
        tempDisplay.innerText = `Temperature: ${celsiusTemp} °C`;
    }
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    if (fahrenheit !== "") {
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        document.getElementById("convertedTemp").innerText = `Converted: ${celsius} °C`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initializeCheckboxes();
});

function initializeCheckboxes() {
    document.getElementById("humidity").style.display = "none";
    document.getElementById("wind").style.display = "none";
    document.getElementById("uv").style.display = "none";

    document.getElementById("humidityCheckbox").checked = false;
    document.getElementById("windCheckbox").checked = false;
    document.getElementById("uvCheckbox").checked = false;
}

function toggleModule(moduleId) {
    let module = document.getElementById(moduleId);
    let checkbox = document.getElementById(moduleId + "Checkbox");
    
    module.style.display = checkbox.checked ? "block" : "none";
}

function showTooltip(event, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerText = text;
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = (event.pageY - 30) + "px";
}


function hideTooltip() {
    document.getElementById("tooltip").style.display = "none";
}
