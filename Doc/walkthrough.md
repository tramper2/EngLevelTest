# 작업 요약 (Walkthrough) - 영어 레벨 테스트 웹 사이트

요청하신 대로 지루하지 않게 각 단계별로 5분간 집중 테스트하고, 70% 이상의 우수한 성적을 받으면 다음 레벨이 해제되는 **영어 레벨 테스트(EngLevelTest) 웹 애플리케이션** 개발 및 GitHub Pages 배포를 완료했습니다.

---

## 🛠️ 개발된 파일 구성

모든 소스 코드는 지정하신 로컬 경로인 [D:\Study\WebPage\EngLevelTest](file:///D:/Study/WebPage/EngLevelTest/)에 작성되었습니다.

1. **[index.html](file:///D:/Study/WebPage/EngLevelTest/index.html)**
   - 싱글 페이지 애플리케이션(SPA) 구조로 제작되어 화면 깜빡임 없는 매끄러운 화면 전환(시작 ➡️ 퀴즈 ➡️ 통과/실패 ➡️ 수료증)을 지원합니다.
   - 모바일과 태블릿, PC 화면 크기에 유연하게 반응하는 완전 반응형 마크업입니다.
2. **[style.css](file:///D:/Study/WebPage/EngLevelTest/style.css)**
   - 딥 블루와 바이올렛 톤의 미려한 다크 테마를 기반으로 하며, 글래스모피즘(유리 재질 효과) 카드 스타일을 적용했습니다.
   - 호버링 피드백 및 선택 시의 미세한 확장 애니메이션이 포함되어 있습니다.
   - 인쇄 시 버튼이나 입력창을 다 숨기고 깔끔한 A4 규격 수료증만 출력하는 `@media print` 템플릿이 설계되어 있습니다.
3. **[questions.js](file:///D:/Study/WebPage/EngLevelTest/questions.js)**
   - 초급(A1-A2), 중급(B1-B2), 고급(C1-C2) 단계별로 엄선된 어휘, 문법, 독해 등 총 300개의 문제(레벨별 100개 문제 풀)와 정답 정보가 한글 해설과 함께 포함되어 있습니다.
4. **[app.js](file:///D:/Study/WebPage/EngLevelTest/app.js)**
   - 스테이지 잠금/해금 로직, `localStorage` 기반 상태 저장(새로고침 시 진행률 유지)을 처리합니다.
   - 5분 카운트다운 타이머를 구동하며, 남은 시간이 60초 미만일 때 빨갛게 점멸하고 0초가 되면 자동 제출을 수행합니다.
   - Fisher-Yates 셔플 알고리즘을 사용한 100문제 중 10문제 무작위 추출 및 섞기 기능을 포함합니다.
   - 수료증 출력 및 실시간 이름 서명 연동 기능을 포함합니다.
5. **[deploy.ps1](file:///D:/Study/WebPage/EngLevelTest/deploy.ps1)**
   - Git 초기화 및 커밋 생성, 그리고 원격 주소(`git@github.com:tramper2/EngLevelTest.git`)의 `main` 및 `gh-pages` 브랜치로 자동 강제 푸시하여 GitHub Pages 배포를 완료하는 PowerShell 자동화 스크립트입니다.

---

## ✨ 핵심 기능 설명

### 1. ⏱️ 5분 타임아웃 & 동적 해금
- 각 단계가 시작되면 `05:00`부터 카운트다운이 진행됩니다.
- 한 문제 풀 때마다 바로 **정답/오답 판정**이 나오며 상세한 한글 해설을 통해 학습을 도울 수 있습니다.
- 10문제 중 7문제 이상(70% 이상) 맞추어야 합격이며, 다음 스테이지 카드의 잠금이 풀립니다.

### 2. 🎖️ 실시간 수료증 및 PDF/인쇄 최적화
- 마지막 고급 단계까지 최종 합격하면 명예 수료증이 발급됩니다.
- 수료증 화면에서 자신의 이름을 입력하면 수료증 이미지 내에 대문자로 실시간 반영됩니다.
- **수료증 인쇄/PDF 저장** 버튼을 누르면 브라우저 기본 인쇄창이 켜지며, 이때 웹 요소를 전부 배제하고 오직 아름다운 이중 테마 테두리가 적용된 종이 규격의 수료증 내용물만 깔끔하게 보존되어 출력 및 PDF로 저장됩니다.

### 3. 🔀 무작위 문제 출제 및 셔플링 (Random Shuffling)
- 각 레벨별로 100문제의 대규모 문제 은행이 내장되어 있습니다.
- 테스트 시작 시 **Fisher-Yates 셔플 알고리즘**을 사용해 100문제 전체를 무작위로 섞은 뒤 앞의 10문제만 골라 출제합니다.
- 재도전 시 매번 새로운 문제가 다른 순서로 출제되므로 지루하지 않게 반복 학습 및 평가에 임할 수 있습니다.

---

## 🚀 배포 완료 정보 및 확인 방법

PowerShell 배포 스크립트를 성공적으로 동작시켜 원격 저장소에 업로드를 마쳤습니다.

- **Git 원격 주소**: `git@github.com:tramper2/EngLevelTest.git`
- **배포 주소 (GitHub Pages)**: [https://tramper2.github.io/EngLevelTest/](https://tramper2.github.io/EngLevelTest/)

> [!NOTE]
> 만약 사이트에 접속했을 때 404 에러가 발생하거나 배포 상태를 직접 더블 체크하고 싶으시다면 아래 단계를 따르세요.
> 1. GitHub의 [EngLevelTest 저장소](https://github.com/tramper2/EngLevelTest)로 이동합니다.
> 2. 상단 메뉴의 **Settings** (설정) ➡️ 왼쪽 사이드바의 **Pages** 메뉴로 진입합니다.
> 3. **Build and deployment** 항목의 **Source**를 `Deploy from a branch`로 선택합니다.
> 4. **Branch**를 `gh-pages`로 지정하고 폴더를 `/ (root)`로 선택한 뒤 **Save**를 클릭합니다.
> (저희 스크립트가 이미 `gh-pages` 브랜치로 푸시를 마쳤으므로, 수 분 이내로 깃허브가 자동으로 배포를 처리합니다.)
