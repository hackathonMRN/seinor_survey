import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/home.module.css';

const QuestionSlider = () => {
  const navigate = useNavigate();

  // 초기 질문
  const initialQuestions = [
    {
      id: 1,
      text: "매일 출근하거나 정해진 스케줄을 따르는 것이 부담스럽진 않으신가요?",
      options: {
        네: "노인공익활동사업",
        아니요: "다음 질문",
      },
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers({ ...answers, [currentQuestion.id]: answer });

    // 다음 질문 로직
    if (currentQuestion.id === 1) {
      if (answer === "노인공익활동사업") {
        setQuestions([
          ...questions,
          {
            id: 2,
            text: "활동하신다면, 어디에서 활동하는 것이 더 편하신가요?",
            options: {
              실내: "실내 활동",
              실외: "실외 활동",
            },
          },
        ]);
      } else if (answer === "다음 질문") {
        setQuestions([
          ...questions,
          {
            id: 2,
            text: "단순한 도움보다는 실제 ‘일하는 느낌’을 받고 싶으신가요?",
            options: {
              네: "공동체사업단",
              아니요: "공익활동",
            },
          },
        ]);
      }
    } else if (currentQuestion.id === 2) {
      if (answer === "실내 활동") {
        setQuestions([
          ...questions,
          {
            id: 3,
            text: "실내에서 주로 환경을 정리하거나 깨끗하게 유지하는 활동이 편하시나요?",
            options: {
              네: "공공복지시설지원봉사, 공공시설환경봉사",
              아니요: "다음 질문",
            },
          },
        ]);
      } else if (answer === "실외 활동") {
        setQuestions([
          ...questions,
          {
            id: 3,
            text: "자연 속에서 산책하듯 활동하면서 환경을 가꾸는 일이 즐거우신가요?",
            options: {
              네: "공원안전지킴이1·2, 야생화가꾸기, 양산천지킴이",
              아니요: "다음 질문",
            },
          },
        ]);
      } else if (answer === "공동체사업단") {
        setQuestions([
          ...questions,
          {
            id: 3,
            text: "커피를 직접 만들어보고 판매하는 일이 괜찮으신가요?",
            options: {
              네: "카페#055 시리즈",
              아니요: "다음 질문",
            },
          },
        ]);
      } else if (answer === "공익활동") {
        setQuestions([
          ...questions,
          {
            id: 3,
            text: "활동하신다면, 어디에서 활동하는 것이 더 편하신가요?",
            options: {
              실내: "실내 활동",
              실외: "실외 활동",
            },
          },
        ]);
      }
    }

    // 다음 질문으로 이동
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleResult = () => {
    // 최종 추천 결과 계산
    const finalRecommendation = Object.values(answers).pop();
    setRecommendation(finalRecommendation);
    navigate('/result', { state: { recommendation: finalRecommendation } });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.container}>
      {currentQuestion ? (
        <>
          <h2 className={styles.title}>{currentQuestion.text}</h2>
          <div className={styles.grid}>
            {Object.entries(currentQuestion.options).map(([optionText, value]) => (
              <button
                key={optionText}
                className={styles.option}
                onClick={() => handleAnswer(value)}
              >
                {optionText}
              </button>
            ))}
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