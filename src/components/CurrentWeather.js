import React, {useState, useEffect} from 'react';
import axios from 'axios';

function CurrentWeather(){
    const [temp, setTemp] = useState()
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${12}&lon=${12}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    
    useEffect(() => {
        axios.get(URL)
        .then((res) =>{
        setTemp(res.data)
        console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[temp])
  

    return (
        <>
        <h1>Current Weather</h1>
        </>
    )
}

export default CurrentWeather