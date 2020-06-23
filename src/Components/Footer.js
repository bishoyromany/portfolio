import React from 'react'
import './../Style/Footer.scss'
import heart from './../Images/footer/heart.svg'

const Footer = () => {
    return (
        <footer id="Footer">
            <p>
                <span className="created-with">This Website Was Created With</span>
                <span className="heart"><img src={heart} alt="Heart" /></span>
                <span className="by">BY</span>
                <a href="https://github.com/bishoyromany" target="_blank">Bishoy Romany.</a>
            </p>
        </footer>
    )
}

export default Footer;