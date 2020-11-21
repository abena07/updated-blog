import React from 'react'
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <div>


            <nav>
                <ul>
                    <Link to="/">{""}<li>Sign Up</li></Link>
                   <Link to="/login">{""} <li>Log In</li></Link>
                   
                </ul>
                </nav>
                </div>

    )
}

export default NavBar
