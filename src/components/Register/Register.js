import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Register.css';
import Form from 'react-bootstrap/Form';
import { userContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useContext(userContext);
    console.log(user);
const navigate =  useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    
   const date =  document.getElementById('date').value;
   const desc =  document.getElementById('desc').value;
   
   const data = {...user, date: date, description: desc};

   fetch('https://volunteer-network-server-simple.vercel.app/userEvent?email='+user.email, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
   })
   .then(res => res.json())
   .then(result => {

    if(result === false){
        alert('Sorry.....Event Already have been Selected!!!!! ')
    }
    else{
        navigate('/events');
    }

   })
    
 
}

    return (
        <div>
            <Header></Header>
            <div className="register-form">
                <h1 className='mb-5'>Register as a Volunteer</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Full Name" defaultValue={user.name} className='register-form-input'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="email" placeholder="Username or Email" defaultValue={user.email} className='register-form-input'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="date" id='date' placeholder="Date" defaultValue={new Date()} required className='register-form-input'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" id='desc' placeholder="Description" className='register-form-input'/>
                    </Form.Group>
                    <Form.Group className="mb-5" >
                        <Form.Control type="text" placeholder="Select a Event" value={user.eventName} required className='register-form-input'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="submit" value='Registration' className='register-form-input submit-btn'/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Register;