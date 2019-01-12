import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';


const Header = () => {
    //const user = JSON.parse(localStorage.getItem('user'))
    return(
        <div>
            navButtons = <div>
                <Link to="/signup"><Button>Sign Up</Button></Link>
                <Link to="/signin"><Button>Sign In</Button></Link>
            </div>
        </div>    
    )
}

export default Header

