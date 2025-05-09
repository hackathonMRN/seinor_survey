import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import QuestionSlider from './components/QuestionSlider';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<QuestionPage />} /> {/* QuestionPage 컴포넌트 사용 */}
        <Route path="/slider" element={<QuestionSlider />} /> {/* QuestionSlider 컴포넌트 사용 */}
        <Route path="/result" element={<ResultPage />} /> {/* ResultPage 컴포넌트 사용 */}
      </Routes>
    </Router>
  );
}

export default App;