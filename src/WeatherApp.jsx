import { useState } from "react";
import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import "./WeatherApp.css"
export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] =useState(null);
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div class="WeatherCSS">
            <SearchBox updateInfo={updateInfo}/>
            <br />
            { weatherInfo && <InfoBox info={weatherInfo}/>}

        </div>
    )

}