import React from 'react'
import { FaBuilding, FaUsers, FaUserFriends, FaClock } from "react-icons/fa";

import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
// import constructionImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import PopupModal from './PopupModal';
import Hero from './Hero';
import SocialSidebar from './SocialSidebar';
import About from './About';
// import Aboutc from '../common/Aboutc';
import PricingWithPopup from './PricingWithPopup';

const Home = () => {
  return (
    <>

    {/* socialsidebar Section */}
    {/* <SocialSidebar/> */}
    

    {/* popmodule Section */}

    <PopupModal/>
        {/* Header Section */}
      <Header/>
      <main>
        {/* Hero section */}
        <Hero/>
        {/* About section */}
        {/* <Aboutc/> */}
        {/* Services section */}
        {/* <section className='section-3 bg-light'>
      <div className='container-fluid py-3'>
        <div className='section-header text-center'>
          <span>Our Services</span>
          <h2>What we offer</h2>
          <p>
            Explore our suite of AI-driven tools tailored for real estate professionals and investors.
          </p>
        </div>
        <div className='row pt-4'>
          {services.map(service => (
            <div className='col-md-4 col-lg-4 mb-4' key={service.id}>
              <div className='item h-100 shadow-sm rounded overflow-hidden'>
                <div className='service-image'>
                  <img src={service.image} className='w-100' alt={service.title} />
                </div>
                <div className='service-body p-3 bg-white'>
                  <div className='Service-title mb-2'>
                    <h3>{service.title}</h3>
                  </div>
                  <div className='service-content'>
                    <p>{service.description}</p>
                  </div>
                  <a href='#' className='btn btn-primary mt-2'>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}


      {/* why choose us */}


      


        {/* Projects section */}


      {/* pricing */}

      {/* <Pricing/> */}
      <PricingWithPopup/>

        {/* Testimonials Section */}

      </main>

      {/* Footer Section */}
      <Footer/>

    </>
  )
}

export default Home;
