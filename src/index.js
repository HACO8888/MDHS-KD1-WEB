import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './components/new-index.css'
import './components/tailwind.css'
import { CookiesProvider } from "react-cookie";
// import './components/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Navbar />
      <App />
      <br />
      <br />
      <br />
      <Footer />
    </CookiesProvider>
  </React.StrictMode>
);
