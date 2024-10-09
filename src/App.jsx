// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
