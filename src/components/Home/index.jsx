import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi I'm Tom,</p>
                    
                    <p>Welcome to my Personal Portfolio</p>
                </h1>
                <Link to="about">
                    <button>About Me</button>
                </Link>
            </div>
            <br/>
            <div className="person">
                <img
                src='https://github.com/tron5389/public-images/blob/master/profile-pic.png?raw=true'
                alt="person picture"
                />
            </div>
        </div>
    )
}

export default Home;
