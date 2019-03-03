import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Greeting = () => {
    return(
        <div>
            <h1>Hello Nerds</h1>
            <div id="image"></div>
        </div>
    );
};

ReactDOM.render(
    <Greeting />,
    document.querySelector("#root")
);