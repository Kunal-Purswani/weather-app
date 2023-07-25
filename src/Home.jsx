import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const Home = () => {
  const [clicked, setClicked] = useState(false)
  const [city, setCity] = useState('mumbai');
  const [data, setData] = useState({
    celcius:10,
    name:"London",
    humidity:10,
    speed:2
  })

  const handleChange = (e)=>{
    setCity(e.target.value);
  }

  const handleClick = (e)=>{
    e.preventDefault();
    if(city){
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d01f672b656d5720839401111b8fccb&units=metric`
      axios.get(apiUrl)
        .then(res=>{
          setData({...data,celcius:res.data.main.temp, name:res.data.name, humidity:res.data.main.humidity, speed:res.data.wind.speed})
        })
        .catch(err=>{
          alert("Error\n"+err.response.data.message.toUpperCase()+"!")
        })
    }else{
      alert("Please Enter a city!");
    }
  }
  
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <form>
            <input type="text" placeholder='Enter a city...' value={city} onChange={handleChange}/>
            <button type='submit' onClick={handleClick}><img height="20px" width="20px" src="/Images/search.png" alt=""/></button>
          </form>
        </div>
        <div className="winfo">
            <h1>{data.celcius}°C</h1>
            <h2>{data.name}</h2>
            <div className="details">
              <div className="col">
                <img src="/Images/humidity.png" alt="" />
                <div className="humidity">
                  <p>{data.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img className="windImg" src="/Images/wind.png" alt="" />
                <div className="wind">
                  <p>{data.speed} km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
