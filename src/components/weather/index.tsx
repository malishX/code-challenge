import type { FC } from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import axios from "axios";
interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  pressure: number;
}
const Home: FC = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const getWeather = async () => {
    const data = await axios.get(
      "https://63c8f683320a0c4c953dd32e.mockapi.io/api/cc/v1/locations"
    );
    const res = data.data.filter(
      (item: any) => item.location === "Radstadt"
    )[0];
    setWeather({
      temperature: res?.main?.temp_c,
      humidity: res?.main?.humidity,
      windSpeed: 0,
      description: "",
      pressure: res?.main?.pressure
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (!weather) return <>loading...</>;

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontSize: "48px", display: "flex", alignItems: "center" }}
      >
        Radstadt
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <img
          height={100}
          width={100}
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt=""
        />
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          {weather.temperature}
        </Typography>
      </Box>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        humidity: {weather.humidity}%
      </Typography>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        pressure: {weather.pressure} pa
      </Typography>
    </Box>
  );
};

export default Home;