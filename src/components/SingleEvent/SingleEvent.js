import React, { useContext } from 'react';
import './SingleEvent.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const SingleEvent = (props) => {
   const navigate = useNavigate();
   const [user, setUser] = useContext(userContext);

   const {_id, name, image} = props.event;
   


const handleEvent = (id) => {
    fetch(`https://volunteer-network-server-simple.vercel.app/singleEvent/${id}`)
    .then(res => res.json())
    .then(data => {
           const userEvent = {...user};
           
           userEvent.eventName = data.name;
           userEvent.image = data.image;
           setUser(userEvent);
           console.log(user);
    })
    navigate('/register');
   }

    return (
        <>
            <div className="events-main-content">
                <div className="event-content">
                    <Card onClick={()=>handleEvent(_id)} style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={require(`../../images/${image}`)} alt="not Found"/>
                        <Card.Body className='event-name'>
                            <h5>{name}</h5>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;