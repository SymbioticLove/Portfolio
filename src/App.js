// Importing required dependencies from React and React Router
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components for Header, Footer, Homepage, Repositories, About, and Contact
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Repositories from './components/Repositories/Repositories';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

// Importing the Provider and store
import { Provider } from 'react-redux';
import store from './redux/store';

// Importing the main CSS file for the application
import './App.css';

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// The main functional component 'App'
function App() {
  return (
    // Wrapping the entire application with 'Provider' for Redux
    <Provider store={store}>
      <div className="wrapper">
        <Router>
          {/* Rendering the Header component */}
          <Header />

          {/* Configuring routes for different components */}
          <Routes>
            {/* Route for the homepage, displaying the 'Homepage' component */}
            <Route
              path="/Portfolio"
              element={<Homepage scrollToTop={scrollToTop} />}
            />

            {/* Nested routes under the '/Portfolio' route */}
            <Route path="/Portfolio/about" element={<About />} />
            <Route path="/Portfolio/projects" element={<Repositories />} />
            <Route path="/Portfolio/contact" element={<Contact />} />

            {/* Route for any other path that doesn't match the above routes */}
            <Route path="*" element={<Homepage scrollToTop={scrollToTop} />} />
          </Routes>

          {/* Rendering the Footer component */}
          <Footer scrollToTop={scrollToTop} />
        </Router>
      </div>
    </Provider>
  );
}

// Exporting the 'App' component to be used as the root component for the React application
export default App;
