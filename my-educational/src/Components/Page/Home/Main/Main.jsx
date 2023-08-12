import React from 'react';
import './Main.css'

const Main = () => {
    return (

        <main className='main'>

            <section className='about-Home'>

                <div className='about-home-section container'>

                    <h2 className='title-about-home'>About Us</h2>


                    <div className="box-info-about">

                        <div className='imag-about'>

                            <img src="Img/About-img-home.jpg" alt="About-img-home" />

                        </div>


                        <div className="text-info-about">

                            <div className='heading-info-about'>
                                <h3 className='title-about-1'>LEARN ANYTHING</h3>
                                <h2 className='title-about-2'>Benefits About Online Learning Expertise</h2>
                            </div>

                            <div className='contact-box'>

                                <div className='my-box'>

                                    <div className='img'>
                                        <img src="img/storytelling.png" alt="" />
                                    </div>

                                    <div>

                                        <h3 className='box-title'>Online Courses</h3>
                                        <p className='p-box'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    </div>


                                </div>

                                <div className='my-box'>

                                    <div className='img'>
                                        <img src="img/diploma.png" alt="" />
                                    </div>

                                    <div>

                                        <h3 className='box-title'>Earn A Certificates</h3>
                                        <p className='p-box'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    </div>

                                </div>

                                <div className='my-box'>

                                    <div className='img'>
                                        <img src="img/athlete.png" alt="" />
                                    </div>

                                    <div>

                                        <h3 className='box-title'>
                                            Learn with Expert</h3>
                                        <p className='p-box'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    </div>

                                </div>



                            </div>





                        </div>

                    </div>

                </div>



            </section>

            {/* <section className='awrapper-home'>

                <div className='awrapper container'>

                    <div className='sub-data'>

                        <div className='data-box'>

                            <div className='data-box-icon'>
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>

                            <div className='data-box-text'>
                                <span>3,000</span>
                                <span>SUCCESS STORIES</span>
                            </div>
                        </div>

                        <div className='data-box'>

                            <div className='data-box-icon'>
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>

                            <div className='data-box-text'>
                                <span>320</span>
                                <span>TRUSTED TUTORS</span>
                            </div>
                        </div>

                        <div className='data-box'>

                            <div className='data-box-icon'>
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>

                            <div className='data-box-text'>
                                <span>1,000</span>
                                <span>SCHEDULES</span>
                            </div>
                        </div>

                        <div className='data-box'>

                            <div className='data-box-icon'>
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>

                            <div className='data-box-text'>
                                <span>120</span>
                                <span>COURSES</span>
                            </div>
                        </div>


                    </div>

                </div>


            </section> */}


        </main>
    )
}

export default Main