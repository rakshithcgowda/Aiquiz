import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Aboutc from '../common/Aboutc'
import CEO from '../../assets/images/pexels-pixabay-220453.jpg';


const About = () => {
  return (
    <>
    <Header/>
            {/* Hero section */}
            <section className='section-7'>
          <div className='hero d-flex align-items-center '>
            <div className='container'>
              <div className='text-left'>
                <span>Quality. Integrity. Value.</span>
                <h1>About Us </h1>
                <p>We excel at transforming visions into reality <br />
                through outstanding craftsmanship and precise.</p>
                <div className='mt-4'>
                  {/* <a href="#contact" className='btn btn-primary'> Contact Now</a>
                  <a href="#projects" className='btn btn-secondary ms-2'> View Project</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About section */}
      <Aboutc/>
      {/* Our team section */}
      <section className="section-8 bg-light py-5">
      <div className="container">
        {/* Section Header */}
        <div className='section-header text-center'>
            <span>Team</span>
            <h2>Our Team</h2>
            <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
          </div>

        {/* Team Row */}
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="team-card">
              <img
                src={CEO}
                alt="team-1"
                className="img-fluid"
              />
              <div className="team-card-body">
                <h4>John Doe</h4>
                <span>CEO &amp; Founder</span>
                <div className="social-links mt-2">
                  <a
                    href="https://www.linkedin.com/in/JohnDoe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="team-card">
              <img
                src={CEO}
                alt="team-2"
                className="img-fluid"
              />
              <div className="team-card-body">
                <h4>Jane Smith</h4>
                <span>Project Manager</span>
                <div className="social-links mt-2">
                  <a
                    href="https://www.linkedin.com/in/JaneSmith"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="team-card">
              <img
                src={CEO}
                alt="team-3"
                className="img-fluid"
              />
              <div className="team-card-body">
                <h4>Robert Williams</h4>
                <span>Lead Engineer</span>
                <div className="social-links mt-2">
                  <a
                    href="https://www.linkedin.com/in/RobertWilliams"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="team-card">
              <img
                src={CEO}
                alt="team-4"
                className="img-fluid"
              />
              <div className="team-card-body">
                <h4>Emily Johnson</h4>
                <span>Architect</span>
                <div className="social-links mt-2">
                  <a
                    href="https://www.linkedin.com/in/EmilyJohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default About
