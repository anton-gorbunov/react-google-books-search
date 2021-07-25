import React from 'react';

import './error.scss';
import errorImg from './error.png';

const Error = () => {
    return (
        <div className="error">
            <div className="container">
                <img className="error__img" src={errorImg} alt="errorImg"/>
                <h2 className="error__title">Something goes wrong...</h2>
                <div className="error__descr">Try again later</div>
            </div>
        </div>
    )
}

export default Error;