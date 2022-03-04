import React from 'react';
import './styles.scss'

import Avatar from '../../assets/avatar.jpg';
import { CgMenuGridR } from "react-icons/cg";

function Header({ togle }) {
    return (
        <header>
            <span onClick={togle}><CgMenuGridR /></span>
            <div>
                <span>Hey Admin, welcome back </span>
                <span><img src={Avatar} alt='avatar' /></span>
            </div>
        </header>
    );
}

export default Header;