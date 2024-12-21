import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeFactory from '../factories/pages/home/HomeFactory';
import LoginFactory from '../factories/pages/login/LoginFactory';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomeFactory} />
        <Route path="/login" Component={LoginFactory} />
      </Routes>
    </Router>
  );
};

export default AppRouter;