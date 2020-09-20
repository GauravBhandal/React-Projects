 // Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { getDefaultNormalizer } from '@testing-library/react';

 // Create a react components
const App = () => {
    const buttonText = {text: 'Click me!'};
    const labelText = 'Enter name:';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};
// <script type="text/babel" data-presents="env,react">
//     function getTime() {
//         return (new Date()).toLocalTimeString()
//     }
//     const App = () => {
//         return (
//             <div>
//                 <div>Current Time</div>
//                 <h3>{getTime()}</h3>
//             </div>
//         );
//     }

//     </script>
 //Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
