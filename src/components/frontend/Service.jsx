import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import quizHero from '../../assets/images/service-hero.jpg'; // Placeholder for quiz-themed hero image
import quizCreatorImg from '../../assets/images/hero-ai.svg'; // Placeholder for quiz creator image
import questionAnalyzerImg from '../../assets/images/hero-ai.svg'; // Placeholder for question analyzer image
import quizCustomizerImg from '../../assets/images/hero-ai.svg'; // Placeholder for quiz customizer image

const quizServices = [
  {
    id: 1,
    title: 'Quiz Generator',
    image: quizCreatorImg,
    description: 'Create engaging quizzes automatically based on your content or subject area.',
    route: '/quiz-generator'
  },
  {
    id: 2,
    title: 'Quiz Analyzer',
    image: questionAnalyzerImg,
    description: 'Analyze quiz results with AI to gain insights into performance and learning gaps.',
    route: '/quiz-analyzer'
  },
  {
    id: 3,
    title: 'Custom Quiz Builder',
    image: quizCustomizerImg,
    description: 'Design tailored quizzes with AI assistance for specific learning objectives.',
    route: '/custom-quiz'
  },
]

export default function QuizService() {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="section-7">
        <div
          className="hero d-flex align-items-center"
          style={{
            backgroundImage: `url(${quizHero})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            height: '400px',
            color: 'yellow',
          }}
        >
          <div className="container">
            <div className="text-left">
              <span style={{ display: 'block', fontWeight: 600 }}>
                Smarter Learning Solutions
              </span>
              <h1>AI Quiz Tools</h1>
              <p>
                AI-powered solutions to create, analyze, <br />
                and customize quizzes for education and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Services Flip Boxes */}
      <section className="section-services py-5">
        <div className="container text-center">
          <span className="d-block text-uppercase text-secondary mb-2">
            Our AI Quiz Tools
          </span>
          <h2 className="mb-3">What We Offer</h2>
          <p className="mb-5">
            Discover our suite of AI-driven quiz tools designed for educators, trainers, and learners.
          </p>

          <div className="row g-4">
            {quizServices.map((service) => (
              <div className="col-md-4" key={service.id}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div
                      className="flip-card-front d-flex align-items-end"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover'
                      }}
                    >
                      <h3 className="flip-card-title w-100 text-white p-3 m-0">
                        {service.title}
                      </h3>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate(service.route)}
                      >
                        Try Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}