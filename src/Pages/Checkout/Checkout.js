import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [services] = useContext(ServiceContext)
    const { serviceId } = useParams()

    const service = services.find(service => service.id == serviceId)

    const showToast = () => {
        toast.info('Thanks for your support.', {
            position: toast.POSITION.TOP_CENTER
        })
    }

    return (
        <div className='container'>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card className='w-75 mx-auto mt-5'>
                        <Card.Img className='w-75 mx-auto mt-3' variant="top" src={service?.img} />
                        <Card.Body className='mt-3 text-center'>
                            <Card.Title><h3>{service?.name}</h3></Card.Title>
                            <h4>${service?.price}</h4>
                            <Card.Text>
                                {service?.description}
                            </Card.Text>
                        </Card.Body>
                        <button onClick={showToast} className='submit-btn'>Proceed Checkout</button>
                        <ToastContainer />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Checkout;