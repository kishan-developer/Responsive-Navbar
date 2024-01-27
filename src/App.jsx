// App.js
import React from 'react';
import Navbar from './Component/Navbar';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Your other components/content goes here */}
      <Routes>
        {/* <Route to='/' element={<Home/>} /> */}
      </Routes>
    </div>
  );
};

export default App;