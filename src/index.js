import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from './component/layout/layout';
import Home from './pages/home/home';
import Generator from './pages/generator/generador';



const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/generator" element={<Generator/>} />
          </Routes>
        </Layout>
      </Router>
);

reportWebVitals();
