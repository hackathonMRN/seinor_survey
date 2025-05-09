import React from 'react';
import QuestionSlider from './QuestionSlider'; // QuestionSlider 컴포넌트 import
import "../App.css"

function QuestionPage() {
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

export default QuestionPage;