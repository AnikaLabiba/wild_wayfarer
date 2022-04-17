import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import { Row } from 'react-bootstrap';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id='services'>
            <h2 className='text-center my-5'>My Services</h2>
            <div className='container mb-5'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {packages.map(tour => <Service
                        key={tour.id}
                        tour={tour}
                    ></Service>)}
                </Row>
            </div>
        </div>
    );
};

export default Packages;