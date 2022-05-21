import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  return (
   <>
   <NavigationBar />
   <About />
   </>
  );
};

export default App;
