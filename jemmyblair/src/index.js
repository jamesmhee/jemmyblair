import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Menu from './components/Menu';
import Frame from './components/Frame';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Education from './components/Education';
import Works from './components/Works';
import Contact from './components/Contact';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<FirstPage/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Education" element={<Education/>}/>
      <Route exact path="/Works" element={<Works/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
    </Routes>
    <Menu/>
    <Footer/>
  </BrowserRouter>
);

reportWebVitals();
