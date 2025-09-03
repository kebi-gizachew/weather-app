import {
  hr
} from './main.js';

export async function overAll(myCity) {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${hr}=${myCity}&days=14`;
    const response = await fetch(url, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error("City not found or API error!");
    }
    const tempo = await response.json();
    return tempo;
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
    throw error;
  }
}


export async function weatherFront(array) {
  for (const item of array) {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${hr}=${item}&days=3`;
    let response = await fetch(url, {
      method: "GET"
    });
    let tempo = await response.json();
    let b = document.getElementById(item);
    if (b) {
      let img = document.createElement("img");
      img.src = "https:" + tempo.current.condition.icon;
      img.alt = tempo.current.condition.text;
      img.height = "10";
      img.width = "10";
      b.insertAdjacentElement("afterbegin", img);
    }
  }
}