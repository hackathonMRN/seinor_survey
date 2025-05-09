import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const recommendation = location.state?.recommendation || "추천 결과가 없습니다.";

  return (
    <div className="App">
      <header>
        <h1>결과 페이지</h1>
      </header>
      <main>
        <p>추천 결과: <strong>{recommendation}</strong></p>
      </main>
    </div>
  );
}

export default ResultPage;