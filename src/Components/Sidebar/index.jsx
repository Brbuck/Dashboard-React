import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom'

import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFileWord } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

function Sidebar() {
    return (
        <div className='navbar'>
            <Link to='/add-products'><span><RiAddFill /></span> add product</Link>
            <Link to='/'><span><IoAnalytics /></span> analitycs</Link>
            <Link to='/customers'><span><BsFillPersonFill /></span> customers </Link>
            <Link to='/'><span><MdOutlineMarkEmailRead /></span> messages</Link>
            <Link to='/'><span><AiFillFileWord /></span> orders</Link>
            <Link to='/products'><span><MdOutlineProductionQuantityLimits /></span> products</Link>
            <Link to='/'><span><MdOutlineReport /></span> reports</Link>
            <Link to='/'><span><AiTwotoneSetting /></span> settings</Link>
            <Link to='/'><span><BiLogIn /></span> log out</Link>
        </div>
    );
}

export default Sidebar;