// Importing required dependencies from React and React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components for Header, Footer, Homepage, Repositories, About, and Contact
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Repositories from './components/Repositories';
import About from './components/About';
import Contact from './components/Contact';

// Importing the main CSS file for the application
import './App.css';

// The main functional component 'App'
function App() {
  return (
    // Wrapping the entire application with the 'Router' for navigation
    <div className="wrapper">
      <Router>
        {/* Rendering the Header component */}
        <Header />

        {/* Configuring routes for different components */}
        <Routes>
          {/* Route for the homepage, displaying the 'Homepage' component */}
          <Route path="/" element={<Homepage />} />

          {/* Route for the 'About' page, displaying the 'About' component */}
          <Route path="/about" element={<About />} />

          {/* Route for the 'Projects' page, displaying the 'Repositories' component */}
          <Route path="/projects" element={<Repositories />} />

          {/* Route for the 'Contact' page, displaying the 'Contact' component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Rendering the Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

// Exporting the 'App' component to be used as the root component for the React application
export default App;
