import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <div className='individual-question'>
                <h1>How does React works?</h1>
                <p><i><strong> Answer:</strong></i> React is a javascript library which helps us to make complex UI with the combination of separate chunk of codes named as components. React application is combined of of multiple components and each of these components are responsible for rendering a seperate, reusable code of HTML. React stores the DOM in his Virtual DOMs. When any objects state changes, React's virtual DOM only updates specific objects inside the real DOM which significantly improves the performance.</p>
            </div>

            <div className='individual-question'>
                <h1>What are the difference between 'props' and 'states'?</h1>
                <p><i><strong> Answer:</strong></i> Props are used to pass data to the React Components. Props is the short form of property.Any React applications are build with the composition of different Components. Using Props, data are passed uni directionally among those Components.
                On the other hand, States are used to manage changes inside a component. State must have a default value and it changes over time with the interaction of human changes.</p>
            </div>

            <div className='individual-question'>
                <h1>Why useEffect is used in react except API data loading</h1>
                <p><i><strong> Answer:</strong></i> When we want to perform side effects in react application, we use useEffect hooks. For example while fetching data, directly updating timers and DOM etc. useEffect works in every single render. We can control this dependency injection. If we use the second parameter, we can pass depndencies to this useEffect array.</p>
            </div>
            
        </div>
    );
};

export default Questions;