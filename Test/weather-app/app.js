const form = document.getElementById("city-form");
const input = document.getElementById("city");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const button = form.querySelector("button");

async function getCoordinates(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding request failed");
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error("City not found");
  const { name, country, latitude, longitude } = data.results[0];
  return { name, country, latitude, longitude };
}

async function getCurrentTemperature(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather request failed");
  const data = await res.json();
  return { value: data.current.temperature_2m, unit: data.current_units.temperature_2m };
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = input.value.trim();
  resultEl.textContent = "";
  if (!city) {
    setStatus("Please enter a city name.", true);
    return;
  }

  button.disabled = true;
  setStatus("Loading...");
  try {
    const place = await getCoordinates(city);
    const temp = await getCurrentTemperature(place.latitude, place.longitude);
    setStatus("");
    resultEl.textContent = `${place.name}, ${place.country}: ${temp.value} ${temp.unit}`;
  } catch (err) {
    setStatus(err.message === "Failed to fetch" ? "Network error. Check your connection." : err.message, true);
  } finally {
    button.disabled = false;
  }
});
