import React from 'react';
import './Main.css';
import { contactBoxData, dataWrapper, coursesCard, online, testimonal, weblog, price } from '../../../../Context/Data'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Main = () => {


    return (

        <main className='main'>

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

                                        <img className='img-learn' src={item.image} alt="" />

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

            <section className='our-courses' id='our-courses'>

                <div className='heading-text'>
                    <h3 className='title-heading-text-1'>OUR COURSES</h3>
                    <h2 className='title-heading-text-2'>Explore Our Popular Online Courses</h2>
                </div>

                <div className='container'>

                    <div className='courses-Card'>

                        {coursesCard.slice(0, 3).map((item, id) => (
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

            <section className='Testimonial' id='Testimonial'>

                <div className='heading-text'>
                    <h3 className='title-heading-text-1'>TESTIMONIAL</h3>
                    <h2 className='title-heading-text-2'>Our Successful Students</h2>
                </div>

                <div className='container'>



                    <div className='contact-testimonial'>

                        {testimonal.slice(0, 3).map((item, id) => (

                            <div className='card-testimonial' key={id}>

                                <div className="title--testimonial">

                                    <img className='img-testimonial' src={item.cover} alt="" />

                                    <div className="text-title-testimonial">

                                        <h3 className="hed-testimonial">
                                            {item.name}

                                        </h3>

                                        <span className='text-testimonial'>
                                            {item.post}

                                        </span>


                                    </div>

                                </div>

                                <p className='p-testimonial'>

                                    {item.desc}

                                </p>

                            </div>


                        ))}

                    </div>




                </div>



            </section>

            <section className='section-blog' id='section-blog'>

                <div className='heading-text'>
                    <h3 className='title-heading-text-1'>OUR BLOG</h3>
                    <h2 className='title-heading-text-2'>Recent From Blog</h2>
                </div>

                <div className='container'>

                    <div className="contact-blog">

                        {weblog.slice(0, 3).map((item, id) => (

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

            <section className='section-pricing' id='section-pricing'>

                <div className='heading-text'>
                    <h3 className='title-heading-text-1'>OUR PRICING</h3>
                    <h2 className='title-heading-text-2'>Pricing & Packages</h2>
                </div>

                <div className="container">

                    <div className="contact-pricing">

                        {price.map((item, id) => (

                            <div className='cart-price' key={id}>

                                <div className='box-price'>

                                    <span className='name-price'>{item.name}</span>

                                    <h2 className='price-text'>{item.price}</h2>

                                    <p className='desc-price'>{item.desc}</p>

                                    <button className='btn-price'>GET START</button>

                                </div>




                            </div>
                        ))}





                    </div>

                </div>

            </section>

            <section className='section-newsletter'>

                <div className="container-newsletter">

                    <div className="container">

                        <div className='contact-newsletter'>

                            <div className='text-newsletter'>
                                <h2 className='title-newsletter'>Newsletter - Stay tune and get the latest update</h2>
                                <span className='desc-newsletter'>Far far away, behind the word mountains
                                </span>
                            </div>

                            <div className='box-input'>

                                <input className='input-newsletter' type="text" placeholder='Enter Email address' />

                                <button className='btn-newsletter ' type='submit'> <i class="fa-solid fa-paper-plane"></i></button>


                            </div>



                        </div>

                    </div>


                </div>

            </section>


        </main >
    )

}

export default Main; 