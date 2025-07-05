import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-3'>
            <h2 className='mb-2'>Company</h2>
            <div className='pe-5'>
              <p>Our company is dedicated to revolutionizing education with AI-powered quiz tools. We specialize in creating, analyzing, and customizing quizzes to enhance learning experiences worldwide.</p>
            </div>  
          </div>

          <div className='col-md-3'>
            <h3>Our Services</h3>
            <ul>
              <li><a href="/quiz-generator">Quiz Generator</a></li>
              <li><a href="/quiz-analyzer">Quiz Analyzer</a></li>
              <li><a href="/custom-quiz">Custom Quiz Builder</a></li>
              <li><a href="/quiz-reports">Quiz Performance Reports</a></li>
              <li><a href="/quiz-integration">Quiz API Integration</a></li>
            </ul>
          </div>

          <div className='col-md-3'>
            <h3 className='mb-2'>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className='col-md-3'>
            <h3 className='mb-2'>Contact Us</h3>
            <ul>
              <p>456, Learning Lane, Edu City, GHI Country</p>
              <p>Email: support@aiquizgen.com</p>
            </ul>
          </div>
          <hr />
          <div className='text-center pt-4'>
            © 2025 AIQuizGen. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer