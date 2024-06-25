// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Products from './components/Products';
import AboutUs from './components/aboutus';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
