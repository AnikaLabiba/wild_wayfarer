import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        if (password === confirmPassword) {
            if (password.length > 6) {
                createUserWithEmailAndPassword(email, password)
            }
            else {
                alert('Password must be 6 character or more.')
                return;
            }
        }
        else {
            alert('Two password did not matched.')
            return;
        }

        console.log(name, email, password, confirmPassword)
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

                    <Button type="submit" className="btn btn-dark w-100 mx-auto d-block">Submit</Button>
                </Form>
                <p className='text-center mt-4'>Already have an account? <Link to='/login'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default Register;