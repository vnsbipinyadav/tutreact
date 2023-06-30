import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return ( 
        <>
        <Navbar />
        <Routes >
        <Route exact path = "/tutreact" element = { < Home /> }/> 
        <Route path = "/about" element = { < About /> }/> 
        <Route path = "/tutorial"element = { < Tutorial /> }/> 
        <Route path = "/contact" element = { < Contact /> }/>
        </Routes> 
        <Footer />
        </>
    )
}

export default App;