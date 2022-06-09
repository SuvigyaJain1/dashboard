import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { Location, NavigateFunction, To, useLocation, useNavigate } from 'react-router';
import { AuthContextType, useAuth } from '../../Auth/Authentication';

function LoginForm(): ReactElement {

    interface stateType {
        from: { pathname: string }
    }  

    const navigate: NavigateFunction = useNavigate();
    const auth: AuthContextType = useAuth();
    let location: Location = useLocation();
    let from : To = (location.state as stateType).from.pathname || '/';

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get("email") as string;

        auth.signin(email, () => {
            navigate(from, { replace: true });
        });
    }
      
    return (
        <Form onSubmit={submitHandler}>

            <div className='form-top'>
                <h2>Welcome Back!</h2>

                <Form.Group className='form-group'>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" name="email" placeholder='Enter Registered Email Address' />
                </Form.Group>

                <Form.Group className='form-group'>
                    <Form.Label htmlFor='password'> Password </Form.Label>
                    <Form.Control type="password" name="password" placeholder='Enter Password' />
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