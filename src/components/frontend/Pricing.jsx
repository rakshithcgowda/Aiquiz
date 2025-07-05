import React from 'react';

function Pricing({ onInquire }) {
  return (
    <section className="section-pricing bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="heading text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Quiz Generator Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the power of AI to create engaging quizzes and enhance learning experiences.
          </p>
        </div>

        {/* Packages Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter Plan</h3>
            <p className="price text-3xl font-bold text-gray-900 mb-4">
              $19/month <span className="text-base font-normal text-gray-500">(billed annually)</span>
            </p>
            <hr className="border-gray-200 mb-6" />
            <ul className="features flex-1 mb-6">
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Basic AI Quiz Generation
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                10 Quizzes/Month
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Email Support
              </li>
            </ul>
            <div className="button-group flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="btn-primary bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={onInquire}
              >
                Inquire Now
              </button>
              <button className="btn-secondary border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="card popular bg-white rounded-lg shadow-lg p-6 flex flex-col relative">
            <span className="popular-badge absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
              Most Popular
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pro Plan</h3>
            <p className="price text-3xl font-bold text-gray-900 mb-4">
              $49/month <span className="text-base font-normal text-gray-500">(billed annually)</span>
            </p>
            <hr className="border-gray-200 mb-6" />
            <ul className="features flex-1 mb-6">
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Advanced AI Quiz Generation
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                50 Quizzes/Month
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Priority Email & Chat Support
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Analytics Dashboard
              </li>
            </ul>
            <div className="button-group flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="btn-primary bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={onInquire}
              >
                Inquire Now
              </button>
              <button className="btn-secondary border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Plan</h3>
            <p className="price text-3xl font-bold text-gray-900 mb-4">Custom Pricing</p>
            <hr className="border-gray-200 mb-6" />
            <ul className="features flex-1 mb-6">
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Full AI Quiz Generation Suite
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Unlimited Quizzes
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Dedicated Account Manager
              </li>
              <li className="flex items-center mb-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Custom API Access
              </li>
            </ul>
            <div className="button-group flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="btn-primary bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={onInquire}
              >
                Inquire Now
              </button>
              <button className="btn-secondary border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* T&C */}
        <div className="terms text-center mt-8">
          <p className="text-sm text-gray-500">* Terms & Conditions Apply</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;