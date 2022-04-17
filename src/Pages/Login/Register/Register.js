import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h3 className='text-center mt-5'>Please Register</h3>
            <div className=' mx-auto mt-3 form-container'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-6'>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-6'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Conform Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                    </Form.Group>
                    {/* <p className='text-danger'>{error?.message}</p> */}
                    <Button className='resetPass-btn mx-auto d-block text-primary mb-3'>Forgot Password?</Button>
                    <Button type="submit" className="btn btn-dark w-100 mx-auto d-block">Submit</Button>
                </Form>
                <p className='text-center mt-4'>Already have an account? <Link to='/login'>Please Login</Link></p>
                {/* <SocialLogin></SocialLogin>
            <ToastContainer /> */}
            </div>
        </div>
    );
};

export default Register;