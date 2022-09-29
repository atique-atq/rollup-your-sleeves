import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    const {name, description, duration, img} = course;
    return (
        <div className='course'>
            <img src={img} alt="Relevant Course Image"></img>
            <div className='course-info'>
                <h4>{name}</h4>
            </div>
            
        </div>
    );
};

export default Course;