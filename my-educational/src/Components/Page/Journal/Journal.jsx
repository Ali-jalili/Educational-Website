import React from 'react';
import './Journal.css'
import Navbar from '../../Navbar/Navbar'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'

import { weblog } from "../../../Context/Data";

const Journal = () => {
    return (
        <>

            <Navbar
            />

            <Header
                text2={'Blog Post'}
                backgroundImage='Img/lilartsy-333oj7zFsdg-unsplash.jpg'
                text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi.'} />

            <main className='main-blog'>
                <section className='section-blog' id='section-blog'>

                    <div className='heading-text'>
                        <h3 className='title-heading-text-1'>OUR BLOG</h3>
                        <h2 className='title-heading-text-2'>Recent From Blog</h2>
                    </div>

                    <div className='container'>

                        <div className="contact-blog">

                            {weblog.map((item, id) => (

                                <div className='card-weblog' key={id}>

                                    <img src={item.cover} alt="" className="img-weblog" />

                                    <div className='heading-weblog'>

                                        <h2 className='title-weblog'>{item.title}</h2>
                                        <p className='desc-weblog'>{item.desc}</p>


                                    </div>




                                </div>

                            ))}


                        </div>

                    </div>



                </section>
            </main>

            <Footer />


        </>
    )
}

export default Journal