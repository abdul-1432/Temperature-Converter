document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            resultElement.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F.`;
        } else {
            resultElement.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
