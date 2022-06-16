import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Spinner.scss';

function SpinnerOverlay() {
  return (
    <div className='overlay'>
        <Spinner animation='border' role='status'/>
    </div>
  )
}

export default SpinnerOverlay