import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <PeakyBlinders>
            <div className='Contact'>
            <img className='avatar' src={props.avatar} alt={props.name}/>
                <div className='status-text'>
                    <h4 className='name'>{props.name}</h4>
                    <div className='status'>
                        <p className='status-text'>{props.online ? 'Online' : 'Offline'}</p>
                        <p className={props.online ? 'status-online' : 'status-offline'}></p>
                    </div>
                </div>
            </div>
        </PeakyBlinders>
    )
} 



export default Contact;
