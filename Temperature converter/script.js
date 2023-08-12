function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;

    if (celsius !== "") {
      var convertedFahrenheit = (celsius * 9/5) + 32;
      var convertedKelvin = parseFloat(celsius) + 273.15;
      document.getElementById("fahrenheit").value = convertedFahrenheit;
      document.getElementById("kelvin").value = convertedKelvin;
      document.getElementById("result").innerHTML = celsius + "°C is equal to " + convertedFahrenheit + "°F and " + convertedKelvin + " °K";
    } else if (fahrenheit !== "") {
      var convertedCelsius = (fahrenheit - 32) * 5/9;
      var convertedKelvin = (fahrenheit - 32) * 5/9 + 273.15;
      document.getElementById("celsius").value = convertedCelsius;
      document.getElementById("kelvin").value = convertedKelvin;
      document.getElementById("result").innerHTML = fahrenheit + "°F is equal to " + convertedCelsius + "°C and " + convertedKelvin + " °K";
    } else if (kelvin !== "") {
      var convertedCelsius = kelvin - 273.15;
      var convertedFahrenheit = (kelvin - 273.15) * 9/5 + 32;
      document.getElementById("celsius").value = convertedCelsius;
      document.getElementById("fahrenheit").value = convertedFahrenheit;
      document.getElementById("result").innerHTML = kelvin + " K is equal to " + convertedCelsius + "°C and " + convertedFahrenheit + "°F";
    } else {
      document.getElementById("result").innerHTML = "Please enter a temperature.";
    }
  }

  function clearFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("result").innerHTML = "";
  }
 