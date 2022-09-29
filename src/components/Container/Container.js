import React, { useEffect, useState } from 'react';
import './Container.css'
import Course from '../Course/Course';
import img from '../../images/roll-up.jpg';

const Container = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => { 
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className='container'>
            <div >
                <div className='text-container'>
                    <img src={img} alt=""></img>
                    <div className='text'>
                        <h3>Roll up your Sleeves</h3>
                        <p><i>Plan, pick courses and fight back for your future career</i></p>
                    </div>
                </div>
                
                <div className='course-container'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
                </div>
            </div>

            <div className='cart-container'>
                <h1>This is for cart</h1>
            </div>
        </div>
    );
};

export default Container;