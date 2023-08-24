import React from 'react'
import './Allcoures.css';
import { coursesCard, online } from '../../../Context/Data'

import Navbar from '../../Navbar/Navbar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';



const Allcoures = () => {





    return (
        <>

            <Navbar />

            <Header
                text2={'All Courses'}
                backgroundImage='Img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg'
                text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi.'} />



            <main className='main-all-courses'>
                <section className='our-courses' id='our-courses'>

                    <div className='heading-text'>
                        <h3 className='title-heading-text-1'>OUR COURSES</h3>
                        <h2 className='title-heading-text-2'>Explore Our Popular Online Courses</h2>
                    </div>

                    <div className='container'>

                        <div className='courses-Card'>

                            {coursesCard.map((item, id) => (
                                <div className='item-courses' key={id}>

                                    <div className='text-item-courses'>
                                        <img src={item.coverImg} alt="" />
                                        <h3>{item.coursesName}</h3>

                                    </div>

                                    <div className='box-Mentor'>
                                        <img className='img-mentor' src={item.imgMentor} alt="" />
                                        <span className='name-mentor'>{item.nameMentor}</span>
                                    </div>


                                    <div className='text-info'>
                                        <span className='price'>{item.price}</span>
                                        <span className='lectures'>{item.totalTime}</span>
                                    </div>

                                    <button className='ENROLL'>ENROLL NOW!!</button>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                <section className='online-courses' id='online-courses'>

                    <div className='heading-text'>
                        <h3 className='title-heading-text-1'>COURSES</h3>
                        <h2 className='title-heading-text-2'>Browse Our Online Courses</h2>
                    </div>

                    <div className='container'>

                        <div className="contact-online-courses">

                            {online.map((item, id) => (

                                <div className="items-courses-online" key={id}>

                                    <div className='box-courses'>

                                        <img className='img-courses-online' src={item.cover} alt="" />
                                        <h3 className='title-courses-online'>{item.courseName}</h3>
                                        <span className='text--courses-online'>{item.course}</span>

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

export default Allcoures;