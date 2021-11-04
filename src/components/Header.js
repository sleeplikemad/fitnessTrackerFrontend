import React from 'react'

const Header = (props) => {
    return (
        <div className="header-main-container">
            <div className="header-left-container">
                <img className="header-image"
                    src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_901096798_200013332000928080_415454.jpg"></img>
            </div>
            <div className="header-right-container">
                <h2>Welcome to</h2>
                <h1>Fitness Tracker</h1>
            </div>

        </div>
    );
};

export default Header;