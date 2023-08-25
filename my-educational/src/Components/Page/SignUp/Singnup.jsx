import React from 'react'
import './Singup.css';


import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Singnup = () => {
    return (
        <>
            <Navbar />

            <main>



                <section class="login">

                    <div className='container'>

                        <div class="login-container">

                            <div className="left">
                                <h2>Welcome , Let's get strated</h2>
                                <p>Alread have account? <Link to="/login">Log In</Link></p>

                                <form action="">

                                    <label for="text">Full Name: </label>
                                    <input type="text" id="text" placeholder="Your Name" required />

                                    <label for="email">Enter your Email: </label>
                                    <input type="email" name="email" id="email" placeholder="yourmail@gamail.com" required />

                                    <label for="Phon">Phon: </label>
                                    <input type="tel" name="" id="Phon" placeholder="Enter your number" required />

                                    <label for="password">Enter your password: </label>
                                    <input type="password" name="password" id="password" placeholder="password" required />

                                    <input type="submit" value="Sing In" class="button" />



                                </form>



                            </div>

                            <div className='right'>

                                <div class="login-imge">
                                    <img src="Img/Singup-page.jpg" alt="Singup" />
                                </div>
                            </div>

                        </div>

                    </div>




                </section>

            </main>

        </>
    )
}

export default Singnup