import React from 'react'
import "./style.css"
const Footer = () => {
    return (
        <footer>
            <a
            href="https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA"
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
            alt="LinkIn-icon"
            />
        </a>
        </footer>
    )
}

export default Footer;