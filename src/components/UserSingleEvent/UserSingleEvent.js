import React from 'react';
import { Col } from 'react-bootstrap';
import './UserSingleEvent.css';

const UserSingleEvent = (props) => {
  const {eventName, date, _id, image} = props.event;
  console.log(props.event.image);

  const handleClick = (e, id) => {
   console.log(e.target, id);
     fetch(`https://volunteer-network-server-simple.vercel.app/deleteUserEvent/${id}`, {
      method:'DELETE'
     })
     .then(res => res.json())
     .then(result => {
      if(result){
          e.target.parentNode.parentNode.style.display = 'none';
      }
     })
  }
    return (
        <Col lg={6} className='mb-5'>
               <div className='user-main-events' >
                        <img src={require(`../../images/${image}`)} alt="" className='single-image'/>
                    <div className="event-detail">
                      <h1 className='mb-3'>{eventName}</h1>
                      <h4 className='mb-5'>{new Date(date).toDateString("dd/mm/yyyy")}</h4>
                      <button onClick={(e)=>handleClick(e,_id)} className='cancel-btn'>Cancel</button>
                    </div>
               </div>
        </Col>
    );
};

export default UserSingleEvent;