import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Stylish Single-Page Website</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to building amazing websites. Our goal is to provide top-quality design and functionality.
          </p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <div className="service-container">
            <div className="service-card">
              <h3>Web Design</h3>
              <p>Create visually appealing and user-friendly websites.</p>
            </div>
            <div className="service-card">
              <h3>Development</h3>
              <p>Build robust and scalable web applications.</p>
            </div>
            <div className="service-card">
              <h3>Consulting</h3>
              <p>Provide expert advice to enhance your online presence.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Connect with us on:<a href="https://www.instagram.com/creat_ivewebworks" target="_blank">Instagram</a></p>
          <p>Or</p>
          <p><a href="https://wa.me/9789970720" target="_blank">Chat on WhatsApp</a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;
