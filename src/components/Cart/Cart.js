import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../../images/profilepic.jpg';
import { addToDb, getFromDb } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ totalTime }) => {

    const [breakValue, setBreakValue] = useState(0);

    const handleBreakToCart = (vacation) => {
        //setting vacation value to db
        addToDb(vacation);
        //updating state
        setBreakValue(vacation);
    }

    const getBreakValue = () => {
        return getFromDb();
    }

    //react toast message
    const notify = () => toast('Congratulations!! Best of luck for your new journey!');

    return (
        <div className='cart'>
            <div className='person-information'>
                <div className='profile'>                
                    <img src={profilepic} alt="" ></img>
                    <div className='profile-text'>
                        <h3>Atiqur Rahman</h3>
                        <small> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Tangail, Bangladesh</small>
                    </div>
                </div>

                <div className='skills'>
                    <p>present skills:</p>
                    <div className='skill-set'>
                        <div>Oracle</div>
                        <div>Frontend</div>
                        <div>API</div>   
                    </div>
                </div>
            </div>  

            <div className='break-time'>
                <h4> Add Reserve Days/Vacation</h4>
                <div className='break-options'>
                    <div className='single-break' onClick={() => handleBreakToCart(5)}>
                        <div>05</div>
                        <div>days</div>
                    </div>
                    <div className='single-break' onClick={() => handleBreakToCart(10)}>
                        <div>10</div>
                        <div>days</div>
                    </div>
                    <div className='single-break' onClick={() => handleBreakToCart(15)}>
                        <div>15</div>
                        <div>days</div>
                    </div>
                    <div className='single-break'onClick={() => handleBreakToCart(20)}>
                        <div>20</div>
                        <div>days</div>
                    </div>
                </div>
            </div>

            <div className='time-calculation'>
                <h3>Required Investing Time</h3>
                <div className='timefield-container'>
                    <div className='timefield'>Course duration days: <span>{totalTime === 0? null : totalTime} </span> </div>
                    <div className='timefield'>Reserve days  &nbsp;: <span>{getBreakValue()} </span></div>
                </div>
            </div>

            <div>
                <button className='enrolledment-button'
                    onClick={notify}> Get Enrolled </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;