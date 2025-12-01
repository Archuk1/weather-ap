import axios from "axios";

export default async function fetchWeather(latitude, longitude) {
  const API_KEY = "vcRK23EVDEbMBXvrVm8tmM73REsxVx";
  const originalUrl = `https://www.amdoren.com/api/weather.php?api_key=${API_KEY}&lat=${latitude}&lon=${longitude}`;
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;

  try {
    const response = await axios.get(proxyUrl);
    return response.data;
    
  } catch (error) {
    console.error("Weather error:", error);
    throw error;
  }
}
