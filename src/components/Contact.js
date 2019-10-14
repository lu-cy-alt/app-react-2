import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        online: this.props.online,
        }

    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status" onClick = {() => {
                    const newStatus = !this.state.online;
                    this.setState({
                    online: newStatus,
                    })
                    }}>
                        <span className={this.state.online ? "status-online" : "status-offline"}></span>
                        <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;