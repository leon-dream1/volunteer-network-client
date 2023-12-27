import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logos/Group 1329.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate =   useNavigate();
    const handleRegister = () => {
        navigate('/register')
    }
    const handleAdmin = () => {
        navigate('/admin')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" className='w-25'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>
                    
                    <button onClick={handleRegister} className='register'>Register</button>
                    <button onClick={handleAdmin}className='admin'>Admin</button>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;