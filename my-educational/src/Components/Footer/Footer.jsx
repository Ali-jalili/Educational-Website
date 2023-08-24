import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer'>

            <div className='container'>

                <div className="contact-footer">

                    <div className="cart-footer-1">
                        <h2 className='title-footer'>ACADEMIA</h2>
                        <h3 className='text-footer'>ONLINE EDUCATION & LEARNING</h3>

                        <p className='deac-footer'>Our university is committed to providing high-quality education and a rich learning experience to all students, regardless of their location.</p>

                    </div>

                    <div className="cart-footer-2">

                        <h2 className='title-cart-1'>Adress</h2>

                        <div className='nav-cart'>

                            <span className='text-adres'><i class="fa-solid fa-location-dot"></i> St. Mountain View, San Francisco, California, USA</span>

                            <span className='phone'><i class="fa-solid fa-phone"></i> +2 392 3929 210</span>

                            <span className='email'><i class="fa-solid fa-envelope"></i> info@yourdomain.com</span>



                        </div>

                    </div>

                    <div className="cart-footer-3">
                        <h2 className='title-cart-1'>Explore</h2>
                        <ul className='footer-menu'>
                            <li className='footer-items'><a href="#our-courses">Our Courses</a></li>
                            <li className='footer-items'><a href="#online-courses">Online Courses</a></li>
                            <li className='footer-items'><a href="#Testimonial">Testimonial</a></li>
                            <li className='footer-items'><a href="#section-pricing">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="cart-footer-4">

                        <ul>
                            <li><a href="#" className='items-social-footer'><i class='fa-brands fa-facebook'></i></a></li>
                            <li><a href="#" className='items-social-footer'><i class='fa-brands fa-instagram'></i></a></li>
                            <li><a href="#" className='items-social-footer'><i class='fa-brands fa-twitter'></i></a></li>
                            <li><a href="#" className='items-social-footer'><i class='fa-brands fa-youtube'></i></a></li>
                        </ul>

                    </div>


                </div>

            </div>

        </footer>
    )
}

export default Footer;