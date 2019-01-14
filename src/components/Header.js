import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import About from './About'


const Header = () => {
    //const user = JSON.parse(localStorage.getItem('user'))
    return(
        <div>
            navButtons = <div>
                <Link to="/about">About</Link>
                <Link to="/newpost"></Link>
            </div>
        </div>    
    )
}

export default Header

