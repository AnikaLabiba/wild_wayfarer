import React from 'react';
import notfound from '../../Images/404.png'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Page not found: 404</h2>
            <img className='w-50 mx-auto d-block mt-2' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;