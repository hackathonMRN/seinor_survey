// components/QuestionItem.js
import React from 'react';
import styles from '../styles/home.module.css'; // index.js와 동일한 스타일 사용 (선택 사항)

function QuestionItem({ question, onAnswer }) {
  return (
    <div className={styles.container}> {/* 필요에 따라 스타일 변경 */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          {question.id}. {question.text}
        </h1>

        <div className={styles.grid}>
          <button className={styles.card} onClick={() => onAnswer(question.id, '예')}>
            <h2>예</h2>
          </button>

          <button className={styles.card} onClick={() => onAnswer(question.id, '아니요')}>
            <h2>아니요</h2>
          </button>
        </div>
      </main>
    </div>
  );
}

export default QuestionItem;