import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (

        <div className='text-center mt-5'>
            <p><small>copyright &copy; {year} Wild Wayfarer</small></p>
        </div>
    );
};

export default Footer;