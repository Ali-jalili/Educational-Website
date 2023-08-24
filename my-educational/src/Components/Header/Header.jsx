
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = ({ text1, text2, text3, backgroundImage }) => {



    return (

        // <header className='header'>

        //     <Navbar />

        //     <section className='info-header container'>

        //         <div className='box-info'>

        //             <div className='heading'>
        //                 <h3 className='title-heading heading-text-1'>WELCOME TO ACADEMIA</h3>
        //                 <h1 className='title-heading heading-text-2'>Best Online Education Expertise</h1>

        //             </div>
        //             <p className='p-heading'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

        //             <div className='button-heading'>
        //                 <button className='btn-heading'>GET STARTED NOW <i class="fa fa-long-arrow-alt-right"></i></button>
        //                 <button className='btn-heading'>VIEW COURSE  </button>
        //             </div>



        //             <div className="social">

        //                 <ul className="may-social">

        //                     <li><a href="#" className='items-social'><i class='fa-brands fa-facebook'></i></a></li>
        //                     <li><a href="#" className='items-social'><i class='fa-brands fa-instagram'></i></a></li>
        //                     <li><a href="#" className='items-social'><i class='fa-brands fa-twitter'></i></a></li>
        //                     <li><a href="#" className='items-social'><i class='fa-brands fa-youtube'></i></a></li>

        //                 </ul>

        //             </div>



        //         </div>




        //     </section>

        // </header>

        <header style={{
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            position: 'relative',
            top: '-8rem',
            width: '100 %',
        }}>

            <Navbar />

            <section className='info-header container'>

                <div className='box-info'>

                    <div className='heading'>
                        <h3 className='title-heading heading-text-1'>{text1}</h3>
                        <h1 className='title-heading heading-text-2'>{text2}</h1>

                    </div>
                    <p className='p-heading'>{text3}</p>

                    {/* 
                    <div className='button-heading'>
                        <button className='btn-heading'>GET STARTED NOW <i class="fa fa-long-arrow-alt-right"></i></button>
                        <button className='btn-heading'>VIEW COURSE  </button>
                    </div> */}



                    {/* <div className="social">

                        <ul className="may-social">

                            <li><a href="#" className='items-social'><i class='fa-brands fa-facebook'></i></a></li>
                            <li><a href="#" className='items-social'><i class='fa-brands fa-instagram'></i></a></li>
                            <li><a href="#" className='items-social'><i class='fa-brands fa-twitter'></i></a></li>
                            <li><a href="#" className='items-social'><i class='fa-brands fa-youtube'></i></a></li>

                        </ul>

                    </div> */}



                </div>




            </section>

        </header>
    )
}

export default Header;