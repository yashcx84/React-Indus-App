import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './Router/RouterApp';
import Header from './Components/Header';
import Footer from './Components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
}
