import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css"
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    
    const API_KEY= "67e2b62a39cae118c00db2fb767c7d6f";
    let getWeatherInfo = async () => {

        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                // For 404 or non-2xx status codes
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            if (!jsonResponse.main || !jsonResponse.weather) throw new Error("Invalid data structure");


            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (error) {
            throw (error);
        }
    };
    const handleChange = (event) => {
        setCity(event.target.value);
        setError("");
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError("");
        } catch (error) {
            setError("No Such Place");
        }


    };
    return (
        <div className="SearchBox">
            <h3> Weather Search</h3>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="cityName"
                    label="City Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={city}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" >Search</Button>
                {error && <p id="err" >{error}</p>}
            </form>

        </div>
    )
}