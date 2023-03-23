import React from 'react'
import { useState } from 'react'
import { Box, InputBase, Button, styled } from '@mui/material'
import { getWeather } from '../services/api'

const Container = styled(Box)({
    background:'#445A6F',
    borderRadius:'0 20px 0 0',
    padding:'10px',
    display:'flex',
    justifyContent:'space-evenly'
})

const Input = styled(InputBase)({
    color:'#fff',
    fontSize:'18px',
    background:'transparent'
})

const GetButton = styled(Button)({
    background:'#e67e22'
})


function Form({setResult}) {
    const [data,setData] = useState({city:'',country:''})
    
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const getWeatherInfo = async ()=>{
        let result = await getWeather(data.city,data.country)
        setResult(result)
    }

    return (
    <Container>
      <Input placeholder='City' name='city' onChange={(e)=>handleChange(e)}/>
      <Input placeholder='Country' name='country' onChange={(e)=>handleChange(e)}/>
      <GetButton variant='contained' onClick={()=>getWeatherInfo()}>Get Weather</GetButton>
    </Container>
  )
}

export default Form
