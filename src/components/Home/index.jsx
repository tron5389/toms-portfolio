import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi, I'm Tom</p>
                    
                    <p>Welcome to my Software Devlopment Portfolio!</p>
                </h1>
                <Link to="about">
                    <button>About Me</button>
                </Link>
            </div>
            <div className="person">
                <img
                src={`${process.env.PUBLIC_URL}/lemon_clipart.jpg`}
                alt="person picture"
                />
            </div>
        </div>
    )
}

export default Home;
