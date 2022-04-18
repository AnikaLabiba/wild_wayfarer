import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar style={{ backgroundColor: '#B0BDE0' }} collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Wild Wayfarer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href='#services'>Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to="/about">
                                About me
                            </Nav.Link>
                            {user ? <button onClick={handleSignout} className='btn btn-link text-dark text-decoration-none'>Signout</button>
                                : <Nav.Link as={Link} eventKey={2} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;