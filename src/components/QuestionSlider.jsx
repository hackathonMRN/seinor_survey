import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router를 사용하여 페이지 이동
import styles from '../style/home.module.css';

const QuestionSlider = () => {
  const questions = [
    "오늘 기분이 좋으신가요?",
    "운동을 하셨나요?",
    "물을 충분히 마셨나요?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleNext = () => {
    if (currentQuestionIndex < questions.length ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestionIndex+1)
    }
  };

  const handleResult = () => {
    navigate('/result'); // 결과 페이지로 이동
  };

  return (
    <div className={styles.container}>
      {currentQuestionIndex < questions.length ? (
        <>
          <h2 className={styles.title}>{questions[currentQuestionIndex]}</h2>
          <div className={styles.grid}>
            <button className={styles.option} onClick={handleNext}>예</button>
            <button className={styles.option1} onClick={handleNext}>아니오</button>
          </div>
        </>
      ) : (
        <div className={styles.resultContainer}>
          <h2 className={styles.title}>모든 질문이 끝났습니다!</h2>
          <button className={styles.resultButton} onClick={handleResult}>
            결과 확인하기
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionSlider;