import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionSlider from './components/QuestionSlider';
import ResultPage from './components/ResultPage';
import QuestionPage from './components/QuestionPage';
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