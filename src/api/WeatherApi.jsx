const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('City not found');
  return res.json();
};

export const fetchForecastByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('City not found');
  return res.json();
};
