import { questions } from './questions.js';

// 상태 관리 변수
let selectedLevel = 'beginner'; // 현재 선택한 레벨
let unlockedLevels = ['beginner']; // 해제된 레벨 목록
let activeQuestions = []; // 현재 테스트 진행 중인 10개의 무작위 질문 목록
let currentQuestionIndex = 0; // 현재 문제 인덱스
let correctCount = 0; // 맞춘 문제 수
let timeLeft = 300; // 남은 시간 (5분 = 300초)
let timerInterval = null;
let startTime = null;
let userAnswers = []; // 각 문제의 정답 여부 기록 [true, false, ...]
let completedLevelsData = {}; // 완료된 레벨별 상세 데이터 저장 { beginner: { score: 8, time: 120 } }
let totalTimeSpent = 0; // 모든 레벨에서 사용한 총 풀이 시간(초)

// DOM 요소 선택
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const transitionScreen = document.getElementById('transition-screen');
const certificateScreen = document.getElementById('certificate-screen');

// 레벨 카드 및 시작 버튼
const levelCards = document.querySelectorAll('.level-select-card');
const startBtn = document.getElementById('start-btn');

// 퀴즈 화면 요소
const stageIndicator = document.getElementById('stage-indicator');
const timerText = document.getElementById('timer-text');
const timerContainer = document.getElementById('timer-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackExplanation = document.getElementById('feedback-explanation');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

// 전환 화면 요소
const transitionIcon = document.getElementById('transition-icon');
const transitionTitle = document.getElementById('transition-title');
const transitionScoreVal = document.getElementById('transition-score-val');
const transitionDesc = document.getElementById('transition-desc');
const retryBtn = document.getElementById('retry-btn');
const proceedBtn = document.getElementById('proceed-btn');
const showCertBtn = document.getElementById('show-cert-btn');

// 수료증 화면 요소
const userNameInput = document.getElementById('user-name-input');
const certDisplayName = document.getElementById('cert-display-name');
const certDisplayLevel = document.getElementById('cert-display-level');
const certDisplayDate = document.getElementById('cert-display-date');
const certStatScore = document.getElementById('cert-stat-score');
const certStatTime = document.getElementById('cert-stat-time');
const certStatLevel = document.getElementById('cert-stat-level');
const printBtn = document.getElementById('print-btn');
const backHomeBtn = document.getElementById('back-home-btn');

// 앱 초기화
function init() {
  // 로컬 스토리지에서 해금 정보 로드
  const savedUnlocked = localStorage.getItem('unlockedLevels');
  if (savedUnlocked) {
    unlockedLevels = JSON.parse(savedUnlocked);
  }

  const savedCompleted = localStorage.getItem('completedLevelsData');
  if (savedCompleted) {
    completedLevelsData = JSON.parse(savedCompleted);
  }

  const savedName = localStorage.getItem('userName');
  if (savedName) {
    userNameInput.value = savedName;
    certDisplayName.textContent = savedName.toUpperCase();
  }

  updateLevelSelectionUI();
  setupEventListeners();
}

// 시작 화면의 레벨 카드 UI 동적 업데이트
function updateLevelSelectionUI() {
  levelCards.forEach(card => {
    const level = card.dataset.level;
    
    // 잠금 상태 업데이트
    if (unlockedLevels.includes(level)) {
      card.classList.remove('locked');
      const lockIcon = card.querySelector('.lock-icon');
      if (lockIcon) lockIcon.style.display = 'none';
    } else {
      card.classList.add('locked');
      const lockIcon = card.querySelector('.lock-icon');
      if (lockIcon) lockIcon.style.display = 'block';
    }

    // 현재 선택한 카드 표시
    if (level === selectedLevel) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // 비활성화된 카드를 눌렀을 때 시작하지 못하도록 방지
  if (unlockedLevels.includes(selectedLevel)) {
    startBtn.disabled = false;
  } else {
    startBtn.disabled = true;
  }
}

// 이벤트 리스너 바인딩
function setupEventListeners() {
  // 레벨 선택 카드 선택
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.dataset.level;
      if (unlockedLevels.includes(level)) {
        selectedLevel = level;
        updateLevelSelectionUI();
      }
    });
  });

  // 시작 버튼
  startBtn.addEventListener('click', startTest);

  // 정답 제출 버튼
  submitBtn.addEventListener('click', submitAnswer);

  // 다음 문제 버튼
  nextBtn.addEventListener('click', nextQuestion);

  // 다시 시도 버튼
  retryBtn.addEventListener('click', () => {
    transitionScreen.classList.add('hidden');
    startTest();
  });

  // 다음 레벨 진행 버튼
  proceedBtn.addEventListener('click', () => {
    transitionScreen.classList.add('hidden');
    // 다음 잠금 해제 레벨 찾기
    const levelOrder = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = levelOrder.indexOf(selectedLevel);
    if (currentIndex < levelOrder.length - 1) {
      selectedLevel = levelOrder[currentIndex + 1];
      startTest();
    }
  });

  // 수료증 보기 버튼
  showCertBtn.addEventListener('click', showCertificate);

  // 수료증 이름 실시간 반영
  userNameInput.addEventListener('input', (e) => {
    const nameValue = e.target.value.trim() || 'GUEST';
    certDisplayName.textContent = nameValue.toUpperCase();
    localStorage.setItem('userName', nameValue);
  });

  // 인쇄/PDF 저장 버튼
  printBtn.addEventListener('click', () => {
    window.print();
  });

  // 수료증에서 홈으로
  backHomeBtn.addEventListener('click', () => {
    certificateScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    updateLevelSelectionUI();
  });
}

// 레벨과 정답 수에 기반한 토익 예상 점수 매핑 함수
function calculateToeicScore(level, score) {
  if (level === 'beginner') {
    if (score === 7) return "320 ~ 390";
    if (score === 8) return "390 ~ 460";
    if (score === 9) return "460 ~ 530";
    if (score === 10) return "530 ~ 600";
    return "150 ~ 320"; // 7개 미만 (불합격 등의 경우)
  } else if (level === 'intermediate') {
    if (score === 7) return "600 ~ 680";
    if (score === 8) return "680 ~ 750";
    if (score === 9) return "750 ~ 810";
    if (score === 10) return "810 ~ 860";
    return "450 ~ 600";
  } else if (level === 'advanced') {
    if (score === 7) return "860 ~ 900";
    if (score === 8) return "900 ~ 940";
    if (score === 9) return "940 ~ 975";
    if (score === 10) return "975 ~ 990";
    return "750 ~ 860";
  }
  return "100 ~ 990";
}

// 배열을 무작위로 섞는 Fisher-Yates 알고리즘
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// 테스트 시작
function startTest() {
  welcomeScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  
  // 해당 레벨의 100문제 중 무작위로 10문제를 섞어서 가져옴
  const allQuestions = questions[selectedLevel];
  activeQuestions = shuffleArray(allQuestions).slice(0, 10);
  
  // 상태 리셋
  currentQuestionIndex = 0;
  correctCount = 0;
  timeLeft = 300; // 5분
  userAnswers = [];
  startTime = Date.now();
  
  let labelText = "초급 테스트 (A1-A2)";
  if (selectedLevel === 'intermediate') labelText = "중급 테스트 (B1-B2)";
  if (selectedLevel === 'advanced') labelText = "고급 테스트 (C1-C2)";
  stageIndicator.textContent = labelText;

  timerContainer.classList.remove('warning');
  updateTimerDisplay();
  startTimer();
  loadQuestion();
}

// 타이머 작동
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    // 1분 이하로 남았을 때 시각적 경고
    if (timeLeft <= 60) {
      timerContainer.classList.add('warning');
    }

    // 시간 마감
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

// 타이머 표시 업데이트
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 시간 제한 종료 처리
function handleTimeout() {
  alert('제한 시간이 종료되었습니다. 풀이한 문제까지 자동 제출됩니다.');
  // 아직 다 안 풀었어도 현재 문제 강제 채점 후 결과 스크린으로 이동
  endTestStage();
}

// 질문 가져오기 및 렌더링
function loadQuestion() {
  const q = activeQuestions[currentQuestionIndex];

  // 진행 표시 갱신
  const total = activeQuestions.length;
  const progressPercent = ((currentQuestionIndex) / total) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `문제 ${currentQuestionIndex + 1} / ${total}`;

  // 문제 지문 출력
  questionText.textContent = q.text;

  // 선택지 리스트 출력
  optionsList.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-marker">${String.fromCharCode(65 + idx)}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.dataset.index = idx;
    btn.addEventListener('click', () => selectOption(btn, idx));
    optionsList.appendChild(btn);
  });

  // 버튼 상태 리셋
  submitBtn.disabled = true;
  submitBtn.classList.remove('hidden');
  nextBtn.classList.add('hidden');
  feedbackContainer.classList.add('hidden');
}

// 선택지 선택
function selectOption(button, idx) {
  // 이미 제출 완료한 문제면 클릭 무시
  if (!nextBtn.classList.contains('hidden')) return;

  const btns = optionsList.querySelectorAll('.option-btn');
  btns.forEach(btn => btn.classList.remove('selected'));
  
  button.classList.add('selected');
  submitBtn.disabled = false;
  submitBtn.dataset.selectedIdx = idx;
}

// 정답 확인 및 제출
function submitAnswer() {
  const selectedIdx = parseInt(submitBtn.dataset.selectedIdx);
  const q = activeQuestions[currentQuestionIndex];
  const btns = optionsList.querySelectorAll('.option-btn');

  // 모든 선택 버튼 비활성화 스타일 적용
  btns.forEach(btn => btn.classList.add('disabled'));

  // 정답 판정
  const isCorrect = (selectedIdx === q.correctAnswer);
  userAnswers.push(isCorrect);
  if (isCorrect) correctCount++;

  // 시각 피드백 연출
  btns.forEach((btn, idx) => {
    if (idx === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  // 해설 박스 노출
  feedbackContainer.classList.remove('hidden');
  if (isCorrect) {
    feedbackContainer.className = 'feedback-container correct';
    feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> 정답입니다!';
  } else {
    feedbackContainer.className = 'feedback-container incorrect';
    feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> 오답입니다.';
  }
  feedbackExplanation.textContent = q.explanation;

  // 버튼 숨김/노출 처리
  submitBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');

  // 진행 상태 100% 반영
  const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

// 다음 문제 이동
function nextQuestion() {
  currentQuestionIndex++;
  const total = activeQuestions.length;
  
  if (currentQuestionIndex < total) {
    loadQuestion();
  } else {
    endTestStage();
  }
}

// 스테이지 결과 도출
function endTestStage() {
  if (timerInterval) clearInterval(timerInterval);
  quizScreen.classList.add('hidden');
  transitionScreen.classList.remove('hidden');

  const totalQuestions = activeQuestions.length;
  const scorePercent = (correctCount / totalQuestions) * 100;
  const timeUsed = 300 - timeLeft; // 사용한 시간 (초)

  transitionScoreVal.textContent = Math.round(scorePercent);
  
  // 합격 조건: 70% 이상 정답
  const isPassed = (scorePercent >= 70);

  if (isPassed) {
    transitionScreen.className = 'card transition-screen success';
    transitionIcon.className = 'fa-solid fa-trophy';
    transitionTitle.textContent = '축하합니다! 합격입니다.';
    
    // 데이터 저장
    completedLevelsData[selectedLevel] = {
      score: correctCount,
      total: totalQuestions,
      time: timeUsed
    };
    localStorage.setItem('completedLevelsData', JSON.stringify(completedLevelsData));

    // 해금 단계 업데이트
    const levelOrder = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = levelOrder.indexOf(selectedLevel);
    const toeicRange = calculateToeicScore(selectedLevel, correctCount);
    
    if (currentIndex < levelOrder.length - 1) {
      const nextLvl = levelOrder[currentIndex + 1];
      if (!unlockedLevels.includes(nextLvl)) {
        unlockedLevels.push(nextLvl);
        localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));
      }
      transitionDesc.innerHTML = `당신의 점수는 <strong>${correctCount}/${totalQuestions}</strong>이며 합격 기준(70%)을 넘었습니다. 다음 레벨(${nextLvl.toUpperCase()})이 해제되었습니다.<br><br><span style="color: var(--warning); font-weight: 700;"><i class="fa-solid fa-calculator"></i> 이 단계 합격 기준 예상 토익 점수: ${toeicRange}점 수준</span>`;
      proceedBtn.classList.remove('hidden');
      showCertBtn.classList.add('hidden');
    } else {
      // 마지막 고급 단계까지 통과한 경우
      transitionDesc.innerHTML = `축하합니다! 최고 난이도인 고급 단계까지 합격하셨습니다. 모든 테스트를 완료했으므로 영예로운 최종 영어 평가 수료증을 획득하셨습니다.<br><br><span style="color: var(--warning); font-weight: 700;"><i class="fa-solid fa-calculator"></i> 고급 최종 합격 예상 토익 점수: ${toeicRange}점 수준 (최고 등급)</span>`;
      proceedBtn.classList.add('hidden');
      showCertBtn.classList.remove('hidden');
    }
  } else {
    // 불합격
    transitionScreen.className = 'card transition-screen fail';
    transitionIcon.className = 'fa-solid fa-triangle-exclamation';
    transitionTitle.textContent = '아쉽게도 합격 기준을 통과하지 못했습니다.';
    transitionDesc.innerHTML = `당신의 점수는 <strong>${correctCount}/${totalQuestions}</strong> (${Math.round(scorePercent)}%)입니다. 합격하려면 최소 70% 이상 득점하셔야 합니다. 다시 차근차근 읽어보고 복습해보세요.`;
    
    proceedBtn.classList.add('hidden');
    showCertBtn.classList.add('hidden');
  }
}

// 수료증 화면 출력
function showCertificate() {
  transitionScreen.classList.add('hidden');
  certificateScreen.classList.remove('hidden');

  // 통계 계산
  let totalScore = 0;
  let maxQuestions = 0;
  let totalTime = 0;
  let highestCompletedLevel = 'beginner';

  const levelOrder = ['beginner', 'intermediate', 'advanced'];
  levelOrder.forEach(lvl => {
    if (completedLevelsData[lvl]) {
      totalScore += completedLevelsData[lvl].score;
      maxQuestions += completedLevelsData[lvl].total;
      totalTime += completedLevelsData[lvl].time;
      highestCompletedLevel = lvl;
    }
  });

  // 데이터 바인딩
  certStatScore.textContent = `${totalScore}/${maxQuestions}`;
  
  // 풀이 시간 포맷 (MM:SS)
  const min = Math.floor(totalTime / 60);
  const sec = totalTime % 60;
  certStatTime.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  // 레벨 명칭 포맷
  let lvlFormatted = '초급 (A2 Level)';
  let lvlTitle = 'ELEMENTARY (A2)';
  if (highestCompletedLevel === 'intermediate') {
    lvlFormatted = '중급 (B2 Level)';
    lvlTitle = 'INTERMEDIATE (B2)';
  } else if (highestCompletedLevel === 'advanced') {
    lvlFormatted = '고급 (C2 Level)';
    lvlTitle = 'ADVANCED (C2)';
  }
  
  certStatLevel.textContent = lvlFormatted;
  certDisplayLevel.textContent = lvlTitle;

  // 발급 날짜 포맷
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  certDisplayDate.textContent = `발급일자: ${yyyy}. ${mm}. ${dd}.`;

  // 토익 예상 점수 데이터 바인딩
  const highestScore = completedLevelsData[highestCompletedLevel] ? completedLevelsData[highestCompletedLevel].score : 0;
  const toeicRange = calculateToeicScore(highestCompletedLevel, highestScore);
  const certToeicScore = document.getElementById('cert-toeic-score');
  if (certToeicScore) {
    certToeicScore.textContent = `${toeicRange}점`;
  }

  // 기본 이름 설정
  const currentSavedName = localStorage.getItem('userName');
  if (!currentSavedName) {
    certDisplayName.textContent = 'GUEST';
  } else {
    certDisplayName.textContent = currentSavedName.toUpperCase();
  }
}

// 초기화 호출
window.addEventListener('DOMContentLoaded', init);
