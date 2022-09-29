import React, { useEffect, useState } from 'react';
import './Container.css'
import Course from '../Course/Course';

const Container = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => { 
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className='container'>
            <div className='courses'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

            <div className='cart'>
                <h1>This is for cart</h1>
            </div>
        </div>
    );
};

export default Container;