import React from 'react';
import './Main.css';

const Main = () => {

    let dataWrapper = [
        {
            id: 1,
            icon: "fa-solid fa-user-graduate",
            value: 3000,
            label: "SUCCESS STORIES"
        },
        {
            id: 2,
            icon: "fa-solid fa-chalkboard-user",
            value: 320,
            label: "TRUSTED TUTORS"
        },
        {
            id: 3,
            icon: "fa-solid fa-book-open",
            value: 1000,
            label: "SCHEDULES"
        },
        {
            id: 4,
            icon: "fa-solid fa-chalkboard",
            value: 120,
            label: "COURSES"
        },


    ]

    let contactBoxData = [

        {
            id: 1,
            image: "img/storytelling.png",
            title: "Online Courses"
        },
        {
            id: 2,
            image: "img/diploma.png",
            title: "Earn A Certificates"
        },
        {
            id: 3,
            image: "img/athlete.png",
            title: "Learn with Expert"
        }



    ]


    return (

        <main className='main'>

            <section className='about-Home'>

                <div className='about-home-section container'>

                    <h2 className='title-about-home'>About Us</h2>

                    <div className='heading-info-about'>
                        <h3 className='title-about-1'>LEARN ANYTHING</h3>
                        <h2 className='title-about-2'>Benefits About Online Learning Expertise</h2>
                    </div>




                    <div className="box-info-about">

                        <div className='about-img-home'>
                            <img src="Img/chris-.jpg" alt="" />
                        </div>


                        <div className="text-info-about">


                            <div className="contact-box">
                                {contactBoxData.map((item, id) => (
                                    <div className="my-box" key={id}>
                                        <div className="img">
                                            <img src={item.image} alt="" />
                                        </div>
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

            <section className='awrapper-home'>

                <div className='awrapper container'>

                    <div className="sub-data">
                        {/* The following loop iterates over the props `data` and renders a data box for each item. */}
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

            <section className='our-courses'>

                <div className='heading-text'>
                    <h3 className='title-heading-text-1'>OUR COURSES</h3>
                    <h2 className='title-heading-text-2'>Explore Our Popular Online Courses</h2>
                </div>

                <div className='container'>

                    <div className='courses-Card'>

                        <div className='item-courses'>

                            <div className='text-item-courses'>
                                <img src="Img/testing.png" alt="" />
                                <h3>Introducing to Software Engineering</h3>

                            </div>

                            <div className='box-Mentor'>
                                <img className='img-mentor' src="Img/Mentor-1.jpg" alt="" />
                                <span className='name-mentor'>Course instructor : Dani </span>
                            </div>


                            <div className='text-info'>
                                <span className='price'>$100 All Course</span>
                                <span className='lectures'>50 lectures (190 hrs)</span>
                            </div>

                            <button className='ENROLL'>ENROLL NOW!!</button>

                        </div>

                        <div className='item-courses'>

                            <div className='text-item-courses'>
                                <img src="Img/caption.png" alt="" />
                                <h3>Enhancing Adobe Photoshop</h3>

                            </div>

                            <div className='box-Mentor'>
                                <img className='img-mentor' src="Img/Mentor-2.jpg" alt="" />
                                <span className='name-mentor'>Course instructor : Valerie </span>
                            </div>




                            <div className='text-info'>
                                <span className='price'>$200 All Course</span>
                                <span className='lectures'>30 lectures (125 hrs)</span>
                            </div>

                            <button className='ENROLL'>ENROLL NOW!!</button>

                        </div>


                        <div className='item-courses'>

                            <div className='text-item-courses'>
                                <img src="Img/coding.png" alt="" />
                                <h3>Web Developers</h3>

                            </div>

                            <div className='box-Mentor'>
                                <img className='img-mentor' src="Img/Mentor-3.jpg" alt="" />
                                <span className='name-mentor'>Course instructor : Alexander </span>
                            </div>




                            <div className='text-info'>
                                <span className='price'>$150 All Course</span>
                                <span className='lectures'>40 lectures (180 hrs)</span>
                            </div>

                            <button className='ENROLL'>ENROLL NOW!!</button>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )

}

export default Main;