import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <peakyblinders>
            <div className='Contact'>
            <img className='avatar' src={props.avatar} alt={props.name}/>
                <div className='status-text'>
                    <h4 className='name'>{props.name}</h4>
                    <div className='status'>
                    <div className={props.online ? 'status-online' : 'status-offline'}></div> <p className='status-text'>{props.online ? 'Online' : 'Offline'}</p>
                        
                    </div>
                </div>
            </div>
        </peakyblinders>
    )
} 



export default Contact;