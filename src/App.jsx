import React from 'react';
import QuestionSlider from './components/QuestionSlider';
import './App.css'; // 스타일링 필요 시

function App() {
  return (
    <div className="App">
      <header>
        <h1>질문에 답해주세요</h1>
       
      </header>
      <main>
        <QuestionSlider />
      </main>
    </div>
  );
}

export default App;
