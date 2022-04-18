import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
                toast.warn('Password must be 6 character or more.', {
                    position: toast.POSITION.TOP_CENTER
                })
                return;
            }
        }
        else {
            toast.error('Two password did not matched.', {
                position: toast.POSITION.TOP_CENTER
            })
            return;
        }
    }
    return (
        <div>
            <h3 className='text-center mt-5'>Please Register</h3>
            <div className=' mx-auto mt-3 form-container'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='name' placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                    </Form.Group>
                    {/* <p className='text-danger'>{error?.message}</p> */}

                    <Button type="submit" className="btn btn-dark w-100 mx-auto d-block">Submit</Button>
                </Form>
                <p className='text-center mt-4'>Already have an account? <Link to='/login'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;