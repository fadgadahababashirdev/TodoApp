import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/List" element={<List/>}></Route>
      </Routes>
      {/* <LandingPage/> */}
    </div>
  );
};

export default App;
