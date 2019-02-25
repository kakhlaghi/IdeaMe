import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    //const user = JSON.parse(localStorage.getItem('user'))
    return(
        <div>
            <div >
                <Link to="/"><button className='newPostButton' >Home</button></Link>
                <Link to="/about"><button className='newPostButton'>About</button></Link>
                <Link to="/newpost"><button className='newPostButton'>New Post +</button></Link>
            </div>
        </div>    
    )
}

export default Header

