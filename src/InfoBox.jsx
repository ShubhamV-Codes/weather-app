import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';




export default function InfoBox({ info }) {
    const COLD_URL = "https://images.unsplash.com/photo-1550297118-302437f704e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";

    const weatherIcon =
        info.humidity > 80
            ? <ThunderstormIcon style={{ marginLeft: 8, verticalAlign: 'middle' }} />
            : info.temp > 20
                ? <SunnyIcon style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                : <AcUnitIcon style={{ marginLeft: 8, verticalAlign: 'middle' }} />;
    return (
        <div className="InfoBox">


            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}

                        />
                        <CardContent>
                            <div className="cityName">
                                <Typography gutterBottom variant="h5" component="div">
                                    {info.city}{weatherIcon}
                                </Typography>
                            </div>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <div>
                                    <div> Temperature :{info.temp} &deg; </div>
                                    <div> Maximum Temperature :{info.tempMax} &deg; </div>
                                    <div>  Minimum Temperature :{info.tempMin} &deg; </div>
                                    <div> Humidity :{info.humidity} </div>
                                    <div> Weather :{info.weather} </div>
                                    {/* <div>  <i>{info.weather} </i> Weather feels Like {info.feelslike} &deg;</div> */}
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </div>

    )
}