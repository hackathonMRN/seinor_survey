import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ResultPage() {
  const location = useLocation();
  const recommendation = location.state?.recommendation || "추천 결과가 없습니다.";
  const [resultData, setResultData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        console.log('Current recommendation:', recommendation);
        
        const response = await axios.get('http://localhost:3000/api/image-text-pairs');
        console.log('API Response:', response.data);
        
        const data = response.data;
        // 쉼표로 구분된 여러 결과 처리
        const recommendations = recommendation.split(', ').map(r => r.trim());
        console.log('Split recommendations:', recommendations);
        
        // 모든 일치하는 결과 찾기
        const matchedResults = data.filter(item => 
          recommendations.some(rec => item.text === rec)
        );
        
        console.log('Matched results:', matchedResults);
        
        if (matchedResults.length > 0) {
          setResultData(matchedResults);
        } else {
          console.log('No matching results found');
          setError('일치하는 결과를 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, [recommendation]);

  return (
    <div className="App">
      <header>
        <h1>결과 페이지</h1>
      </header>
      <main>
        {error ? (
          <p className="error-message">{error}</p>
        ) : resultData.length > 0 ? (
          <div className="result-container">
            <h2>추천 결과</h2>
            <div className="results-grid">
              {resultData.map((result, index) => (
                <div key={index} className="result-content">
                  <img 
                    src={result.image_url} 
                    alt={result.text} 
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
                  />
                  <p className="result-text">{result.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>추천 결과를 불러오는 중...</p>
        )}
      </main>
    </div>
  );
}

export default ResultPage;