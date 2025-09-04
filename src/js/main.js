import '../css/style.css';
import {overAll,weatherFront} from './api.js';
import {makeDiv,clearDisplay} from './dom.js';
import {renderChart} from './chart.js';
export const hr = import.meta.env.VITE_BASE_API;
const input = document.getElementById("country");
const checkbtn = document.getElementById("check");
const display = document.getElementById("display");
const sets = ["london", "ottawa", "rome", "paris", "dubai", "chicago"];
export function WeatherCategory(conditionCode) {
  if (conditionCode === 1000) return "clear";
if ([1003, 1006, 1009].includes(conditionCode)) return "cloudy";
if ([1063, 1069, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240, 1243, 1246, 1249, 1252].includes(conditionCode)) return "rainy";
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264].includes(conditionCode)) return "snowy";
  if ([1087, 1273, 1276, 1279, 1282].includes(conditionCode)) return "stormy";
if ([1030, 1135, 1147].includes(conditionCode)) return "foggy";
return "default";
}

weatherFront(sets);

checkbtn.addEventListener("click", async () => {
  const cityInput = input.value.trim();
  if (!cityInput) {
alert("Enter a city!");
    return;
  }
clearDisplay(display);

  const city = cityInput.split(",")[0].toLowerCase();
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
  try {
    const data = await overAll(formattedCity);

    data.forecast.forecastday.forEach((day, index) => {
      makeDiv(day, index, data.location.name, data.location.country, display);
    });
renderChart(data);
  } catch (error) {
    console.log('Fetching process halted due to an error.');
  }
});