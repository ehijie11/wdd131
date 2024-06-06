
// Windchill Factor
const temp = 28;
const wind = 5;
const windChill = document.getElementById('windchill');

function calculateWindChill(temp, wind) {
    if (temp <= 30 && wind > 5) {
        const wcFactor = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        return wcFactor;
    } else {
        return "N/A";
    };
};

const wc = calculateWindChill(temp, wind);
windChill.innerText = wc === "N/A" ? "N/A" : `${wc.toFixed(2)} °C`;
