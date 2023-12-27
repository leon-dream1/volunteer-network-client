import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { userContext } from '../../App';
import UserSingleEvent from '../UserSingleEvent/UserSingleEvent';
import { Col, Container, Row } from 'react-bootstrap';
import './UserEvent.css';

const UserEvent = () => {
    const [user, setUser] = useContext(userContext);
 const [registerEvent, setRegisterEvent] =  useState([]);
//  console.log(registerEvent);
 useEffect(() => {
    fetch('https://volunteer-network-server-simple.vercel.app/userEvents?email='+user.email)
    .then(res => res.json())
    .then(data => setRegisterEvent(data))
 }, [])

 console.log(registerEvent);

    return (
        <div>
            <Header></Header>
            <h2 style={{color:'green'}} className='text-center mt-3'>Thank You for connected with Us.</h2>
            <h3 style={{color: 'blue'}} className='text-center mt-4'>Your All Event</h3>
              <Container className='user-event'>
                 <Row>
                        {
                         registerEvent.map(event => <UserSingleEvent event={event}></UserSingleEvent>)
                        }       
                 </Row>
              </Container>
        </div>
    );
};

export default UserEvent;