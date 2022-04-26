import React from 'react';
import './Event.css'

const Event = (props) => {
    const {name, img} = props.event
    return (
        <div className='event-div'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Event;