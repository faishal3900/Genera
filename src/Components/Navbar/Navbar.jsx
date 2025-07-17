import React from 'react'
import { assets } from '../../assets/assets'
import './navbarCss.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={assets.GENERA_HORIZONTAL} alt="" />
            </div>
            <div className="navbar-right">
                <div className="navbar-right-box">
                    <h4>I. A.</h4>
                </div>
                <div className='navbar-right-menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
