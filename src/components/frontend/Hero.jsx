import React from 'react';

function Hero() {
  return (
    <section className="hero-section bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & Buttons */}
          <div className="text-center md:text-left">
            <span className="block text-blue-400 text-xl md:text-2xl font-semibold mb-4">
              Welcome to AI Quiz Generator
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Create Smarter Quizzes with AI
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 max-w-lg">
              Leverage AI to generate engaging quizzes, assess knowledge, and enhance learning experiences effortlessly.
            </p>
            <div className="btn-group flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="btn-yellow my-2 mx-2 bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
                style={{ textDecoration: 'none' }}
              >
                Download Guide
              </a>
              <a
                href="#demo"
                className="btn-outline my-2 border border-blue-400 text-blue-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;