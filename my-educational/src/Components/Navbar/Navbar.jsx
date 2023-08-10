import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [Toggle, showMenu] = useState(false);



    return (

        <section className='section-navbar '>

            <nav className='navbar container'>

                <div className="menu ">

                    <div className='logo'>
                        <a href="#" className='nav-logo'><i class="fa-solid fa-building-columns"></i></a>
                    </div>

                    <ul className={Toggle ? 'menu-link show' : 'menu-link'}>

                        <li className='item-menu'><Link to="/">Home</Link></li>
                        <li className='item-menu'><Link to="/courses">All Courses</Link></li>
                        <li className='item-menu'><Link to="/about">About</Link></li>
                        <li className='item-menu'><Link to="/team">Team</Link></li>
                        <li className='item-menu'><Link to="/pricing">Pricing</Link></li>
                        <li className='item-menu'><Link to="/journal">Journal</Link></li>
                        <li className='item-menu'><Link to="/contact">Contact</Link></li>

                        <div className='close-btn' onClick={() => showMenu(!Toggle)}>
                            <i class="fa-solid fa-xmark close-menu"></i>
                        </div>

                    </ul>

                    <div className={Toggle ? 'Login-btn show-btn-logo' : 'Login-btn'}>
                        <a href='#' className='btn-start'>Log in </a>
                    </div>

                    <div className='show-btn' onClick={() => showMenu(!Toggle)}>
                        <i class="show-menu fa-solid fa-bars"></i>
                    </div>

                </div>

            </nav>

        </section>

    )
}

export default Navbar;