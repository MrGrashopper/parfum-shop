import React from 'react';
import { Nav, Logo } from './styled-navbar';
import { Link } from "react-router-dom";

function Navbar() {
    const logo = "https://cdn.flaconi.de/themes/flaconi/assets/20210504070645/images/svg/flaconi-logo.svg";
    
    return (
        <div>
            <Nav>
                <Link to="/">
                    <Logo>
                        <img src={logo} alt=""/>
                    </Logo>
                </Link>
            </Nav>
        </div>
    )
}

export default Navbar
