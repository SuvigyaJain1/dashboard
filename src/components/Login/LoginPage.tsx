import React, { ReactElement } from 'react'
import LoginForm from './LoginForm'
import Card from '../Card/Card'
import '../../styles/Login.scss'

export default function LoginPage(): ReactElement {
  return (
    <div className='container login-page row'>
      <div className="col-md-3 col-bg-3 col-sm-2"></div>
      <Card className="col-md-6 col-bg-6 col-sm-8">
        <LoginForm />
      </Card>
      <div className="col-md-3 col-bg-3 col-sm-2"></div>
    </div>
  )
} 
