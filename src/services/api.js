import axios from "axios";

const API_KEY = '6d01f672b656d5720839401111b8fccb'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

export const getWeather = async(city,country)=>{
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data
    } catch (error) {
        console.log('Error while calling the api: '+error.message)
        return error.response
    }
}