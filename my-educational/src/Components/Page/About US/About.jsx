import React from 'react'
import './About.css'
import { contactBoxData, dataWrapper } from '../../../Context/Data'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Faq from '../../Faq/Faq'


const About = () => {
    return (
        <>



            <Header text2={'About Us'}
                backgroundImage='Img/about-pag.jpg'
                text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque'}
            />

            <main className='main-about'>

                <section className='about-Home'>

                    <div className='about-home-section container'>


                        <div className='heading-info-about'>
                            <h3 className='title-heading-text-1'>LEARN ANYTHING</h3>
                            <h2 className='title-heading-text-2'>Benefits About Online Learning Expertise</h2>
                        </div>




                        <div className="box-info-about">

                            <div className='about-img-home'>
                                <img src="Img/chris-.jpg" alt="" />
                            </div>


                            <div className="text-info-about">


                                <div className="contact-box">
                                    {contactBoxData.map((item, id) => (
                                        <div className="my-box" key={id}>

                                            <img className='img-learn' src={item.img} alt="" />

                                            <div>
                                                <h3 className="box-title">{item.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>



                </section>


                <section className='awrapper-home' id='awrapper'>

                    <div className='awrapper container'>

                        <div className="sub-data">

                            {dataWrapper.map((item, id) => (
                                <div className="data-box" key={id}>
                                    <div className="data-box-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="data-box-text">
                                        <span>{item.value}</span>
                                        <span>{item.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>


                </section>

                <Faq />

            </main>



            <Footer />

        </>
    )
}

export default About;