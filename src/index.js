import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import Contact from './contact';
import './style.css';

const Greeting = () => {

    const createMarkup = () => {
        return (
            <div>
                <Greeting />
                <About />
                <Contact />
            </div>
        );
    };


    return (
        <div>
            <h1>Hello Nerds</h1>
            {createMarkup()}
        </div>
    );

};

ReactDOM.render(
    <Greeting />,
    document.querySelector("#root")
);