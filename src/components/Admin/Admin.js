import React, { useState } from 'react';
import Header from '../Header/Header';
import './Admin.css';
import usersAlt from '../../logos/users-alt 1.png';
import plus from '../../logos/plus 1.png';
import { useEffect } from 'react';
import VolunteerList from '../VolunteerList/VolunteerList';
const Admin = () => {
   const [allVolunteer, setAllVolunteer] = useState([]);
   const [adminView, setAdminView] = useState({
      volunteerList: true
   });

   useEffect(() => {
      fetch('https://volunteer-network-server-simple.vercel.app/allVolunteer')
      .then(res => res.json())
      .then(data => setAllVolunteer(data));
   }, [])

const handleAdminSubmit = () => {
     const eventName = document.getElementById('name').value;
     let image = document.getElementById('file').value;

     const index = image.lastIndexOf("\\");
     image = image.substring(index+1);

     const data = {name: eventName, image: image};

    fetch('https://volunteer-network-server-simple.vercel.app/addEvent', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    })
    .then(res => res.json())
    .then(data => {
        if(data){
             document.getElementById('name').value ='';
            document.getElementById('file').value = '';
        }
    })
}

console.log(allVolunteer);
    return (
        <div>
           <Header></Header>
           <div className="div">
                <div className="admin-panel">
                    <p onClick={()=>setAdminView({volunteerList: true})}><img src={usersAlt} alt="" />Volunteer Register List</p>
                    <p onClick={()=>setAdminView({volunteerList: false})}><img src={plus} alt="" />Add Event</p>
                </div>

               {adminView.volunteerList && 
               <div className="volunteer-list">
                    <div className="title">
                        <span>Name</span>
                        <span className='email'>Email ID</span>
                        <span className='date'>Registration Date</span>
                        <span className='list'>Volunteer List</span>
                        <span className='action'>Action</span>
                    </div>
                    {
                        allVolunteer.map(volunteer => <VolunteerList key={volunteer._id} volunteer={volunteer}></VolunteerList>)
                    }
                </div>}


               {!adminView.volunteerList && <div className="add-event-form">

                    <label htmlFor="">Enter Event Name<br></br>
                        <input type="text" id='name' placeholder='Enter Event Name' required className='input-name'/>
                    </label>

                    <label htmlFor="">Banner<br></br>
                        <input type="file" id='file' className='upload' required/>
                    </label>
                    <button onClick={handleAdminSubmit} className='submit-event'>Submit</button>
                </div>}
               
           </div>
        </div>
    );
};

export default Admin;
