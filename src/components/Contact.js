import React from 'react';
import "./contact.css";
import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : props.online
    };
  }


render() {

return (
  <div className="Contact">
    <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
    <div className="status">  
      <h4 className= "name">{this.props.name}</h4>
  <span className={ this.state.online ?"status-online":"status-offline"}
    onClick={(event) => {
      const newOnline = !this.state.online;
      this.setState({ online: newOnline });
    }}></span><p className="status-text">{ this.state.online ?'Online':'Offline'}</p>
    </div> 
  </div>
);
}
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
export default Contact;
