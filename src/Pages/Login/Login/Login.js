import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef('')
    const [user] = useAuthState(auth)

    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(
        auth
    );

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
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.info('Sent email', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Please enter your email address', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div>
            <h3 className='text-center mt-5'>Please Login</h3>
            <div className='mx-auto mt-3 form-container'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'>Forgot password?<button onClick={resetPassword} className='text-primary text-decoration-none btn btn-link mb-2'>Reset password</button></p>
                    <button type="submit" className="submit-btn w-100 mx-auto d-block">Login</button>
                </Form>
                <p className='text-center mt-4'>New to Wild Wayfarer? <Link to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;