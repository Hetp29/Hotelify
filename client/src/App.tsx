import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Layout from './Design/Layout'


const App =()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );

  
};

export default App
