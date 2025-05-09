import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/home.module.css';

const QuestionSlider = () => {
  const navigate = useNavigate();

  // 질문 흐름 정의
  const questionFlow = {
    1: {
      text: "매일 출근하거나 정해진 스케줄을 따르는 것이 부담스럽진 않으신가요?",
      options: {
        네: 10, // 노인역량활용사업 시작
        아니요: 2,
      },
    },
    2: {
      text: "단순한 도움보다는 실제 ‘일하는 느낌’을 받고 싶으신가요?",
      options: {
        네: 20, // 공동체사업단 시작
        아니요: 30, // 공익활동 시작
      },
    },
    // 공동체사업단
    20: {
      text: "커피를 직접 만들어보고 판매하는 일이 괜찮으신가요?",
      options: {
        네: '카페#055양산시청비즈니스센터점사업',
        아니요: 21,
      },
    },
    21: {
      text: "판매 및 정리 중심의 매점 운영은 어떠신가요?",
      options: {
        네: '우리동네매점, 북카페',
        아니요: 22,
      },
    },
    22: {
      text: "누룽지나 뻥튀기처럼 전통 간식을 만들어보는 일은 어떠신가요?",
      options: {
        네: '우리동네바삭애',
        아니요: 23,
      },
    },
    23: {
      text: "밥과 반찬을 준비하는 도시락 작업은 괜찮으신가요?",
      options: {
        네: '고운찬도시락사업',
        아니요: 24,
      },
    },
    24: {
      text: "지정된 주소로 전단지를 붙이거나 소형 물품을 배송하는 일이 가능하신가요?",
      options: {
        네: '시보배송사업',
        아니요: 25,
      },
    },
    25: {
      text: "가게 안에서 물건을 정리하고 판매하는 일은 괜찮으신가요?",
      options: {
        네: '우리동네편의점',
        아니요: '공동체사업단 외 활동 추천',
      },
    },
    // 공익활동
    30: {
      text: "활동하신다면, 어디에서 활동하는 것이 더 편하신가요?",
      options: {
        실내: 31,
        실외: 35,
      },
    },
    31: {
      text: "실내에서 주로 환경을 정리하거나 깨끗하게 유지하는 활동이 편하시나요?",
      options: {
        네: '공공복지시설지원봉사, 공공시설환경봉사',
        아니요: 32,
      },
    },
    32: {
      text: "아이들의 식사 시간에 도움을 주는 활동에 관심 있으신가요?",
      options: {
        네: '고운맘급식도우미',
        아니요: 33,
      },
    },
    33: {
      text: "사람이 많은 곳에서 교통 정리나 시장 안내 도우미 역할을 해보시겠어요?",
      options: {
        네: '우리동네안전지킴이, 스쿨존실버봉사단',
        아니요: 34,
      },
    },
    34: {
      text: "재활용품 분류나 자원 순환 캠페인 활동에 동참하고 싶으신가요?",
      options: {
        네: '동네마당재활용, 우리동네자원사랑서포터즈',
        아니요: 1, // 처음으로 되돌림
      },
    },
    35: {
      text: "자연 속에서 산책하듯 활동하면서 환경을 가꾸는 일이 즐거우신가요?",
      options: {
        네: '공원안전지킴이1·2, 야생화가꾸기, 양산천지지킴이',
        아니요: '우리동네안전지킴이, 스쿨존실버봉사단',
      },
    },
    // 노인역량활용사업
    10: {
      text: "아이들과 함께하는 활동에 관심이 있으신가요?",
      options: {
        네: '우리아이단디돌봄1, 우리아이단디돌봄2, 지역아동센터연계지원',
        아니요: 11,
      },
    },
    11: {
      text: "아동의 생태체험 교육이나 텃밭 가꾸기를 도와주는 활동은 어떠신가요?",
      options: {
        네: '꿈나무생태학습도우미',
        아니요: 12,
      },
    },
    12: {
      text: "사무보조나 민원 응대, 기관 업무 지원 같은 행정 활동이 익숙하신가요?",
      options: {
        네: '공공행정업무지원',
        아니요: 13,
      },
    },
    13: {
      text: "어르신을 돌보는 복지서비스 활동에 관심이 있으신가요?",
      options: {
        네: '노인복지시설지원',
        아니요: 14,
      },
    },
    14: {
      text: "장애인시설에서 생활지원 및 환경정리 활동이 괜찮으신가요?",
      options: {
        네: '실버장애인케어+plus',
        아니요: 15,
      },
    },
    15: {
      text: "다양한 기관이나 장소(도서관, 우체국, 복지센터 등)를 오가며 업무 지원을 하셔도 괜찮으신가요?",
      options: {
        네: '공공행정업무지원, 시니어안전서포터즈',
        아니요: '실내 고정근무 또는 보육 관련 활동 고려',
      },
    },
  };

  const [currentId, setCurrentId] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questionFlow[currentId];
    const next = currentQuestion.options[selectedOption];

    setAnswers((prev) => ({ ...prev, [currentId]: selectedOption }));

    // 결과면 바로 navigate
    if (typeof next === 'string' && !questionFlow[next]) {
      navigate('/result', { state: { recommendation: next } });
      return;
    }

    // 다음 질문이 있다면 이동
    setCurrentId(next);
  };

  const question = questionFlow[currentId];

  return (
    <div className={styles.container}>
      {question ? (
        <>
          <h2 className={styles.title}>{question.text}</h2>
          <div className={styles.grid}>
            {Object.entries(question.options).map(([optionText, value], index) => (
              <button
                key={optionText}
                className={
                  index === 0
                    ? styles.option // 첫 번째 버튼(왼쪽)은 초록색
                    : styles.option1 // 두 번째 버튼(오른쪽)은 빨간색
                }
                onClick={() => handleAnswer(optionText)}
              >
                {optionText}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.resultContainer}>
          <h2 className={styles.title}>모든 질문이 끝났습니다!</h2>
          <button className={styles.resultButton} onClick={() => navigate('/result')}>
            결과 확인하기
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionSlider;