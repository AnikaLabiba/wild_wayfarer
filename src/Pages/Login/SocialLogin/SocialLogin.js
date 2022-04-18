import React, { useState } from 'react';
import google from '../../../Images/social/google.png'
import facebook from '../../../Images/social/facebook.png'
import github from '../../../Images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [error, setError] = useState('')

    let errorElement;
    if (facebookError || githubError || googleError) {
        errorElement = <p className='text-danger'>{googleError?.message} {githubError?.message}{facebookError?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <div className='mx-3'>or</div>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='mx-2 social-btn'>
                    <img style={{ height: '30px' }} src={google} alt="" />
                </button>
                <button onClick={() => signInWithFacebook()} className='mx-2 social-btn'>
                    <img style={{ height: '26px' }} src={facebook} alt="" />
                </button>
                <button onClick={() => signInWithGithub()} className='mx-2 social-btn'>
                    <img style={{ height: '40px' }} src={github} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;