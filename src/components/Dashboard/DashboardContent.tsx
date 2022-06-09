import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap'

function DashboardContent() : ReactElement {
  return (
    <Container className='dashboard-content'>
      <Container className='topbar'>
        <h3 className='greeting'>Good Morning, John!</h3>
        <span className='muted-text'>Here's whats happening with your store today</span>
      </Container>

      
    </Container>
  )
}

export default DashboardContent