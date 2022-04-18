import React, { useContext, useEffect } from 'react';
import Service from '../../Service/Service';
import { Row } from 'react-bootstrap';
import { ServiceContext } from '../../../App';


const Packages = () => {
    const [services, setServices] = useContext(ServiceContext)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [setServices])

    return (
        <div id='services'>
            <h2 className='text-center my-5'>My Services</h2>
            <div className='container mb-5'>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {services.map(service => <Service
                        key={service.id}
                        tour={service}
                    ></Service>)}
                </Row>
            </div>
        </div>

    );
};

export default Packages;