import React from 'react';
import './Home.css';

// Navigation component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Brief description about your company/website.</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Main Home component
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop destination for amazing services</p>
          <button className="cta-button">Get Started</button>
        </section>
        
        <section className="features">
          <div className="feature">
            <h2>Feature 1</h2>
            <p>Description of feature 1</p>
          </div>
          <div className="feature">
            <h2>Feature 2</h2>
            <p>Description of feature 2</p>
          </div>
          <div className="feature">
            <h2>Feature 3</h2>
            <p>Description of feature 3</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
