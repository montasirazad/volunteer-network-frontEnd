import React from 'react';
import Event from '../Event/Event';
import animalShelter from '../../../images/animalShelter.png';
import babySit from '../../../images/babySit.png';
import driveSafety from '../../../images/driveSafety.png';
import refuseShelter from '../../../images/refuseShelter.png';
import cleanPark from '../../../images/clearnPark.png';
import goodEducation from '../../../images/goodEducation.png';
import './Home.css'


const events = [
    {
        name: 'animalShelter',
        img: animalShelter
    },
    {
        name: 'babySit',
        img: babySit
    },
    {
        name: 'driveSafety',
        img: driveSafety
    },
    {
        name: 'refuseShelter',
        img: refuseShelter
    },
    {
        name: 'cleanPark',
        img: cleanPark
    },
    {
        name: 'goodEducation',
        img: goodEducation
    }
]

const Home = () => {
    return (
        <div className='home' >
            <h4>Volantear network </h4>
            
            <div className='home-div'>
            {
                events.map(event => <Event key={event.name} event={event}></Event>)
            }
            </div>
        </div>
    );
};

export default Home;