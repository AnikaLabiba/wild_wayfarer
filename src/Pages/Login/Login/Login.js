import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()

    }
    return (
        <div>
            <h3 className='text-center mt-5'>Please Login</h3>
            <div className='mx-auto mt-3 form-container'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-6'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'>Forgot password?<button className='text-primary text-decoration-none btn btn-link mb-2'>Reset password</button></p>
                    {/* <Button className='text-primary text-decoration-none btn btn-link mb-3'>Forgot Password?</Button> */}
                    <Button type="submit" className="btn btn-dark w-100 mx-auto d-block">Login</Button>
                </Form>
                <p className='text-center mt-4'>New to Wild Wayfarer? <Link to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;