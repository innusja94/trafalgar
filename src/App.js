import React from 'react';
import Header1 from './components/Header/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import './App.css';
import CardsServices from './components/Services/CardServices/CardsServices';
import Providers from './components/Prodivers/Providers';
import Download from './components/Download/Download';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';





function App() {
  return (
    <div className="app-wrapper">
      <Header1 />
      <HomePage />
      <Services />
      <CardsServices />
      <Providers />
      <Download />
      <Slider />
      <CheckOut />
      <Footer />
    </div>
  );
}

export default App;
