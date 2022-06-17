import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import Card from '../Card/Card'
import WeatherCard from '../WeatherCard/WeatherCard'

function DashboardContent() : ReactElement {
  return (
    <Container className='dashboard-content'>
     <WeatherCard/>
    </Container>
  )
}

export default DashboardContent