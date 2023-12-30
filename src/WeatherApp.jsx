import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelslike: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: "",
      });
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
export default WeatherApp;