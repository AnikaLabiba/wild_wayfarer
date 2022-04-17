import React, { useEffect, useState } from 'react';
import SinglePackage from '../../SinglePackage/SinglePackage';
import { Row } from 'react-bootstrap';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id='packages'>
            <h2 className='text-center my-5'>Upcoming Packages</h2>
            <div className='container mb-5'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {packages.map(tour => <SinglePackage
                        key={tour.id}
                        tour={tour}
                    ></SinglePackage>)}
                </Row>
            </div>
        </div>
    );
};

export default Packages;