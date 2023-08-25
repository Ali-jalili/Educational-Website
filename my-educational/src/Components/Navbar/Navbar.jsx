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

                    <div className={Toggle ? 'box-nav show' : 'box-nav'}>

                        <ul className='menu-link'>

                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/">Home</Link></li>
                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/courses">All Courses</Link></li>
                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/about">About</Link></li>
                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/team">Team</Link></li>

                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/journal">Journal</Link></li>
                            <li className='item-menu' onClick={() => showMenu(false)}><Link to="/contact">Contact</Link></li>


                        </ul>

                        <div className='close-btn' onClick={() => showMenu(!Toggle)}>
                            <i class="fa-solid fa-xmark close-menu"></i>
                        </div>

                    </div>



                    <div className="parent-element">
                        <div className={Toggle ? 'Login-btn show-btn-logo' : 'Login-btn'}>
                            <Link onClick={() => showMenu(false)} to='/login' className="btn-start">Log in</Link>
                        </div>
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