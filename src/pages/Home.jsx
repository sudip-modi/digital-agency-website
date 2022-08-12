import React from 'react';
import "./css/Home.css";
import Footer from '../components/Footer/Footer';
// import TopNav from '../components/TopNav/TopNav';
import digitization from '../assets/images/digitization.jpg';

const Home = () => {
  return (
    <div>
        <img 
        src={digitization}
        className="main-background"
        alt="background"
        />
        <Footer/>
    </div>
  )
}

export default Home