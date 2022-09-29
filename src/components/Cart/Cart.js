import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../../images/profilepic.jpg';

const Cart = ({ totalTime }) => {
 
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
                    <div className='single-break'>
                        <div>05</div>
                        <div>days</div>
                    </div>
                    <div className='single-break'>
                        <div>10</div>
                        <div>days</div>
                    </div>
                    <div className='single-break'>
                        <div>15</div>
                        <div>days</div>
                    </div>
                    <div className='single-break'>
                        <div>20</div>
                        <div>days</div>
                    </div>
                </div>
            </div>

            <div className='time-calculation'>
                <h3>Required Investing Time</h3>
                <div className='timefield-container'>
                    <div className='timefield'>Course duration: <span>{totalTime} days</span> </div>
                    <div className='timefield'>Reserve days  &nbsp; &nbsp; &nbsp;: <span></span> </div>
                </div>
            </div>

            <div>
                <button className='enrolledment-button'> Get Enrolled </button>
            </div>
        </div>
    );
};

export default Cart;