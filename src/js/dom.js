import {
  WeatherCategory
} from './main.js';

const colorCombo = {
  "clear": "#dee9faff",
  "rainy": "#012787ff",
  "cloudy": "#a79dffff",
  "snowy": "#2cdefdff",
  "stormy": "#737373ff",
  "foggy": "#aba7a7ff",
  "default": "#7f7badff"
};


export const makeDiv = (forecastDay, index, cityName, countryName, displayElement) => {
  const {
    avgtemp_c,
    avgtemp_f,
    condition
  } = forecastDay.day;
  const store = WeatherCategory(condition.code);
  const bgColor = colorCombo[store];
  const HTMLString = `<div class="whole" id="${index}">
        <div class="day">
            <h4><strong>${cityName}, ${countryName}</strong></h4>
            <img src="https:${condition.icon}" alt="${condition.text}">
            <p>${avgtemp_c}°C / ${avgtemp_f}°F</p>
        </div>
        <div class="day des">
            <p>${condition.text}</p>
        </div>
    </div>`;

  displayElement.insertAdjacentHTML("beforeend", HTMLString);
  const id = document.getElementById(`${index}`);
  id.style.background = bgColor;
};


export function clearDisplay(element) {
  element.innerHTML = "";
}