import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Pages/Home';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
