import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Service = ({ tour }) => {
    const { id, name, price, img, description } = tour
    const navigate = useNavigate()
    const handleNavigateToBooking = id => {
        navigate(`/details/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className='card-box'>
                    <Card.Img className='image' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h5>${price}</h5>
                        <Card.Text className='description mb-5'>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleNavigateToBooking(id)} className='details-btn w-100 py-2'>Book now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;