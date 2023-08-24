import React from 'react';
import Main from './Main/Main';
import './Home.css'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header backgroundImage='Img/christin-hume-Hcfwew744z4-unsplash.jpg' text1={['WELCOME TO ACADEMIA']} text2={'Best Online Education Expertise'} text3={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} />
            <Main />
            <Footer />
        </>
    )
}

export default Home;