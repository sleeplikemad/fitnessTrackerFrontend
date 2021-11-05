import React from 'react';
import { useHistory } from 'react-router-dom';
import headerImage from '../images/headerImage.jpeg';

const Header = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/routines');
    }

    return (
        <div className="header-main-container">
            <div className="header-left-container">
                <img className="header-image" src={headerImage}></img>
            </div>
            <div className="header-right-container">
                <h2>Welcome to</h2>
                <h1>Fitness Tracker</h1>
                <button className="get-started"
                    onClick={() => handleClick()}>
                    Get Started
                    </button>
            </div>
        </div>
    );
};

export default Header;