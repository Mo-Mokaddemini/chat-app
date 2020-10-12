import React from 'react';
import "./contact.css";


function Contact() {
const name = "Jared Gray";
const avatar = 'https://randomuser.me/api/portraits/men/40.jpg';
const status = true;
return (
  <div className="Contact">
    <img className="avatar" src={avatar}/>
    <div className="status">  
      <h4 className= "name">{name}</h4>
<span className={(status)?'status-online':'status-offline'}></span><p className="status-text">{(status)?'Online':'Offline'}</p>
    </div> 
  </div>
);
}

export default Contact;