import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    const {name, description, duration, img} = course;
    return (
        <div className='course'>
            <img src={img} alt="Relevant Course"></img>
            <div className='course-info'>
                <h5>{name}</h5>
                <small>{description}</small>
                <p><span className='orange-color'>Time Required : {duration} days </span> </p>
            </div>
            
        </div>
    );
};

export default Course;