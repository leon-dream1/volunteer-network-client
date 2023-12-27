import React from 'react';
import './VolunteerList.css';
import trash from '../../logos/trash-2 9.png';

const VolunteerList = (props) => {
    const {name, email, date, eventName, _id } = props.volunteer;

const handleDeleteAdmin = (e, id) => {
   fetch(`https://volunteer-network-server-simple.vercel.app/adminDeleteEvent/${id}`, {
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data => {
    if(data){
        e.target.parentNode.parentNode.style.display = 'none';
    }
   })
}
    return (
        <div className='title-content'>
             <div className="name">
                 <p>{name}</p>
             </div>
             <div className="email">
               <p>{email}</p>
             </div>
            <div className="date">
               <p>{date}</p>
            </div>
           <div className="eventName">
               <p>{eventName}</p>
           </div>
           <div className="trash">
               <img onClick={(e)=>handleDeleteAdmin(e,_id)} src={trash} alt="" className='trash'/>
           </div>
        </div>
    );
};

export default VolunteerList;