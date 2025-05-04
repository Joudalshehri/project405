import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home';
import Form from './pages/form';
import Lost from './pages/Lost';
import Support from './pages/Support';
import Account from './pages/Account';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
       
      </Routes>
    </Router>
  );
};

export default App;
