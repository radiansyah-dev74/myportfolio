import React from 'react';
import './menu.css';
import { FaHome } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiCandlestickPhone } from "react-icons/gi";

function Menu() {

    return (
        <div className="menu">
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
                    <FaHome className="fa fa-user w3-xxlarge" size='5rem' color='white' />
                    <p>HOME</p>
                </a>
                <a href="#resume" className="w3-bar-item w3-button w3-padding-large w3-hover-black w3-text-white">
                    <GiBookshelf color='white' size='5rem' />
                    <p >RESUME</p>
                </a>
                <a href="#skill" className="w3-bar-item w3-button w3-padding-large w3-hover-black w3-text-white">
                    <GiBrain color='white' size='5rem' />
                    <p >SKILL</p>
                </a>
                <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black w3-text-white">
                    <GiCandlestickPhone color='white' size='5rem' />
                    <p>CONTACT</p>
                </a>
            </nav>

        </div>
    )
}

export default Menu;