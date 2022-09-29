import React from 'react';
import './Course.css';

const Course = ({ course, handleAddToCart}) => {
    const {name, description, duration, img} = course;
    return (
        <div className='course'>
            <img src={img} alt="Relevant Course"></img>
            <div className='course-info'>
                <h4>{name}</h4>
                <small>{description}</small>
                <h5 className='time-required'>Time Required : {duration} days</h5>
                <button onClick={() => handleAddToCart(course)}
                className='add-to-cart'> Add to List</button>
            </div>
        </div>
    );
};

export default Course;