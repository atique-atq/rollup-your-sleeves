import React, { useEffect, useState } from 'react';
import './Container.css'
import Course from '../Course/Course';
import img from '../../images/roll-up1.jpg';
import Cart from '../Cart/Cart';

const Container = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => { 
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    const handleAddToCart = (selectedCourse) => {
        const newCart = [...cart, selectedCourse];
        setCart(newCart);
    }

    const totalTime = cart.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.duration), 0);

    return (
        <div className='container'>
            <div >
                <div>
                    <div className='text-container'>
                        <img src={img} alt=""></img>
                        <div className='text'>
                            <h2>Roll up your Sleeves</h2>
                            <p><i>Plan, pick courses and fight back for your future career</i></p>
                        </div>
                    </div>
                    <hr className='h-line'></hr>
                </div>
                
                <div className='course-container'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}
                        ></Course>)
                    }
                </div>
            </div>

            <div className='cart-container'>
                <Cart totalTime={totalTime}></Cart>
            </div>
        </div>
    );
};

export default Container;