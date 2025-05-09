import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionSlider from './components/QuestionSlider';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionSlider />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;