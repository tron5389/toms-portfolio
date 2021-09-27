import React from 'react'
import "./style.css"
const Footer = () => {
    return (
        <footer>
            <a
            href="https://github.com/tron5389?tab=repositories"
            target="_blank"
            >
            <img
            src={`${process.env.PUBLIC_URL}/github-brands.svg`}
            alt="Facebook-icon"
            />
        </a>
        <a
            href="https://www.linkedin.com/in/tom-ron-86095590/"
            target="_blank"
        >
            <img
            src={`${process.env.PUBLIC_URL}/linkedin-brands.svg`}
            alt="LinkedIn-icon"
            />
        </a>
        </footer>
    )
}

export default Footer;