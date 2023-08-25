import React from 'react'

const Login = () => {
    return (

        <main>

            <section classNameName='login'>
                <div classNameName="container">

                    <div classNameName="login-container">
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

                        <a href="./Sign-Up.html" className="btn" >Sign Up</a>


                    </div>

                    <div className="login-imge">
                        <img src="Img/login-page.jpg" alt="login-page.jpg" />
                    </div>

                </div>
            </section>

        </main>

    )
}

export default Login;