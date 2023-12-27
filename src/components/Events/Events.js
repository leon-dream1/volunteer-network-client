import React, { useEffect, useState } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';
import './Events.css';

const Events = () => {
  const [events, setEvents] =  useState([]);
  useEffect(() => {
    fetch('https://volunteer-network-server-simple.vercel.app/events')
    .then(res => res.json())
    .then(data => setEvents(data))

  }, [])
// console.log(events);
    return (
        <div className='events'>
            {
                events.map(event => <SingleEvent key={event._id} event={event}></SingleEvent>)
            }
        </div>
    );
};

export default Events;