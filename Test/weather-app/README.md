# City Temperature App

A small static web app that shows the current temperature for a city you enter.

## Features
- Search by city name
- Current temperature from [Open-Meteo](https://open-meteo.com/) (no API key needed)
- Handles empty input, unknown cities and network errors

## Run locally
```sh
cd Test/weather-app
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Files
- `index.html`: page markup
- `style.css`: styling
- `app.js`: geocoding and weather requests, UI logic

## How it works
1. The city name is sent to the Open-Meteo geocoding API to get its coordinates.
2. The coordinates are sent to the Open-Meteo forecast API with `current=temperature_2m`.
3. The result is shown as "City, Country: temperature unit".
