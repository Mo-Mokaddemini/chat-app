import React from 'react';
import "./contact.css";
import PropTypes from 'prop-types';


function Contact({avatar, name, online}) {
return (
  <div className="Contact">
    <img className="avatar" src={avatar} alt={name}/>
    <div className="status">  
      <h4 className= "name">{name}</h4>
<span className={ online ?"status-online":"status-offline"}></span><p className="status-text">{ online ?'Online':'Offline'}</p>
    </div> 
  </div>
);
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
export default Contact;
