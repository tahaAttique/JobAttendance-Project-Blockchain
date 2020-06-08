import React from 'react';

const Navbar = () => {
        

    return (
       <nav className="nav-wrapper blue darken-3">
           <div className="container">
                <a className="brand-logo">Rockodile's Logo</a>
                <ul className="right">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
           </div>
       </nav>
        
    )
}

export default Navbar;