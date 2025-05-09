import React, { useState } from 'react';
import styles from '../style/home.module.css';
const QuestionSlider = () => {
  const questions = [
    "오늘 기분이 좋으신가요?",
    "운동을 하셨나요?",
    "물을 충분히 마셨나요?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("모든 질문이 끝났습니다!");
    }
  };

  return (
    <div className={styles.container}> {/* CSS Module 방식으로 수정 */}
      <h2 className={styles.title}>{questions[currentQuestionIndex]}</h2> {/* CSS Module 방식으로 수정 */}
      <div className={styles.grid}> {/* CSS Module 방식으로 수정 */}
        <button className={styles.option} onClick={handleNext}>예</button> {/* CSS Module 방식으로 수정 */}
        <button className={styles.option1} onClick={handleNext}>아니오</button> {/* CSS Module 방식으로 수정 */}
      </div>
    </div>
  );
};

export default QuestionSlider;