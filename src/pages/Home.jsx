import React from 'react';
import "./css/Home.css";
import Footer from '../components/Footer/Footer';
// import TopNav from '../components/TopNav/TopNav';
import digitization from '../assets/images/digitization.jpg';

const Home = () => {
  return (
    <>
        <img 
        src={digitization}
        className="main-background"
        alt="background"
        />
        <Footer/>
    </>
  )
}

export default Home