export const questions = {
  beginner: [
    {
      id: "b1",
      type: "grammar",
      text: "She _______ to school every day.",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: 1,
      explanation: "주어가 3인칭 단수(She)이고 반복되는 일상(every day)을 나타내므로 현재형 동사인 'goes'가 와야 합니다."
    },
    {
      id: "b2",
      type: "grammar",
      text: "Where _______ you yesterday?",
      options: ["was", "are", "were", "did"],
      correctAnswer: 2,
      explanation: "과거를 나타내는 부사 'yesterday'가 있고, 주어가 2인칭(you)이므로 과거형 비동사 'were'가 올바릅니다."
    },
    {
      id: "b3",
      type: "vocabulary",
      text: "I want to buy a new _______ of shoes.",
      options: ["pair", "couple", "double", "piece"],
      correctAnswer: 0,
      explanation: "신발, 양말, 장갑 등 두 개가 한 쌍을 이루는 물건을 세는 단위는 'pair'입니다."
    },
    {
      id: "b4",
      type: "grammar",
      text: "He has been playing soccer _______ two hours.",
      options: ["for", "since", "during", "ago"],
      correctAnswer: 0,
      explanation: "현재완료 진행형에서 구체적인 시간의 길이(two hours) 앞에는 전치사 'for'를 사용합니다. (since는 시작 시점 앞에 사용)"
    },
    {
      id: "b5",
      type: "vocabulary",
      text: "Please turn _______ the light. It's too dark here.",
      options: ["off", "on", "up", "down"],
      correctAnswer: 1,
      explanation: "주변이 너무 어두우므로 불을 '켜다'라는 뜻의 'turn on'이 알맞습니다."
    },
    {
      id: "b6",
      type: "grammar",
      text: "There _______ some milk in the refrigerator.",
      options: ["is", "are", "was", "were"],
      correctAnswer: 0,
      explanation: "우유(milk)는 셀 수 없는 명사(불가산 명사)이므로 단수형 비동사 'is'로 취급합니다."
    },
    {
      id: "b7",
      type: "vocabulary",
      text: "My father is an _______. He designs buildings.",
      options: ["architect", "doctor", "engineer", "builder"],
      correctAnswer: 0,
      explanation: "건물을 디자인(설계)하는 직업은 건축가(architect)입니다."
    },
    {
      id: "b8",
      type: "grammar",
      text: "This book is _______ than that one.",
      options: ["more interesting", "interestinger", "most interesting", "interest"],
      correctAnswer: 0,
      explanation: "음절이 긴 형용사인 'interesting'의 비교급은 앞에 'more'를 붙여 'more interesting'으로 표현합니다."
    },
    {
      id: "b9",
      type: "vocabulary",
      text: "I am really _______ about the upcoming trip.",
      options: ["excited", "exciting", "excite", "excites"],
      correctAnswer: 0,
      explanation: "사람이 감정적으로 '설레거나 신난' 상태를 수동의 의미로 표현할 때는 과거분사형태인 'excited'를 사용합니다."
    },
    {
      id: "b10",
      type: "grammar",
      text: "_______ you like some tea?",
      options: ["Would", "Do", "Will", "Can"],
      correctAnswer: 0,
      explanation: "상대방에게 정중하게 마실 것을 권유할 때는 'Would you like ~?' 패턴을 사용합니다."
    }
  ],
  intermediate: [
    {
      id: "i1",
      type: "grammar",
      text: "If I _______ you, I would accept the job offer.",
      options: ["am", "was", "were", "had been"],
      correctAnswer: 2,
      explanation: "현재 사실과 반대되는 가정을 나타내는 가정법 과거 문장입니다. 가정법 과거의 if절에서 be동사는 주어에 관계없이 주로 'were'를 씁니다."
    },
    {
      id: "i2",
      type: "vocabulary",
      text: "The manager decided to _______ the meeting until next Monday.",
      options: ["put off", "put on", "take off", "call off"],
      correctAnswer: 0,
      explanation: "회의를 다음 주로 '연기하다, 미루다'라는 뜻의 구동사는 'put off'입니다. (call off는 '취소하다'라는 뜻)"
    },
    {
      id: "i3",
      type: "grammar",
      text: "By the time we arrived at the station, the train _______.",
      options: ["left", "has left", "had left", "was leaving"],
      correctAnswer: 2,
      explanation: "역에 도착한 시점(과거)보다 기차가 이미 떠난 시점이 더 이전이므로 과거완료형인 'had left'가 와야 합니다."
    },
    {
      id: "i4",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Although digital reading has become popular, physical books remain highly sought after. Many readers prefer the tactile sensation of turning paper pages and the smell of ink.\"\n\nQuestion: According to the passage, why do physical books remain popular?",
      options: [
        "Because they are much cheaper than e-books",
        "Because of the unique sensory experience they provide",
        "Because they are lighter and easier to carry",
        "Because book stores offer massive discounts"
      ],
      correctAnswer: 1,
      explanation: "본문에서 종이를 넘기는 촉감(tactile sensation)과 잉크 냄새(smell of ink)를 선호한다고 언급하였으므로, 이는 '감각적인 경험(sensory experience)'에 해당합니다."
    },
    {
      id: "i5",
      type: "grammar",
      text: "I am looking forward to _______ from you soon.",
      options: ["hear", "hearing", "heard", "hears"],
      correctAnswer: 1,
      explanation: "'look forward to' 구문에서 'to'는 전치사입니다. 따라서 전치사의 목적어로 동명사 형태인 'hearing'이 와야 합니다."
    },
    {
      id: "i6",
      type: "vocabulary",
      text: "She did not reveal her identity to protect her family; she wanted to remain _______.",
      options: ["anonymous", "famous", "unanimous", "ambiguous"],
      correctAnswer: 0,
      explanation: "신원을 밝히지 않는 상태를 나타내는 단어는 '익명의'라는 뜻의 'anonymous'입니다. (unanimous: 만장일치의, ambiguous: 모호한)"
    },
    {
      id: "i7",
      type: "grammar",
      text: "He apologized for _______ the important appointment.",
      options: ["missing", "miss", "to miss", "missed"],
      correctAnswer: 0,
      explanation: "전치사 'for' 뒤에는 명사 상당어구가 와야 하므로 동명사인 'missing'이 적절합니다."
    },
    {
      id: "i8",
      type: "vocabulary",
      text: "The new marketing campaign had a significant _______ on our sales.",
      options: ["affect", "effect", "efficient", "effective"],
      correctAnswer: 1,
      explanation: "'have an effect on (~에 영향을 미치다)' 숙어 표현으로 명사형인 'effect'가 들어갈 자리입니다. (affect는 동사로 쓰임)"
    },
    {
      id: "i9",
      type: "grammar",
      text: "You _______ smoke in this area. It is strictly prohibited by law.",
      options: ["must not", "don't have to", "couldn't", "might not"],
      correctAnswer: 0,
      explanation: "엄격히 금지(prohibited)된 행동을 나타내므로 '~해서는 안 된다'는 강한 금지의 조동사 'must not'이 알맞습니다."
    },
    {
      id: "i10",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Water scarcity is an escalating global issue. Overuse, climate change, and pollution have combined to deplete freshwater reserves, threatening ecosystems and human livelihoods.\"\n\nQuestion: What is NOT mentioned in the text as a cause of water scarcity?",
      options: [
        "Overuse of water resources",
        "Industrial waste disposal",
        "Impact of climate change",
        "Pollution of freshwater reserves"
      ],
      correctAnswer: 1,
      explanation: "과다 사용(Overuse), 기후 변화(climate change), 오염(pollution)은 직접 언급되어 있으나, 산업 폐기물 처리(Industrial waste disposal)는 언급되지 않았습니다."
    }
  ],
  advanced: [
    {
      id: "a1",
      type: "grammar",
      text: "Hardly _______ entered the room when the lights suddenly went out.",
      options: ["had we", "we had", "did we", "we did"],
      correctAnswer: 0,
      explanation: "부정어구 'Hardly'가 문장 앞에 오면서 주어와 조동사의 도치가 발생하여 'Hardly + had + 주어 + p.p.' 구문인 'had we'가 들어와야 합니다."
    },
    {
      id: "a2",
      type: "vocabulary",
      text: "The diplomat's _______ remarks defused what could have been a highly volatile situation.",
      options: ["conciliatory", "provocative", "bellicose", "ostentatious"],
      correctAnswer: 0,
      explanation: "폭발하기 쉬운 일촉즉발의 상황을 진정시켰으므로(defused), '달래는, 회유적인'이라는 뜻을 가진 'conciliatory'가 가장 자연스럽습니다. (provocative: 도발적인, bellicose: 호전적인, ostentatious: 허세 부리는)"
    },
    {
      id: "a3",
      type: "grammar",
      text: "It is essential that she _______ present at the board meeting tomorrow.",
      options: ["is", "be", "was", "been"],
      correctAnswer: 1,
      explanation: "당위나 필수를 요구하는 형용사 'essential'이 대절(that-clause)을 이끌 때, 대절 안의 동사는 '(should) + 동사원형'을 사용하므로 원형인 'be'가 적절합니다."
    },
    {
      id: "a4",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Cognitive dissonance, a psychological phenomenon coined by Leon Festinger, occurs when an individual holds contradictory beliefs. To alleviate this discomfort, individuals often rationalize their behavior or ignore conflicting evidence, reinforcing confirmation bias.\"\n\nQuestion: How do individuals typically resolve the discomfort of cognitive dissonance?",
      options: [
        "By seeking professional therapy immediately",
        "By rationalizing their behavior or discarding conflicting facts",
        "By abandoning all of their previous belief systems",
        "By attempting to hold even more contradictory viewpoints"
      ],
      correctAnswer: 1,
      explanation: "본문에서 인지 부조화의 불편함을 완화하기 위해 본인의 행동을 합리화(rationalize)하거나 상충되는 증거를 무시(ignore/discard)한다고 서술하고 있습니다."
    },
    {
      id: "a5",
      type: "grammar",
      text: "Were it not for your timely assistance, we _______ in big trouble right now.",
      options: ["would be", "will be", "had been", "would have been"],
      correctAnswer: 0,
      explanation: "'Were it not for ~'는 'If it were not for ~ (지금 ~가 없다면)'의 가정법 과거 도치 구문입니다. 현재의 상황에 대한 가정을 나타내므로 주절에는 'would + 동사원형'인 'would be'가 와야 합니다. (현재 시점인 right now가 단서)"
    },
    {
      id: "a6",
      type: "vocabulary",
      text: "The scholar's arguments were so _______ that none of his peers could find any flaws in them.",
      options: ["cogent", "fallacious", "tenuous", "specious"],
      correctAnswer: 0,
      explanation: "동료 학자들이 결점(flaws)을 찾을 수 없었을 만큼 완벽한 논증이므로 '설득력 있는, 타당한'이란 뜻의 'cogent'가 맞습니다. (fallacious: 오류가 있는, tenuous: 빈약한, specious: 그럴듯하지만 속임수의)"
    },
    {
      id: "a7",
      type: "grammar",
      text: "The suspect denied _______ near the scene of the crime on the night of the robbery.",
      options: ["having been", "to be", "to have been", "being been"],
      correctAnswer: 0,
      explanation: "'deny'는 동명사를 목적어로 취합니다. 또한 부인하는 시점보다 이전 시점(강도가 발생한 밤에 현장에 있었던 사실)을 나타내기 위해 완료 동명사 형태인 'having been'을 사용하는 것이 가장 자연스럽습니다."
    },
    {
      id: "a8",
      type: "vocabulary",
      text: "Her design style is often described as _______ because it masterfully incorporates elements from various historical periods and cultures.",
      options: ["eclectic", "homogeneous", "mundane", "esoteric"],
      correctAnswer: 0,
      explanation: "다양한 시대와 문화적 요소를 절충하고 융합하는 방식을 뜻하는 단어는 '절충적인, 다방면에 걸친'이란 뜻의 'eclectic'입니다. (homogeneous: 동질적인, mundane: 일상적인, esoteric: 비전의/난해한)"
    },
    {
      id: "a9",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The concept of tragedy in literature has evolved significantly. While classical Greek tragedy centered on the downfall of noble characters due to fate or hubris, modern tragedy often explores the struggles of ordinary individuals crushed by societal pressures or internal alienation.\"\n\nQuestion: Which of the following best states the contrast between classical and modern tragedy?",
      options: [
        "Classical tragedy focused on fate; modern tragedy is primarily comic.",
        "Classical tragedy involved noble characters; modern tragedy focuses on ordinary people.",
        "Classical tragedy had happy endings; modern tragedy is pessimistic.",
        "Classical tragedy was written in prose; modern tragedy is in verse."
      ],
      correctAnswer: 1,
      explanation: "본문에서 고전 그리스 비극은 고귀한 귀족층 캐릭터(noble characters)의 몰락을 다룬 반면, 현대 비극은 사회적 압박이나 소외에 짓눌린 평범한 개인들(ordinary individuals)의 갈등을 다룬다고 대조하고 있습니다."
    },
    {
      id: "a10",
      type: "grammar",
      text: "She acted as though she _______ the secret all along, even though she was completely in the dark.",
      options: ["had known", "knew", "knows", "would know"],
      correctAnswer: 0,
      explanation: "'as though(마치 ~처럼)' 뒤에 사실과 다른 반대 가정을 할 때, 주절의 시점보다 그 이전에 알고 있었던 것처럼 행동한 것이므로 과거완료 시제인 'had known'을 사용합니다."
    }
  ]
};
