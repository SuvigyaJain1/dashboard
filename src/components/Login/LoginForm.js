import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'

function LoginForm() {
    
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {

        /*
         *  Update state `details` when user enters data into an input field  
         */
        const key = e.target.name
        const value = e.target.value
        setDetails({...details, [key]:value})
    }

    const submitHandler = e => {
        e.preventDefault();

        /*
         * Handle Authentication logic here 
         */

        if(details.email !== 'email@com' || details.password !== 'password') console.log("Incorrect details");
        else console.log("Sucessfully logged in");
    }
      
  return (
    <Form onSubmit={submitHandler}>

        <div className='form-top'>
            <h2>Welcome Back !</h2>

            <Form.Group className='form-group'>
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" name="email" placeholder='Enter Registered Email Address' onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='form-group'>
                <Form.Label htmlFor='password'> Password </Form.Label>
                <Form.Control type="password" name="password" placeholder='Enter Password' onChange={handleChange}/>
                <Form.Text className='fgt-passwd'>Forgot Password? <a href="#">Click Here</a> </Form.Text>
            </Form.Group>

            <Form.Group className='form-group form-group-submit'>
                <Button as='input' type='submit' value="Sign In" variant='primary'/>
            </Form.Group>

            <div className='alternate-signin row'>
                <ListGroup horizontal className=''>
                    <a href='#'><ListGroup.Item><i className='fa-lg bi-facebook'></i></ListGroup.Item></a>
                    <a href='#'><ListGroup.Item><i className='fa-lg bi-google'></i></ListGroup.Item></a>
                    <a href='#'><ListGroup.Item><i className='fa-lg bi-github'></i></ListGroup.Item></a>
                    <a href='#'><ListGroup.Item><i className='fa-lg bi-twitter'></i></ListGroup.Item></a>
                </ListGroup>
            </div>
        </div>

        <div className='form-bottom'>
            <Form.Group className='form-group signup-prompt'>
                <Form.Text >New user? <a href='#'>Sign up</a> now</Form.Text>
            </Form.Group>
        </div>
    </Form>
  )
}

export default LoginForm