import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../../images/profilepic.jpg';

const Cart = () => {
    return (
        <div>
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
        </div>
    );
};

export default Cart;