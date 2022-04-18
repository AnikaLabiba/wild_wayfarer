import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <h3 className='text-center mt-5'>Please Login</h3>
            <div className='mx-auto mt-3 form-container'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'>Forgot password?<button className='text-primary text-decoration-none btn btn-link mb-2'>Reset password</button></p>
                    <button type="submit" className="submit-btn w-100 mx-auto d-block">Login</button>
                </Form>
                <p className='text-center mt-4'>New to Wild Wayfarer? <Link to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;