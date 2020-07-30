import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import './App.css';
import CardsServices from './components/Services/CardServices/CardsServices';
import Providers from './components/Prodivers/Providers';
import Download from './components/Download/Download';
import CarouselBox from './components/CarouselBox/CarouselBox';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Slider from './components/CarouselBox/Slider/Slider';




function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <HomePage />
      <Services />
      <CardsServices />
      <Providers />
      <Download />
      <CarouselBox />
      <Slider />
      <CheckOut />
      <Footer />
    </div>
  );
}

export default App;
