import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './home.css';


function Home() {
    return (
        <div className = "home">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home
