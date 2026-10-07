async function getWeather() {

    let city = document.getElementById("city").value.trim();

    if (city === "") {
        document.getElementById("error").innerHTML =
            "Please enter a city name";
        return;
    }

    try {

        let url = "https://wttr.in/" +
                  encodeURIComponent(city) +
                  "?format=j1";

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("API error");
        }

        let data = await response.json();

        let weather = data.current_condition[0];

        document.getElementById("place").innerHTML =
            city;

        document.getElementById("temp").innerHTML =
            "🌡️ Temperature: " +
            weather.temp_C + " °C";

        document.getElementById("condition").innerHTML =
            "☁️ Condition: " +
            weather.weatherDesc[0].value;

        document.getElementById("wind").innerHTML =
            "💨 Wind Speed: " +
            weather.windspeedKmph + " km/h";

        document.getElementById("error").innerHTML = "";

    } catch (error) {

        console.log(error);

        document.getElementById("error").innerHTML =
            "❌ Unable to get weather data";
    }
}