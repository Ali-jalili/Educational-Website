import React from 'react'
import './Login.css'
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <>

            <header>
                <Navbar />
            </header>

            <main>

                <section className='login'>

                    <div className="container">


                        <div className="login-container">

                            <div className='left'>

                                <h2>login To Continue</h2>
                                <p>Log in with yout data that you entered  during your rehistration</p>

                                <form>
                                    <label htmlFor="email">Enter your Email: </label>
                                    <input type="email" name="email" id="email" placeholder="yourmail@gamail.com" required />
                                    <label htmlFor="password">Enter your password: </label>
                                    <input type="password" name="password" id="password" placeholder="password" required />

                                    <input type="submit" value="Log In" className="button" />
                                    <a href="#">Forget Passworda?</a>
                                </form>

                                <Link to='/singnup' className="btn" >Sign Up</Link>

                            </div>

                            <div className='right'>
                                <div className="login-imge">
                                    <img src="Img/login-page.jpg" alt="login-page.jpg" />
                                </div>
                            </div>




                        </div>



                    </div>
                </section>

            </main>
        </>




    )
}

export default Login;