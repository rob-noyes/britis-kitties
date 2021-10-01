import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header
        navbarOpen={navbarOpen}
        toggle={handleToggle}
        closeMenu={closeMenu}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
