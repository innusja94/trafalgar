import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import './App.css';
import CardsServices from './components/Services/CardServices/CardsServices';
import Providers from './components/Prodivers/Providers';
import Download from './components/Download/Download';
import CarouselBox from './components/CarouselBox/CarouselBox';


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
    </div>
  );
}

export default App;
