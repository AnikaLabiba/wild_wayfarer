import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (

        <div style={{ marginTop: '100px', background: 'black' }} className='text-center text-white py-3'>
            <p><small>copyright &copy; {year} Wild Wayfarer</small></p>
        </div>
    );
};

export default Footer;