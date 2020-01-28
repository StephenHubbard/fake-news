import React from 'react';
import Header from './Components/Header';
import Routes from './Routes';
import Footer from './Components/Footer';




const App = () => (
  <div className="App">
    <Header />
    {Routes}
    <Footer />
  </div>
);

export default App;
