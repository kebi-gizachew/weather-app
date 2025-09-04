import {
  hr
} from './main.js';

export async function overAll(myCity) {
  try {
  const url1 = `https://api.weatherapi.com/v1/forecast.json?key=${hr}=${myCity}&days=14`;
  const url2 = `https://api.weatherapi.com/v1/forecast.json?key=${hr}=${myCity}&days=3`;

    const response1 = await fetch(url1, {
      method: "GET"
    });
    const response2 = await fetch(url2, {
      method: "GET"
    });
    if (!response1.ok || !response2.ok) {
    throw new Error("City not found or API error!");
    }
    const tempo1 = await response1.json();
    const tempo2 = await response2.json();

  return [tempo1,tempo2];
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