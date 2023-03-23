import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Brightness5, Brightness6, Cloud, Dehaze, LocationOn, Opacity, SettingsBrightness } from '@mui/icons-material'

const Row = styled(Typography)({
    padding:'10px',
    fontSize:'20px',
    letterSpacing:'2px',
    display:'flex',
    alignItems:'center',
    '&>svg':{
        marginRight:'10px'
    }
})

const Error = styled(Typography)({
    color:'red',
    margin:'30px',
    padding:'30px',
    fontSize:'24px'
})

function Information({result}) {
    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{margin:'30px 60px'}}>
            <Row><LocationOn/>{result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness/>Temperature: {result.main.temp}°C</Row>
            <Row><Opacity/>Humidity: {result.main.humidity}</Row>
            <Row><Brightness5/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze/>Condition: {result.weather[0].main}</Row>
            <Row><Cloud/>Clouds: {result.clouds.all}%</Row>
        </Box>
        :
        <Error>Please enter values to check weather</Error>
    )
}

export default Information
