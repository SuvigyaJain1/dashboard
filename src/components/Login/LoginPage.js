import React from 'react'
import LoginForm from './LoginForm'
import Card from '../Card/Card'
import './Login.scss'

export default function LoginPage() {
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
