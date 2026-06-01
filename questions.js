/* 영어 레벨 테스트 문제 은행 DB - 총 300문제 (레벨별 100문제) */
export const questions = {
  beginner: [
    {
      id: "b1",
      type: "grammar",
      text: "She _______ to school every day.",
      options: ["go", "going", "gone", "goes"],
      correctAnswer: 3,
      explanation: "주어가 3인칭 단수(She)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'goes'가 정답입니다. (학교에 가다)"
    },
    {
      id: "b2",
      type: "grammar",
      text: "He _______ hot chocolate in winter.",
      options: ["liked", "likes", "like", "liking"],
      correctAnswer: 1,
      explanation: "주어가 3인칭 단수(He)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'likes'가 정답입니다. (핫초코를 좋아하다)"
    },
    {
      id: "b3",
      type: "grammar",
      text: "My mother _______ in a large office in Seoul.",
      options: ["work", "working", "worked", "works"],
      correctAnswer: 3,
      explanation: "주어가 3인칭 단수(My mother)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'works'가 정답입니다. (사무실에서 일하다)"
    },
    {
      id: "b4",
      type: "grammar",
      text: "The teacher _______ a newspaper every morning.",
      options: ["reads", "reading", "read", "reads"],
      correctAnswer: 0,
      explanation: "주어가 3인칭 단수(The teacher)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'reads'가 정답입니다. (신문을 읽다)"
    },
    {
      id: "b5",
      type: "grammar",
      text: "Our doctor _______ a yellow bus to work.",
      options: ["drives", "driven", "drive", "driving"],
      correctAnswer: 0,
      explanation: "주어가 3인칭 단수(Our doctor)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'drives'가 정답입니다. (버스를 운전하다)"
    },
    {
      id: "b6",
      type: "grammar",
      text: "The chef _______ tasty dinner for the family.",
      options: ["cook", "cooking", "cooked", "cooks"],
      correctAnswer: 3,
      explanation: "주어가 3인칭 단수(The chef)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'cooks'가 정답입니다. (저녁을 요리하다)"
    },
    {
      id: "b7",
      type: "grammar",
      text: "My brother _______ the violin very beautifully.",
      options: ["play", "plays", "played", "playing"],
      correctAnswer: 1,
      explanation: "주어가 3인칭 단수(My brother)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'plays'가 정답입니다. (바이올린을 연주하다)"
    },
    {
      id: "b8",
      type: "grammar",
      text: "The nurse _______ in a cozy apartment nearby.",
      options: ["lives", "live", "lived", "living"],
      correctAnswer: 0,
      explanation: "주어가 3인칭 단수(The nurse)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'lives'가 정답입니다. (아파트에 살다)"
    },
    {
      id: "b9",
      type: "grammar",
      text: "My sister _______ English and French fluently.",
      options: ["speaking", "speaks", "speak", "spoken"],
      correctAnswer: 1,
      explanation: "주어가 3인칭 단수(My sister)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'speaks'가 정답입니다. (영어를 말하다)"
    },
    {
      id: "b10",
      type: "grammar",
      text: "The manager _______ Spanish on weekends.",
      options: ["study", "studies", "studying", "studied"],
      correctAnswer: 1,
      explanation: "주어가 3인칭 단수(The manager)이고 일반적인 사실이나 반복되는 일상을 나타내므로 단수 현재형 동사인 'studies'가 정답입니다. (스페인어를 공부하다)"
    },
    {
      id: "b11",
      type: "grammar",
      text: "They _______ soccer in the park every Sunday.",
      options: ["plays", "play", "played", "playing"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(They)이므로 현재 시제 동사의 복수형태인 'play'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b12",
      type: "grammar",
      text: "We _______ in a big house near the river.",
      options: ["lived", "lives", "living", "live"],
      correctAnswer: 3,
      explanation: "주어가 복수명사/대명사(We)이므로 현재 시제 동사의 복수형태인 'live'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b13",
      type: "grammar",
      text: "My friends _______ together on this project.",
      options: ["works", "work", "worked", "working"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(My friends)이므로 현재 시제 동사의 복수형태인 'work'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b14",
      type: "grammar",
      text: "The students _______ many interesting books to read.",
      options: ["having", "had", "have", "has"],
      correctAnswer: 2,
      explanation: "주어가 복수명사/대명사(The students)이므로 현재 시제 동사의 복수형태인 'have'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b15",
      type: "grammar",
      text: "The children _______ to drink some cold water.",
      options: ["wants", "want", "wanting", "wanted"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(The children)이므로 현재 시제 동사의 복수형태인 'want'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b16",
      type: "grammar",
      text: "The players _______ lunch at the cafeteria at noon.",
      options: ["ate", "eats", "eating", "eat"],
      correctAnswer: 3,
      explanation: "주어가 복수명사/대명사(The players)이므로 현재 시제 동사의 복수형태인 'eat'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b17",
      type: "grammar",
      text: "My parents _______ English together at night.",
      options: ["studies", "study", "studying", "studied"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(My parents)이므로 현재 시제 동사의 복수형태인 'study'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b18",
      type: "grammar",
      text: "The workers _______ very fast in the playground.",
      options: ["ran", "run", "running", "runs"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(The workers)이므로 현재 시제 동사의 복수형태인 'run'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b19",
      type: "grammar",
      text: "The dogs _______ sweet songs in the morning.",
      options: ["sang", "sing", "sings", "singing"],
      correctAnswer: 1,
      explanation: "주어가 복수명사/대명사(The dogs)이므로 현재 시제 동사의 복수형태인 'sing'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b20",
      type: "grammar",
      text: "The birds _______ TV after finishing homework.",
      options: ["watching", "watches", "watch", "watched"],
      correctAnswer: 2,
      explanation: "주어가 복수명사/대명사(The birds)이므로 현재 시제 동사의 복수형태인 'watch'가 와야 합니다. (3인칭 단수형 s를 붙이지 않음)"
    },
    {
      id: "b21",
      type: "grammar",
      text: "I _______ to the zoo yesterday.",
      options: ["go", "went", "goes", "going"],
      correctAnswer: 1,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'went'가 되어야 합니다."
    },
    {
      id: "b22",
      type: "grammar",
      text: "I _______ a cute puppy on the street yesterday.",
      options: ["see", "saw", "sees", "seeing"],
      correctAnswer: 1,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'saw'가 되어야 합니다."
    },
    {
      id: "b23",
      type: "grammar",
      text: "I _______ pizza for dinner last night.",
      options: ["eats", "ate", "eat", "eating"],
      correctAnswer: 1,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'ate'가 되어야 합니다."
    },
    {
      id: "b24",
      type: "grammar",
      text: "I _______ a letter to my grandfather yesterday.",
      options: ["writes", "write", "writing", "wrote"],
      correctAnswer: 3,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'wrote'가 되어야 합니다."
    },
    {
      id: "b25",
      type: "grammar",
      text: "I _______ a new laptop computer last week.",
      options: ["buying", "buy", "bought", "buys"],
      correctAnswer: 2,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'bought'가 되어야 합니다."
    },
    {
      id: "b26",
      type: "grammar",
      text: "I _______ many beautiful photos last Sunday.",
      options: ["take", "takes", "took", "taking"],
      correctAnswer: 2,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'took'가 되어야 합니다."
    },
    {
      id: "b27",
      type: "grammar",
      text: "I _______ my old friend at the cafe yesterday.",
      options: ["meeting", "meets", "meet", "met"],
      correctAnswer: 3,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'met'가 되어야 합니다."
    },
    {
      id: "b28",
      type: "grammar",
      text: "I _______ a glass of orange juice this morning.",
      options: ["drinks", "drink", "drinking", "drank"],
      correctAnswer: 3,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'drank'가 되어야 합니다."
    },
    {
      id: "b29",
      type: "grammar",
      text: "I _______ for nine hours last night.",
      options: ["slept", "sleeping", "sleep", "sleeps"],
      correctAnswer: 0,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'slept'가 되어야 합니다."
    },
    {
      id: "b30",
      type: "grammar",
      text: "I _______ a nice gift to my mother yesterday.",
      options: ["giving", "give", "gave", "gives"],
      correctAnswer: 2,
      explanation: "문장에 과거 시점을 나타내는 부사(yesterday, last night 등)가 있으므로 동사는 과거형인 'gave'가 되어야 합니다."
    },
    {
      id: "b31",
      type: "grammar",
      text: "He _______ a soccer game on TV last night.",
      options: ["watches", "watched", "watching", "watch"],
      correctAnswer: 1,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'watched'가 알맞습니다."
    },
    {
      id: "b32",
      type: "grammar",
      text: "He _______ my bedroom yesterday morning.",
      options: ["clean", "cleans", "cleaned", "cleaning"],
      correctAnswer: 2,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'cleaned'가 알맞습니다."
    },
    {
      id: "b33",
      type: "grammar",
      text: "He _______ tennis with my dad last Saturday.",
      options: ["plays", "played", "play", "playing"],
      correctAnswer: 1,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'played'가 알맞습니다."
    },
    {
      id: "b34",
      type: "grammar",
      text: "He _______ my homework before dinner.",
      options: ["finish", "finishing", "finished", "finishes"],
      correctAnswer: 2,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'finished'가 알맞습니다."
    },
    {
      id: "b35",
      type: "grammar",
      text: "He _______ my teeth after lunch today.",
      options: ["brushing", "brushed", "brushes", "brush"],
      correctAnswer: 1,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'brushed'가 알맞습니다."
    },
    {
      id: "b36",
      type: "grammar",
      text: "He _______ spaghetti for dinner yesterday.",
      options: ["cook", "cooked", "cooks", "cooking"],
      correctAnswer: 1,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'cooked'가 알맞습니다."
    },
    {
      id: "b37",
      type: "grammar",
      text: "He _______ to music in my room last night.",
      options: ["listened", "listens", "listen", "listening"],
      correctAnswer: 0,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'listened'가 알맞습니다."
    },
    {
      id: "b38",
      type: "grammar",
      text: "He _______ my grandmother's house last weekend.",
      options: ["visiting", "visits", "visited", "visit"],
      correctAnswer: 2,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'visited'가 알맞습니다."
    },
    {
      id: "b39",
      type: "grammar",
      text: "He _______ my father's car yesterday afternoon.",
      options: ["washes", "washed", "wash", "washing"],
      correctAnswer: 1,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'washed'가 알맞습니다."
    },
    {
      id: "b40",
      type: "grammar",
      text: "He _______ to the library yesterday morning.",
      options: ["walk", "walks", "walked", "walking"],
      correctAnswer: 2,
      explanation: "과거에 완료된 일을 서술하고 있으므로 규칙 과거 변화인 '-ed'가 붙은 'walked'가 알맞습니다."
    },
    {
      id: "b41",
      type: "grammar",
      text: "The school starts / We meet _______ 7:00 AM.",
      options: ["on", "in", "at", "for"],
      correctAnswer: 2,
      explanation: "구체적인 시간 앞에는 'at'을 씁니다."
    },
    {
      id: "b42",
      type: "grammar",
      text: "We have a meeting _______ Mondays.",
      options: ["to", "on", "at", "in"],
      correctAnswer: 1,
      explanation: "요일이나 날짜 앞에는 'on'을 씁니다."
    },
    {
      id: "b43",
      type: "grammar",
      text: "The school starts / We meet _______ October.",
      options: ["on", "in", "at", "for"],
      correctAnswer: 1,
      explanation: "월(month) 앞에는 'in'을 씁니다."
    },
    {
      id: "b44",
      type: "grammar",
      text: "We have a meeting _______ summer.",
      options: ["on", "with", "in", "at"],
      correctAnswer: 2,
      explanation: "계절 앞에는 'in'을 씁니다."
    },
    {
      id: "b45",
      type: "grammar",
      text: "The school starts / We meet _______ 2024.",
      options: ["in", "on", "by", "at"],
      correctAnswer: 0,
      explanation: "연도 앞에는 'in'을 씁니다."
    },
    {
      id: "b46",
      type: "grammar",
      text: "We have a meeting _______ my birthday.",
      options: ["in", "on", "at", "during"],
      correctAnswer: 1,
      explanation: "특정한 날(생일 등) 앞에는 'on'을 씁니다."
    },
    {
      id: "b47",
      type: "grammar",
      text: "The school starts / We meet _______ night.",
      options: ["in", "at", "on", "for"],
      correctAnswer: 1,
      explanation: "밤에라고 할 때는 숙어처럼 'at night'을 씁니다."
    },
    {
      id: "b48",
      type: "grammar",
      text: "We have a meeting _______ the morning.",
      options: ["by", "in", "at", "on"],
      correctAnswer: 1,
      explanation: "아침에라고 표현할 때는 'in the morning'을 씁니다."
    },
    {
      id: "b49",
      type: "grammar",
      text: "The school starts / We meet _______ Christmas Day.",
      options: ["in", "to", "on", "at"],
      correctAnswer: 2,
      explanation: "크리스마스 '날(Day)'이므로 날짜에 준해 'on'을 씁니다."
    },
    {
      id: "b50",
      type: "grammar",
      text: "We have a meeting _______ noon.",
      options: ["on", "in", "during", "at"],
      correctAnswer: 3,
      explanation: "정오(noon)는 정확한 시점이므로 'at'을 사용합니다."
    },
    {
      id: "b51",
      type: "grammar",
      text: "The keys are / The child is _______ the bus stop.",
      options: ["by", "on", "in", "at"],
      correctAnswer: 3,
      explanation: "특정한 위치나 지점 앞에는 'at'을 씁니다."
    },
    {
      id: "b52",
      type: "grammar",
      text: "She is waiting for you / She lives _______ the kitchen table.",
      options: ["at", "under", "on", "in"],
      correctAnswer: 2,
      explanation: "표면 위에 접촉해 있을 때는 'on'을 씁니다."
    },
    {
      id: "b53",
      type: "grammar",
      text: "The keys are / The child is _______ the refrigerator.",
      options: ["on", "at", "under", "in"],
      correctAnswer: 3,
      explanation: "입체적인 내부 공간 안에는 'in'을 씁니다."
    },
    {
      id: "b54",
      type: "grammar",
      text: "She is waiting for you / She lives _______ the bed.",
      options: ["in", "under", "above", "on"],
      correctAnswer: 1,
      explanation: "아래 공간을 나타낼 때는 'under'를 씁니다."
    },
    {
      id: "b55",
      type: "grammar",
      text: "The keys are / The child is _______ Seoul.",
      options: ["on", "above", "at", "in"],
      correctAnswer: 3,
      explanation: "도시나 국가 이름 앞에는 'in'을 씁니다."
    },
    {
      id: "b56",
      type: "grammar",
      text: "She is waiting for you / She lives _______ the second floor.",
      options: ["on", "in", "behind", "at"],
      correctAnswer: 0,
      explanation: "건물의 층수 앞에는 'on'을 씁니다."
    },
    {
      id: "b57",
      type: "grammar",
      text: "The keys are / The child is _______ school.",
      options: ["on", "at", "with", "in"],
      correctAnswer: 1,
      explanation: "활동이 일어나는 기관명 앞에는 'at'을 씁니다 (at school, at home)."
    },
    {
      id: "b58",
      type: "grammar",
      text: "She is waiting for you / She lives _______ the classroom.",
      options: ["under", "at", "on", "in"],
      correctAnswer: 3,
      explanation: "방이나 교실 같은 밀폐된 공간 내부이므로 'in'을 씁니다."
    },
    {
      id: "b59",
      type: "grammar",
      text: "The keys are / The child is _______ the wall.",
      options: ["at", "on", "under", "in"],
      correctAnswer: 1,
      explanation: "벽 표면에 걸려 있는 것이므로 'on'을 씁니다."
    },
    {
      id: "b60",
      type: "grammar",
      text: "She is waiting for you / She lives _______ the umbrella.",
      options: ["on", "in", "under", "over"],
      correctAnswer: 2,
      explanation: "우산 아래에 있는 것이므로 'under'를 씁니다."
    },
    {
      id: "b61",
      type: "grammar",
      text: "Can you help _______ with my bag?",
      options: ["my", "I", "mine", "me"],
      correctAnswer: 3,
      explanation: "동사 help의 목적어 자리이므로 목적격인 'me'가 맞습니다."
    },
    {
      id: "b62",
      type: "grammar",
      text: "This notebook is not my book; it is _______.",
      options: ["herself", "her", "hers", "she"],
      correctAnswer: 2,
      explanation: "그녀의 것이라는 뜻의 소유대명사인 'hers'가 들어가야 합니다."
    },
    {
      id: "b63",
      type: "grammar",
      text: "They are washing _______ cars now.",
      options: ["them", "they", "theirs", "their"],
      correctAnswer: 3,
      explanation: "명사(cars) 앞이므로 소유격인 'their'가 와야 합니다."
    },
    {
      id: "b64",
      type: "grammar",
      text: "I saw _______ at the subway station yesterday.",
      options: ["him", "himself", "his", "he"],
      correctAnswer: 0,
      explanation: "동사 saw의 목적어 자리이므로 목적격인 'him'이 맞습니다."
    },
    {
      id: "b65",
      type: "grammar",
      text: "The teacher gave _______ some homework.",
      options: ["our", "ours", "we", "us"],
      correctAnswer: 3,
      explanation: "동사 gave의 간접목적어 자리이므로 목적격인 'us'가 맞습니다."
    },
    {
      id: "b66",
      type: "grammar",
      text: "This cup is _______, and that one is yours.",
      options: ["my", "me", "mine", "I"],
      correctAnswer: 2,
      explanation: "나의 것이라는 소유대명사 'mine'이 적절합니다."
    },
    {
      id: "b67",
      type: "grammar",
      text: "We love _______ English teacher very much.",
      options: ["us", "our", "ours", "we"],
      correctAnswer: 1,
      explanation: "명사 앞이므로 소유격인 'our'가 맞습니다."
    },
    {
      id: "b68",
      type: "grammar",
      text: "They introduced _______ to the team.",
      options: ["them", "themselves", "they", "their"],
      correctAnswer: 1,
      explanation: "주어(They)와 목적어가 같으므로 재귀대명사 'themselves'를 씁니다."
    },
    {
      id: "b69",
      type: "grammar",
      text: "Is this _______ new phone?",
      options: ["your", "yours", "you", "yourself"],
      correctAnswer: 0,
      explanation: "명사 앞이므로 소유격인 'your'가 어울립니다."
    },
    {
      id: "b70",
      type: "grammar",
      text: "The dog wagged _______ tail happily.",
      options: ["it", "itself", "its", "it's"],
      correctAnswer: 2,
      explanation: "개의 꼬리(tail)를 뜻하는 소유격 'its'가 맞습니다 (it's는 it is의 단축형)."
    },
    {
      id: "b71",
      type: "grammar",
      text: "He is _______ than his brother.",
      options: ["tallest", "taller", "more tall", "tall"],
      correctAnswer: 1,
      explanation: "단음절 형용사의 비교급은 뒤에 '-er'을 붙입니다."
    },
    {
      id: "b72",
      type: "grammar",
      text: "My house is _______ than your apartment.",
      options: ["big", "more big", "bigger", "biggest"],
      correctAnswer: 2,
      explanation: "단모음+단자음 형용사는 끝 자음을 하나 더 쓰고 '-er'을 붙여 'bigger'가 됩니다."
    },
    {
      id: "b73",
      type: "grammar",
      text: "This book is _______ than the last one.",
      options: ["interestinger", "most interesting", "more interesting", "interesting"],
      correctAnswer: 2,
      explanation: "3음절 이상의 긴 형용사의 비교급은 앞에 'more'를 붙입니다."
    },
    {
      id: "b74",
      type: "grammar",
      text: "My cold is _______ today than it was yesterday.",
      options: ["badder", "worst", "bad", "worse"],
      correctAnswer: 3,
      explanation: "bad의 비교급은 불규칙 변화형인 'worse'입니다."
    },
    {
      id: "b75",
      type: "grammar",
      text: "Your English is getting _______ every day.",
      options: ["best", "gooder", "good", "better"],
      correctAnswer: 3,
      explanation: "good의 비교급은 불규칙 변화형인 'better'입니다."
    },
    {
      id: "b76",
      type: "grammar",
      text: "My sister is three years _______ than me.",
      options: ["old", "older", "more old", "oldest"],
      correctAnswer: 1,
      explanation: "old의 비교급은 'older'입니다."
    },
    {
      id: "b77",
      type: "grammar",
      text: "Gold is _______ than silver.",
      options: ["expensive", "most expensive", "more expensive", "expensiver"],
      correctAnswer: 2,
      explanation: "긴 단어이므로 앞에 'more'를 붙여 비교급을 만듭니다."
    },
    {
      id: "b78",
      type: "grammar",
      text: "It is _______ today than it was yesterday.",
      options: ["colder", "cold", "more cold", "coldest"],
      correctAnswer: 0,
      explanation: "cold의 비교급은 'colder'입니다."
    },
    {
      id: "b79",
      type: "grammar",
      text: "A train is _______ than a bicycle.",
      options: ["faster", "more fast", "fast", "fastest"],
      correctAnswer: 0,
      explanation: "fast의 비교급은 'faster'입니다."
    },
    {
      id: "b80",
      type: "grammar",
      text: "This flower is _______ than that one.",
      options: ["beautifuler", "more beautiful", "most beautiful", "beautiful"],
      correctAnswer: 1,
      explanation: "긴 단어의 비교급으로 'more beautiful'이 알맞습니다."
    },
    {
      id: "b81",
      type: "vocabulary",
      text: "A _______ is a person who cooks delicious meals in a restaurant kitchen.",
      options: ["pilot", "chef", "farmer", "driver"],
      correctAnswer: 1,
      explanation: "식당 부엌에서 요리하는 사람은 요리사(chef)입니다."
    },
    {
      id: "b82",
      type: "vocabulary",
      text: "A _______ is a person who flies airplanes to travel across countries.",
      options: ["lawyer", "doctor", "teacher", "pilot"],
      correctAnswer: 3,
      explanation: "비행기를 조종해 하늘을 나는 사람은 조종사(pilot)입니다."
    },
    {
      id: "b83",
      type: "vocabulary",
      text: "A _______ is a person who takes care of people's teeth and treats cavities.",
      options: ["surgeon", "pharmacist", "dentist", "nurse"],
      correctAnswer: 2,
      explanation: "치아와 충치를 치료해주는 의사는 치과의사(dentist)입니다."
    },
    {
      id: "b84",
      type: "vocabulary",
      text: "A _______ is a person who makes and sells bread, cakes, and pastries.",
      options: ["grocer", "butcher", "baker", "carpenter"],
      correctAnswer: 2,
      explanation: "빵과 케이크를 굽는 사람은 제빵사(baker)입니다."
    },
    {
      id: "b85",
      type: "vocabulary",
      text: "A _______ is a person who grows vegetables, fruits, and raises farm animals.",
      options: ["farmer", "florist", "firefighter", "gardener"],
      correctAnswer: 0,
      explanation: "농작물을 재배하고 가축을 키우는 사람은 농부(farmer)입니다."
    },
    {
      id: "b86",
      type: "vocabulary",
      text: "A _______ is a person who writes news articles for newspapers and websites.",
      options: ["accountant", "secretary", "journalist", "librarian"],
      correctAnswer: 2,
      explanation: "신문이나 웹사이트용 뉴스를 취재해 글을 쓰는 사람은 기자(journalist)입니다."
    },
    {
      id: "b87",
      type: "vocabulary",
      text: "A _______ is a person who designs buildings and creates blueprints.",
      options: ["painter", "architect", "bricklayer", "engineer"],
      correctAnswer: 1,
      explanation: "건물의 형태와 설계도를 디자인하는 사람은 건축가(architect)입니다."
    },
    {
      id: "b88",
      type: "vocabulary",
      text: "A _______ is a person who works with wood to build and repair furniture.",
      options: ["plumber", "tailor", "shoemaker", "carpenter"],
      correctAnswer: 3,
      explanation: "나무를 다뤄 가구를 제작하고 고치는 사람은 목수(carpenter)입니다."
    },
    {
      id: "b89",
      type: "vocabulary",
      text: "A _______ is a person who is a doctor who treats sick or injured animals.",
      options: ["dentist", "veterinarian", "optician", "pediatrician"],
      correctAnswer: 1,
      explanation: "아픈 동물을 진료하고 치료해주는 수의사는 veterinarian(vet)입니다."
    },
    {
      id: "b90",
      type: "vocabulary",
      text: "A _______ is a person who performs in plays, movies, or television shows.",
      options: ["singer", "dancer", "actor", "director"],
      correctAnswer: 2,
      explanation: "연극, 영화, 드라마에 나와 연기하는 사람은 배우(actor)입니다."
    },
    {
      id: "b91",
      type: "grammar",
      text: "She _______ swim very fast; she won a medal.",
      options: ["can", "does", "has", "is"],
      correctAnswer: 0,
      explanation: "할 수 있다는 능력을 표현하므로 조동사 'can'이 맞습니다."
    },
    {
      id: "b92",
      type: "grammar",
      text: "You _______ wear a seatbelt in the car.",
      options: ["must", "musts", "musting", "must to"],
      correctAnswer: 0,
      explanation: "조동사 뒤에는 동사원형이 오며 의무를 나타내므로 'must'가 맞습니다."
    },
    {
      id: "b93",
      type: "grammar",
      text: "You look tired. You _______ go to sleep.",
      options: ["shoulds", "should to", "shoulding", "should"],
      correctAnswer: 3,
      explanation: "의견이나 충고를 부드럽게 제시할 때는 조동사 'should'를 씁니다."
    },
    {
      id: "b94",
      type: "grammar",
      text: "_______ I borrow your pen for a minute?",
      options: ["mays", "may", "maying", "may to"],
      correctAnswer: 1,
      explanation: "상대방의 정중한 허가를 구할 때는 'May I ~?'를 사용합니다."
    },
    {
      id: "b95",
      type: "grammar",
      text: "_______ you speak any foreign languages?",
      options: ["are", "do", "can", "have"],
      correctAnswer: 2,
      explanation: "외국어를 구사할 수 있는지 '능력'을 묻고 있으므로 'Can'이 알맞습니다."
    },
    {
      id: "b96",
      type: "grammar",
      text: "You _______ park here. It is strictly prohibited.",
      options: ["don't must", "must not", "must not to", "need not to"],
      correctAnswer: 1,
      explanation: "강한 금지를 나타낼 때는 'must not'을 사용합니다."
    },
    {
      id: "b97",
      type: "grammar",
      text: "I _______ hear you. The music is too loud.",
      options: ["could not to", "cannot", "can to not", "are not"],
      correctAnswer: 1,
      explanation: "음악 소리가 너무 커서 들을 수 없으므로(불능) 'cannot'이 맞습니다."
    },
    {
      id: "b98",
      type: "grammar",
      text: "You _______ eat too much candy. It's bad for your teeth.",
      options: ["should not", "ought not to", "should not to", "don't should"],
      correctAnswer: 0,
      explanation: "부정의 조언이나 권고이므로 'should not'이 알맞습니다."
    },
    {
      id: "b99",
      type: "grammar",
      text: "Take an umbrella. It _______ rain later.",
      options: ["might", "might have to", "might to", "mights"],
      correctAnswer: 0,
      explanation: "확실치 않은 약한 추측(~일지도 모른다)을 표현하므로 'might'가 어울립니다."
    },
    {
      id: "b100",
      type: "grammar",
      text: "_______ you like some coffee or tea?",
      options: ["woulds", "will to", "would to", "would"],
      correctAnswer: 3,
      explanation: "상대방의 의향을 정중히 묻는 표현은 'Would you like ~?'입니다."
    },
  ],
  intermediate: [
    {
      id: "i1",
      type: "grammar",
      text: "If I _______ you, I would accept the job offer.",
      options: ["was", "had been", "am", "were"],
      correctAnswer: 3,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'were'가 정답입니다."
    },
    {
      id: "i2",
      type: "grammar",
      text: "If I _______ the lottery, I would buy a big house.",
      options: ["winning", "won", "win", "wins"],
      correctAnswer: 1,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'won'가 정답입니다."
    },
    {
      id: "i3",
      type: "grammar",
      text: "If she _______ his phone number, she would call him.",
      options: ["known", "know", "knows", "knew"],
      correctAnswer: 3,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'knew'가 정답입니다."
    },
    {
      id: "i4",
      type: "grammar",
      text: "If he _______ enough money, he would travel around the world.",
      options: ["having", "have", "has", "had"],
      correctAnswer: 3,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'had'가 정답입니다."
    },
    {
      id: "i5",
      type: "grammar",
      text: "If they _______ near the ocean, they would go surfing every day.",
      options: ["live", "lived", "living", "lives"],
      correctAnswer: 1,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'lived'가 정답입니다."
    },
    {
      id: "i6",
      type: "grammar",
      text: "If we _______ French, we would move to Paris.",
      options: ["speaking", "speaks", "spoke", "speak"],
      correctAnswer: 2,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'spoke'가 정답입니다."
    },
    {
      id: "i7",
      type: "grammar",
      text: "If you _______ harder, you would pass the test.",
      options: ["studies", "study", "studying", "studied"],
      correctAnswer: 3,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'studied'가 정답입니다."
    },
    {
      id: "i8",
      type: "grammar",
      text: "If I _______ a promotion, I would throw a big party.",
      options: ["get", "gets", "getting", "got"],
      correctAnswer: 3,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'got'가 정답입니다."
    },
    {
      id: "i9",
      type: "grammar",
      text: "If he _______ more, he would play in the main match.",
      options: ["practices", "practiced", "practice", "practicing"],
      correctAnswer: 1,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'practiced'가 정답입니다."
    },
    {
      id: "i10",
      type: "grammar",
      text: "If they _______ early, they wouldn't miss the bus.",
      options: ["arrived", "arriving", "arrive", "arrives"],
      correctAnswer: 0,
      explanation: "현재 사실과 반대되는 일을 가정하는 가정법 과거 구문 'If + 주어 + 과거동사(be동사는 주로 were) ~, 주어 + would/could + 동사원형'에 맞춰 과거형 동사인 'arrived'가 정답입니다."
    },
    {
      id: "i11",
      type: "grammar",
      text: "He _______ at this school for five years.",
      options: ["works", "has worked", "is working", "worked"],
      correctAnswer: 1,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'has worked'가 맞습니다. 5년 동안 일해오고 있다(과거부터 현재까지 지속)."
    },
    {
      id: "i12",
      type: "grammar",
      text: "I _______ in Canada since 2018.",
      options: ["are living", "lived", "live", "have lived"],
      correctAnswer: 3,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'have lived'가 맞습니다. 2018년부터 쭉 살아오고 있다."
    },
    {
      id: "i13",
      type: "grammar",
      text: "He _______ his keys; he cannot open the door now.",
      options: ["is losing", "lost", "loses", "has lost"],
      correctAnswer: 3,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'has lost'가 맞습니다. 열쇠를 잃어버려서 지금 들어갈 수 없다 (현재에 영향을 주는 과거의 결과)."
    },
    {
      id: "i14",
      type: "grammar",
      text: "I _______ each other since childhood.",
      options: ["know", "knowing", "have known", "knew"],
      correctAnswer: 2,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'have known'가 맞습니다. 어릴 때부터 서로 알고 지내왔다."
    },
    {
      id: "i15",
      type: "grammar",
      text: "He _______ Paris three times so far.",
      options: ["visits", "visited", "has visited", "is visiting"],
      correctAnswer: 2,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'has visited'가 맞습니다. 지금까지 파리를 세 번 방문해 본 경험이 있다."
    },
    {
      id: "i16",
      type: "grammar",
      text: "I _______ my report; I can rest now.",
      options: ["are finishing", "have just finished", "finished", "finish"],
      correctAnswer: 1,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'have just finished'가 맞습니다. 방금 보고서를 마쳐서 이제 쉴 수 있다."
    },
    {
      id: "i17",
      type: "grammar",
      text: "She _______ to London; she is not here now.",
      options: ["has gone", "went", "is going", "goes"],
      correctAnswer: 0,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'has gone'가 맞습니다. 런던으로 떠나버렸다 (따라서 지금 여기에 없다)."
    },
    {
      id: "i18",
      type: "grammar",
      text: "I _______ him since last month.",
      options: ["am not seeing", "did not see", "have not seen", "do not see"],
      correctAnswer: 2,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'have not seen'가 맞습니다. 지난달 이후로 그를 본 적이 없다."
    },
    {
      id: "i19",
      type: "grammar",
      text: "He _______ sick since last Tuesday.",
      options: ["is", "was", "being", "has been"],
      correctAnswer: 3,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'has been'가 맞습니다. 지난 화요일부터 아파왔다."
    },
    {
      id: "i20",
      type: "grammar",
      text: "I _______ the piano for ten years.",
      options: ["played", "are playing", "play", "have played"],
      correctAnswer: 3,
      explanation: "과거에 발생한 일이 현재와 밀접하게 관련되어 있거나, 지속, 경험 등을 나타내므로 'have/has + p.p.' 형태인 'have played'가 맞습니다. 10년 동안 피아노를 쳐오고 있다."
    },
    {
      id: "i21",
      type: "grammar",
      text: "By the time we arrived at the station, the train _______.",
      options: ["leaves", "has left", "left", "had left"],
      correctAnswer: 3,
      explanation: "역에 도착한 시점보다 열차가 떠난 시점이 더 먼저이므로 과거완료를 씁니다."
    },
    {
      id: "i22",
      type: "grammar",
      text: "When she called me, I _______ dinner.",
      options: ["had already eaten", "already ate", "eats", "has already eaten"],
      correctAnswer: 0,
      explanation: "그녀가 나에게 전화했을 때 나는 이미 저녁을 다 먹은 상태였다."
    },
    {
      id: "i23",
      type: "grammar",
      text: "She _______ English for three years before she moved to London.",
      options: ["has studied", "had studied", "studies", "studied"],
      correctAnswer: 1,
      explanation: "런던으로 이사하기 이전에 3년 동안 영어 공부를 했었다."
    },
    {
      id: "i24",
      type: "grammar",
      text: "The shop _______ by the time I got there.",
      options: ["has closed", "closes", "had closed", "closed"],
      correctAnswer: 2,
      explanation: "내가 도착했을 때 가게는 이미 문을 닫았었다."
    },
    {
      id: "i25",
      type: "grammar",
      text: "He realized that he _______ his wallet on the subway.",
      options: ["has lost", "lost", "loses", "had lost"],
      correctAnswer: 3,
      explanation: "지갑을 지하철에서 잃어버렸다는 사실을 나중에(과거에) 깨달았다."
    },
    {
      id: "i26",
      type: "grammar",
      text: "Before that day, I _______ such a beautiful sunrise.",
      options: ["had never seen", "has never seen", "never sees", "never saw"],
      correctAnswer: 0,
      explanation: "그날 이전에는 그렇게 아름다운 일출을 본 적이 없었다."
    },
    {
      id: "i27",
      type: "grammar",
      text: "The movie _______ when we turned on the TV.",
      options: ["starts", "had already started", "has already started", "already started"],
      correctAnswer: 1,
      explanation: "우리가 TV를 켰을 때 영화는 이미 시작된 후였다."
    },
    {
      id: "i28",
      type: "grammar",
      text: "He _______ to bed before his parents came back home.",
      options: ["has gone", "had gone", "goes", "went"],
      correctAnswer: 1,
      explanation: "부모님이 집에 돌아오시기 전에 그는 이미 잠자리에 들었었다."
    },
    {
      id: "i29",
      type: "grammar",
      text: "As soon as I _______ my work, I went out for a walk.",
      options: ["has finished", "finished", "finishes", "had finished"],
      correctAnswer: 3,
      explanation: "일을 마치고 나서(과거 이전) 산책을 나갔다(과거)."
    },
    {
      id: "i30",
      type: "grammar",
      text: "The ground was wet because it _______ during the night.",
      options: ["rains", "has rained", "rained", "had rained"],
      correctAnswer: 3,
      explanation: "밤새 비가 왔었기 때문에(대과거) 아침에 땅이 젖어 있었다(과거)."
    },
    {
      id: "i31",
      type: "grammar",
      text: "They decided _______ a new house next year.",
      options: ["bought", "buying", "to buy", "buy"],
      correctAnswer: 2,
      explanation: "decide는 to부정사를 목적어로 취합니다."
    },
    {
      id: "i32",
      type: "grammar",
      text: "I enjoy _______ science fiction books in my free time.",
      options: ["read", "reading", "to read", "reads"],
      correctAnswer: 1,
      explanation: "enjoy는 동명사를 목적어로 취합니다."
    },
    {
      id: "i33",
      type: "grammar",
      text: "She promised _______ hard for the final exam.",
      options: ["studied", "to study", "studying", "study"],
      correctAnswer: 1,
      explanation: "promise는 to부정사를 목적어로 취합니다."
    },
    {
      id: "i34",
      type: "grammar",
      text: "He suggested _______ the historical museum this weekend.",
      options: ["to visit", "visiting", "visit", "visited"],
      correctAnswer: 1,
      explanation: "suggest는 동명사를 목적어로 취합니다."
    },
    {
      id: "i35",
      type: "grammar",
      text: "We plan _______ the clients tomorrow afternoon.",
      options: ["meet", "met", "meeting", "to meet"],
      correctAnswer: 3,
      explanation: "plan은 to부정사를 목적어로 취합니다."
    },
    {
      id: "i36",
      type: "grammar",
      text: "She kept _______ although nobody was listening.",
      options: ["talked", "talk", "to talk", "talking"],
      correctAnswer: 3,
      explanation: "keep은 동명사를 목적어로 취해 동작을 계속하다라는 뜻을 만듭니다."
    },
    {
      id: "i37",
      type: "grammar",
      text: "He hopes _______ a professional software engineer.",
      options: ["to become", "becoming", "become", "became"],
      correctAnswer: 0,
      explanation: "hope는 to부정사를 목적어로 취합니다."
    },
    {
      id: "i38",
      type: "grammar",
      text: "He finally gave up _______ to improve his health.",
      options: ["smoking", "smoked", "smoke", "to smoke"],
      correctAnswer: 0,
      explanation: "give up은 구동사(전치사 up)로서 동명사 목적어를 취합니다."
    },
    {
      id: "i39",
      type: "grammar",
      text: "Don't forget _______ your mother when you arrive.",
      options: ["calling", "call", "to call", "called"],
      correctAnswer: 2,
      explanation: "앞으로 해야 할 일을 잊지 말라는 의미이므로 미래 지향적인 to부정사가 옵니다."
    },
    {
      id: "i40",
      type: "grammar",
      text: "I remember _______ him once at the seminar last year.",
      options: ["met", "meeting", "to meet", "meet"],
      correctAnswer: 1,
      explanation: "과거에 했던 일을 기억한다는 의미이므로 동명사인 'meeting'이 적절합니다."
    },
    {
      id: "i41",
      type: "grammar",
      text: "The doctor _______ treated me was very kind.",
      options: ["whose", "who", "whom", "which"],
      correctAnswer: 1,
      explanation: "주어가 사람(The doctor)이고 뒤에 동사가 오므로 주격 관계대명사 'who'가 적당합니다."
    },
    {
      id: "i42",
      type: "grammar",
      text: "The book _______ I bought yesterday is very interesting.",
      options: ["whom", "whose", "who", "which"],
      correctAnswer: 3,
      explanation: "선행사가 사물(The book)이고 목적격 자리이므로 'which'를 씁니다."
    },
    {
      id: "i43",
      type: "grammar",
      text: "I met a writer _______ novel won the first prize.",
      options: ["who", "whose", "whom", "which"],
      correctAnswer: 1,
      explanation: "선행사의 소유격(~의 소설) 관계이므로 소유격 관계대명사 'whose'가 맞습니다."
    },
    {
      id: "i44",
      type: "grammar",
      text: "The boy _______ we met at the park is my classmate.",
      options: ["which", "whom", "who", "whose"],
      correctAnswer: 1,
      explanation: "선행사가 사람이고 목적격 자리에 쓰이므로 'whom'이 올바릅니다 (who도 가능하나 여기선 whom이 공식)."
    },
    {
      id: "i45",
      type: "grammar",
      text: "All the letters _______ were sent to him were returned.",
      options: ["that", "whose", "whom", "what"],
      correctAnswer: 0,
      explanation: "All이 선행사에 포함되어 수식하므로 관계대명사 'that'이 가장 자연스럽습니다."
    },
    {
      id: "i46",
      type: "grammar",
      text: "I don't understand _______ he is talking about.",
      options: ["that", "which", "who", "what"],
      correctAnswer: 3,
      explanation: "선행사를 자체적으로 포함하는 관계대명사이자 명사절을 이끄는 'what'이 알맞습니다 (~하는 것)."
    },
    {
      id: "i47",
      type: "grammar",
      text: "The girl _______ stands near the window is my sister.",
      options: ["whose", "who", "which", "whom"],
      correctAnswer: 1,
      explanation: "주어가 사람이고 주격 관계대명사 자리이므로 'who'가 정답입니다."
    },
    {
      id: "i48",
      type: "grammar",
      text: "The house _______ has a red roof is mine.",
      options: ["who", "whose", "whom", "which"],
      correctAnswer: 3,
      explanation: "선행사가 사물이므로 'which'가 정답입니다."
    },
    {
      id: "i49",
      type: "grammar",
      text: "The table _______ legs are broken needs to be repaired.",
      options: ["that", "who", "whose", "which"],
      correctAnswer: 2,
      explanation: "테이블의 다리(소유 관계)이므로 소유격 관계대명사 'whose'가 알맞습니다."
    },
    {
      id: "i50",
      type: "grammar",
      text: "_______ she needs right now is a warm cup of tea.",
      options: ["which", "that", "who", "what"],
      correctAnswer: 3,
      explanation: "주어 역할을 하는 선행사 포함 관계대명사인 'what'이 들어갈 자리입니다."
    },
    {
      id: "i51",
      type: "grammar",
      text: "The historic bridge _______ in 1890.",
      options: ["was built", "has built", "is building", "built"],
      correctAnswer: 0,
      explanation: "다리는 건설되는 대상(과거)이므로 과거 수동태 'was built'가 맞습니다."
    },
    {
      id: "i52",
      type: "grammar",
      text: "Many ancient relics _______ in this cave last year.",
      options: ["are discovering", "discovered", "have discovered", "were discovered"],
      correctAnswer: 3,
      explanation: "유물(복수)이 발견된 수동의 과거 사실이므로 'were discovered'입니다."
    },
    {
      id: "i53",
      type: "grammar",
      text: "English _______ by millions of people worldwide.",
      options: ["has spoken", "is spoken", "speaks", "is speaking"],
      correctAnswer: 1,
      explanation: "영어는 사용되는 대상이므로 현재 수동태 'is spoken'이 알맞습니다."
    },
    {
      id: "i54",
      type: "grammar",
      text: "The next meeting _______ in the main conference room tomorrow.",
      options: ["holds", "will hold", "will be held", "will be holding"],
      correctAnswer: 2,
      explanation: "회의가 개최될 것이므로 미래 수동태 'will be held'를 씁니다."
    },
    {
      id: "i55",
      type: "grammar",
      text: "The outdoor concert _______ due to the heavy storm.",
      options: ["has been canceled", "canceled", "has canceled", "cancels"],
      correctAnswer: 0,
      explanation: "콘서트가 폭풍우 때문에 취소된 상태를 나타내므로 현재완료 수동태 'has been canceled'가 맞습니다."
    },
    {
      id: "i56",
      type: "grammar",
      text: "The classroom _______ right now; please do not enter.",
      options: ["has painted", "is painting", "paints", "is being painted"],
      correctAnswer: 3,
      explanation: "교실이 칠해지고 있는 진행 중인 수동태(현재진행 수동태)이므로 'is being painted'가 알맞습니다."
    },
    {
      id: "i57",
      type: "grammar",
      text: "This romantic novel _______ by a famous writer in 1920.",
      options: ["was written", "has written", "wrote", "was writing"],
      correctAnswer: 0,
      explanation: "소설이 작성된 과거 사실이므로 과거 수동태 'was written'이 정답입니다."
    },
    {
      id: "i58",
      type: "grammar",
      text: "These delicate clothes _______ by hand.",
      options: ["must be washing", "must be washed", "must wash", "must washing"],
      correctAnswer: 1,
      explanation: "조동사가 있는 수동태로 옷이 세탁되어야 함을 나타내므로 'must be washed'가 맞습니다."
    },
    {
      id: "i59",
      type: "grammar",
      text: "They _______ about the danger before they set out.",
      options: ["warns", "warned", "had warned", "had been warned"],
      correctAnswer: 3,
      explanation: "그들이 출발하기 전(과거)에 이미 경고를 받았으므로(대과거 수동) 'had been warned'가 맞습니다."
    },
    {
      id: "i60",
      type: "grammar",
      text: "These toys _______ of high-quality plastic.",
      options: ["make", "making", "are making", "are made"],
      correctAnswer: 3,
      explanation: "장난감들이 만들어지는 일반적 사실이므로 현재 수동태 'are made'가 맞습니다."
    },
    {
      id: "i61",
      type: "vocabulary",
      text: "We decided to _______ the soccer match because of the heavy rain.",
      options: ["put off", "take off", "put on", "call off"],
      correctAnswer: 0,
      explanation: "회의나 시합을 뒤로 '연기하다'라는 뜻의 구동사는 'put off'입니다. (call off는 취소하다)"
    },
    {
      id: "i62",
      type: "vocabulary",
      text: "The concert was _______ due to the lead singer's sudden illness.",
      options: ["called off", "put off", "called on", "taken up"],
      correctAnswer: 0,
      explanation: "콘서트가 '취소되었다'는 문맥이므로 'called off'가 맞습니다."
    },
    {
      id: "i63",
      type: "vocabulary",
      text: "I am _______ my lost glasses. Have you seen them?",
      options: ["looking for", "looking up", "looking after", "looking forward"],
      correctAnswer: 0,
      explanation: "지갑이나 안경 등을 '찾다'라는 뜻의 구동사는 'look for'입니다. (look after: 돌보다)"
    },
    {
      id: "i64",
      type: "vocabulary",
      text: "We have _______ milk. I need to go to the store.",
      options: ["run over", "run away from", "run out of", "run into"],
      correctAnswer: 2,
      explanation: "재료나 자원이 '바닥나다, 다 떨어지다'라는 뜻의 구동사는 'run out of'입니다."
    },
    {
      id: "i65",
      type: "vocabulary",
      text: "Please _______ your shoes before entering the Korean house.",
      options: ["take on", "put on", "keep up", "take off"],
      correctAnswer: 3,
      explanation: "옷이나 신발을 '벗다'라는 뜻의 구동사는 'take off'입니다."
    },
    {
      id: "i66",
      type: "vocabulary",
      text: "He ran faster to _______ his friends who were ahead.",
      options: ["look down on", "run out of", "catch up with", "keep away from"],
      correctAnswer: 2,
      explanation: "앞선 사람을 '따라잡다'라는 뜻의 구동사는 'catch up with'입니다."
    },
    {
      id: "i67",
      type: "vocabulary",
      text: "Don't _______ your dreams; keep trying until you succeed.",
      options: ["give up", "give out", "give away", "give in"],
      correctAnswer: 0,
      explanation: "노력이나 희망을 '포기하다'라는 뜻의 구동사는 'give up'입니다."
    },
    {
      id: "i68",
      type: "vocabulary",
      text: "The nurse _______ the patients with great care.",
      options: ["looked for", "looked up to", "looked down on", "looked after"],
      correctAnswer: 3,
      explanation: "환자나 아이를 '돌보다'라는 뜻의 구동사는 'look after'의 과거형인 'looked after'입니다."
    },
    {
      id: "i69",
      type: "vocabulary",
      text: "The young entrepreneur decided to _______ a new IT company.",
      options: ["set up", "set off", "set back", "set down"],
      correctAnswer: 0,
      explanation: "회사나 단체를 '설립하다, 세우다'라는 뜻의 구동사는 'set up'입니다."
    },
    {
      id: "i70",
      type: "vocabulary",
      text: "He applied for the manager job, but his application was _______.",
      options: ["turned on", "turned away", "turned down", "turned up"],
      correctAnswer: 2,
      explanation: "제안이나 지원을 '거절하다'라는 뜻의 구동사는 'turn down'의 수동 형태인 'turned down'입니다."
    },
    {
      id: "i71",
      type: "grammar",
      text: "He won the gold medal. He _______ extremely happy.",
      options: ["must be", "should have been", "must have been", "cannot have been"],
      correctAnswer: 2,
      explanation: "금메달을 땄으므로 과거에 매우 행복했음에 틀림없다는 강한 과거 추측인 'must have been'이 알맞습니다."
    },
    {
      id: "i72",
      type: "grammar",
      text: "I failed the exam yesterday. I _______ harder.",
      options: ["should study", "must have studied", "should have studied", "could study"],
      correctAnswer: 2,
      explanation: "시험에 떨어졌으므로 과거에 더 열심히 공부했어야 했다는 후회/유감인 'should have studied'가 옵니다."
    },
    {
      id: "i73",
      type: "grammar",
      text: "He was in New York yesterday, so you _______ him in Seoul.",
      options: ["cannot have seen", "might have seen", "cannot see", "must see"],
      correctAnswer: 0,
      explanation: "어제 뉴욕에 있었으므로 서울에서 그를 보았을 리가 없다는 강한 과거 부정 추측인 'cannot have seen'이 맞습니다."
    },
    {
      id: "i74",
      type: "grammar",
      text: "I cannot find my keys. I _______ them in the car.",
      options: ["must leave", "might have left", "might leave", "should leave"],
      correctAnswer: 1,
      explanation: "열쇠가 없으므로 차에 두고 내렸을지도 모른다는 약한 과거 추측인 'might have left'가 적합합니다."
    },
    {
      id: "i75",
      type: "grammar",
      text: "We played well, and we _______ the match, but we were unlucky.",
      options: ["could have won", "should win", "must win", "could win"],
      correctAnswer: 0,
      explanation: "이길 수도 있었는데 아쉽게도 졌다는 과거의 가능성인 'could have won'이 맞습니다."
    },
    {
      id: "i76",
      type: "grammar",
      text: "You _______ me earlier. I was waiting for your help.",
      options: ["should have called", "should call", "cannot call", "must have called"],
      correctAnswer: 0,
      explanation: "기다렸으므로 더 일찍 나에게 전화를 했었어야 했다는 원망/후회의 'should have called'가 맞습니다."
    },
    {
      id: "i77",
      type: "grammar",
      text: "The ground is completely wet this morning. It _______ last night.",
      options: ["must rain", "must have rained", "should rain", "cannot have rained"],
      correctAnswer: 1,
      explanation: "아침에 땅이 다 젖었으므로 밤새 비가 내렸음에 틀림없다는 추측 'must have rained'가 맞습니다."
    },
    {
      id: "i78",
      type: "grammar",
      text: "He is a very honest person. He _______ the money.",
      options: ["cannot steal", "cannot have stolen", "should steal", "must have stolen"],
      correctAnswer: 1,
      explanation: "매우 정직하므로 돈을 훔쳤을 리 없다는 'cannot have stolen'이 어울립니다."
    },
    {
      id: "i79",
      type: "grammar",
      text: "She is not here yet. She _______ the early bus.",
      options: ["might have missed", "must have missed", "might miss", "should miss"],
      correctAnswer: 0,
      explanation: "아직 안 왔으므로 버스를 놓쳤을 수도 있다는 약한 과거 추측인 'might have missed'가 맞습니다."
    },
    {
      id: "i80",
      type: "grammar",
      text: "If you had asked me, I _______ you gladly.",
      options: ["could help", "must have helped", "would have helped", "would help"],
      correctAnswer: 2,
      explanation: "네가 물어봤었더라면 기꺼이 도왔을 텐데(가정법 과거완료 귀결절)에 대응하는 'would have helped'가 정답입니다."
    },
    {
      id: "i81",
      type: "vocabulary",
      text: "The rich donor wanted to remain _______ to avoid media attention.",
      options: ["anonymous", "ambiguous", "unanimous", "famous"],
      correctAnswer: 0,
      explanation: "신원을 밝히지 않는 '익명의' 상태는 anonymous입니다. (unanimous: 만장일치의, ambiguous: 모호한)"
    },
    {
      id: "i82",
      type: "vocabulary",
      text: "The pilot managed to land the plane safely despite _______ weather conditions.",
      options: ["adverse", "converse", "diverse", "reverse"],
      correctAnswer: 0,
      explanation: "나쁘고 불리한 날씨 조건은 'adverse' weather conditions라고 표현합니다."
    },
    {
      id: "i83",
      type: "vocabulary",
      text: "I still have a _______ memory of my first trip to Jeju Island.",
      options: ["hollow", "vivid", "vague", "shallow"],
      correctAnswer: 1,
      explanation: "선명하고 생생한 기억을 뜻하므로 'vivid'가 알맞습니다."
    },
    {
      id: "i84",
      type: "vocabulary",
      text: "The internet led to an _______ boom in global communication.",
      options: ["previous", "common", "unprecedented", "unpredictable"],
      correctAnswer: 2,
      explanation: "이전에는 유례가 없었던 폭발적 붐이므로 '전례 없는' 뜻의 'unprecedented'가 적합합니다."
    },
    {
      id: "i85",
      type: "vocabulary",
      text: "She was _______ to accept the invitation because she was very busy.",
      options: ["willing", "reluctant", "excited", "eager"],
      correctAnswer: 1,
      explanation: "바빠서 초대를 수락하기를 '꺼리는, 주저하는' 뜻의 'reluctant'가 들어갈 자리입니다."
    },
    {
      id: "i86",
      type: "vocabulary",
      text: "We need a _______ solution to this budget problem, not a theoretical one.",
      options: ["pragmatic", "idealistic", "romantic", "optimistic"],
      correctAnswer: 0,
      explanation: "이론적이거나 이상적인 것과 대조되는 '실용적인' 해결책은 'pragmatic'입니다."
    },
    {
      id: "i87",
      type: "vocabulary",
      text: "With the rapid climate change, some rising of sea levels seems _______.",
      options: ["avoidable", "inevitable", "unlikely", "accidental"],
      correctAnswer: 1,
      explanation: "피할 수 없는 당연한 결과이므로 '불가피한' 뜻의 'inevitable'이 적절합니다."
    },
    {
      id: "i88",
      type: "vocabulary",
      text: "The speaker gave a _______ and logical explanation of the new policy.",
      options: ["broken", "confusing", "coherent", "vague"],
      correctAnswer: 2,
      explanation: "논리적이고 앞뒤가 맞는 '일관성 있는, 조리 있는' 뜻의 'coherent'가 알맞습니다."
    },
    {
      id: "i89",
      type: "vocabulary",
      text: "There is a _______ difference between these two colors; they look almost identical.",
      options: ["subtle", "obvious", "strong", "loud"],
      correctAnswer: 0,
      explanation: "거의 비슷해 보여서 잘 알아채기 힘든 미세하고 '미묘한' 차이는 'subtle' difference입니다."
    },
    {
      id: "i90",
      type: "vocabulary",
      text: "The _______ student spent hours studying in the library to get top grades.",
      options: ["lazy", "careless", "indifferent", "diligent"],
      correctAnswer: 3,
      explanation: "학업에 열중하는 '부지런하고 성실한' 뜻의 'diligent'가 맞습니다."
    },
    {
      id: "i91",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Renewable energy sources, such as wind and solar power, are crucial for reducing global carbon emissions. Unlike fossil fuels, they do not deplete and cause minimal environmental damage during operation.\"\n\nQuestion: What is one advantage of renewable energy mentioned in the text?",
      options: ["It is unaffected by weather.", "It is easier to transport.", "It is always cheaper.", "It does not deplete over time."],
      correctAnswer: 3,
      explanation: "본문에서 'Unlike fossil fuels, they do not deplete(화석 연료와 달리 고갈되지 않는다)'라고 강점을 명시하고 있습니다."
    },
    {
      id: "i92",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Urban green spaces, such as parks and community gardens, provide substantial mental health benefits. Studies show that spending time in green zones lowers stress levels and improves overall mood.\"\n\nQuestion: What is the main benefit of urban green spaces according to the text?",
      options: ["They improve the mental well-being of citizens.", "They generate tax revenue.", "They prevent any crime in parks.", "They eliminate city noise completely."],
      correctAnswer: 0,
      explanation: "녹지에서 시간을 보내는 것이 스트레스 수치를 낮추고 기분을 개선한다는 것은 정신적 웰빙(mental health/well-being) 혜택을 뜻합니다."
    },
    {
      id: "i93",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Artificial intelligence is transforming the medical industry. Algorithms can analyze complex medical scans faster and more accurately than human doctors, helping to diagnose diseases like cancer in early stages.\"\n\nQuestion: According to the passage, how is AI helping doctors in the medical field?",
      options: ["By prescribing cheap drugs to patients.", "By analyzing medical scans with high speed and accuracy.", "By training new nurses in hospitals.", "By performing major surgeries independently."],
      correctAnswer: 1,
      explanation: "본문에서 알고리즘이 복잡한 의학 스캔 데이터를 의사보다 더 빠르고 정확하게 분석할 수 있다고 설명합니다."
    },
    {
      id: "i94",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The rise of remote work has changed the business world. While it offers employees greater flexibility and eliminates commutes, it can also lead to feelings of isolation and make collaboration more difficult.\"\n\nQuestion: Which of the following is mentioned as a negative aspect of remote work?",
      options: ["It can cause feelings of social isolation.", "It increases the daily commute time.", "It demands higher education from workers.", "It makes employees work longer hours."],
      correctAnswer: 0,
      explanation: "본문은 원격 근무의 단점으로 고립감(feelings of isolation)과 협업의 어려움을 들고 있습니다."
    },
    {
      id: "i95",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Biodiversity is essential for healthy ecosystems. Each species, no matter how small, plays a unique role, and the extinction of a single species can disrupt the entire food chain.\"\n\nQuestion: According to the text, why is the loss of a single species dangerous?",
      options: ["It makes soil richer for farming.", "It directly reduces global temperature.", "It forces all animals to migrate.", "It can disrupt the balance of the food chain."],
      correctAnswer: 3,
      explanation: "본문 마지막 부분에서 단 하나의 생물 종이 멸종하더라도 전체 먹이 사슬(food chain)을 붕괴/교란할 수 있다고 경고합니다."
    },
    {
      id: "i96",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The printing press, invented by Johannes Gutenberg, revolutionized education. Books could be mass-produced, making literature and knowledge accessible to the general public, not just the wealthy elite.\"\n\nQuestion: How did Gutenberg's printing press change society?",
      options: ["It restricted writing to wealthy elites.", "It increased the price of books.", "It created new languages for printing.", "It made books accessible to the general public."],
      correctAnswer: 3,
      explanation: "인쇄기의 발명으로 부유한 엘리트뿐만 아니라 일반 대중(general public)도 책과 지식에 접근할 수 있게 되었습니다."
    },
    {
      id: "i97",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Water conservation is becoming urgent due to global warming. Simple actions, like fixing leaky faucets and collecting rainwater for plants, can save thousands of gallons of water annually per household.\"\n\nQuestion: What simple action is suggested in the text to conserve water?",
      options: ["Fixing leaky faucets at home.", "Stopping water usage in winter.", "Drinking less bottled water.", "Building massive dams."],
      correctAnswer: 0,
      explanation: "본문에서 제시된 쉬운 실천 방법 중 하나로 '새는 수도꼭지 고치기(fixing leaky faucets)'가 나와 있습니다."
    },
    {
      id: "i98",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Regular physical exercise improves cardiovascular health. It strengthens the heart muscle and lowers blood pressure, reducing the risk of heart disease and strokes.\"\n\nQuestion: How does regular exercise benefit the heart according to the text?",
      options: ["It makes the heart beat much slower.", "It strengthens the heart muscle and lowers blood pressure.", "It increases the size of the lungs.", "It cures all genetic heart defects."],
      correctAnswer: 1,
      explanation: "운동을 통해 심장 근육을 강화하고 혈압을 낮추어 심장 질환 발생 가능성을 줄여준다고 명시되어 있습니다."
    },
    {
      id: "i99",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Online shopping has grown rapidly, leading to the decline of traditional retail stores. Customers enjoy the convenience of home delivery, but the increase in packaging material has created environmental challenges.\"\n\nQuestion: What environmental problem is associated with online shopping in the text?",
      options: ["The rise in delivery vehicle noise.", "The decrease in paper manufacturing.", "The increase in packaging waste material.", "The high cost of online transactions."],
      correctAnswer: 2,
      explanation: "온라인 쇼핑이 편리하지만 포장재의 증가(increase in packaging material)가 환경적 도전(쓰레기 문제)을 유발했다고 언급했습니다."
    },
    {
      id: "i100",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The Great Wall of China was built over centuries to protect the empire from northern invasions. It stands as a symbol of human engineering and historical defense systems.\"\n\nQuestion: Why was the Great Wall of China originally constructed?",
      options: ["To create a trade route for merchants.", "To serve as a monument for gods.", "To defend the empire from northern invaders.", "To show off the wealth of the emperor."],
      correctAnswer: 2,
      explanation: "제국을 북쪽 침략자(invasions/invaders)로부터 보호하기 위해 지어졌다고 기술되어 있습니다."
    },
  ],
  advanced: [
    {
      id: "a1",
      type: "grammar",
      text: "Hardly _______ entered the conference hall when the lights went out.",
      options: ["did we", "we had", "had we", "we did"],
      correctAnswer: 2,
      explanation: "부정어구(Hardly)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'had we'가 맞습니다. Hardly had we entered ~의 도치 구문"
    },
    {
      id: "a2",
      type: "grammar",
      text: "Under no circumstances _______ open this secure drawer without the manager's key.",
      options: ["you should", "you did", "did you", "should you"],
      correctAnswer: 3,
      explanation: "부정어구(Under no circumstances)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'should you'가 맞습니다. Under no circumstances should you ~ (어떤 경우에도 ~해서는 안 된다) 도치 구문"
    },
    {
      id: "a3",
      type: "grammar",
      text: "Little _______ realize that the keys were sitting on the kitchen table.",
      options: ["I had", "did I", "had I", "I did"],
      correctAnswer: 1,
      explanation: "부정어구(Little)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'did I'가 맞습니다. Little did I realize ~ (나는 전혀 깨닫지 못했다) 과거시제 도치 구문"
    },
    {
      id: "a4",
      type: "grammar",
      text: "Rarely _______ witnessed such a brilliant theatrical performance.",
      options: ["did I", "have I", "I did", "I have"],
      correctAnswer: 1,
      explanation: "부정어구(Rarely)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'have I'가 맞습니다. Rarely have I witnessed ~ (좀처럼 본 적이 없다) 완료형 도치 구문"
    },
    {
      id: "a5",
      type: "grammar",
      text: "Not only _______ problem solved, but it also opened new possibilities.",
      options: ["the was", "did the", "the did", "was the"],
      correctAnswer: 3,
      explanation: "부정어구(Not only)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'was the'가 맞습니다. Not only was the problem solved, but ~ (문제 해결뿐만 아니라 ~했다) be동사 도치 구문"
    },
    {
      id: "a6",
      type: "grammar",
      text: "No sooner _______ plane taken off than the storm hit the airport runway.",
      options: ["the did", "had the", "did the", "the had"],
      correctAnswer: 1,
      explanation: "부정어구(No sooner)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'had the'가 맞습니다. No sooner had the plane taken off than ~ (~하자마자 ~했다) 과거완료 도치 구문"
    },
    {
      id: "a7",
      type: "grammar",
      text: "Seldom _______ see such dedication and commitment in modern workplaces.",
      options: ["do we", "we do", "are we", "we are"],
      correctAnswer: 0,
      explanation: "부정어구(Seldom)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'do we'가 맞습니다. Seldom do we see ~ (좀처럼 보기 힘들다) 일반동사 현재 도치 구문"
    },
    {
      id: "a8",
      type: "grammar",
      text: "On no account _______ patient stop taking the prescribed medicine suddenly.",
      options: ["should a", "a did", "did a", "a should"],
      correctAnswer: 0,
      explanation: "부정어구(On no account)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'should a'가 맞습니다. On no account should a patient ~ (환자는 절대 ~해서는 안 된다) 조동사 도치 구문"
    },
    {
      id: "a9",
      type: "grammar",
      text: "Only later _______ know that the police were recording their conversation.",
      options: ["had they", "they had", "did they", "they did"],
      correctAnswer: 2,
      explanation: "부정어구(Only later)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'did they'가 맞습니다. Only later did they know ~ (시간 부사구 뒤의 일반동사 과거 도치)"
    },
    {
      id: "a10",
      type: "grammar",
      text: "Never before _______ scientific discovery caused so much public debate.",
      options: ["a has", "did a", "has a", "a did"],
      correctAnswer: 2,
      explanation: "부정어구(Never before)가 문장 앞으로 나가 도치가 일어난 구문입니다. 조동사/be동사/do동사가 주어 앞으로 나와야 하므로 'has a'가 맞습니다. Never before has a scientific discovery caused ~ (완료시제 도치 구문)"
    },
    {
      id: "a11",
      type: "grammar",
      text: "It is essential that she _______ present at the board meeting tomorrow.",
      options: ["is", "been", "be", "was"],
      correctAnswer: 2,
      explanation: "essential, mandatory 등의 형용사 뒤 that절에는 '(should) + 동사원형'을 쓰므로 'be'가 적절합니다."
    },
    {
      id: "a12",
      type: "grammar",
      text: "The manager demanded that he _______ the financial report by Friday.",
      options: ["submits", "submitted", "to submit", "submit"],
      correctAnswer: 3,
      explanation: "demand, suggest 등의 제안/요구 동사 뒤 that절에는 동사원형인 'submit'이 와야 합니다."
    },
    {
      id: "a13",
      type: "grammar",
      text: "It is crucial that the secret agent _______ their true identity.",
      options: ["won't reveal", "not to reveal", "not reveal", "doesn't reveal"],
      correctAnswer: 2,
      explanation: "당위성 형용사(crucial) 뒤 that절의 부정형은 '(should) + not + 동사원형' 형태이므로 'not reveal'이 정답입니다."
    },
    {
      id: "a14",
      type: "grammar",
      text: "I would rather you _______ anyone about this meeting.",
      options: ["wouldn't tell", "don't tell", "not tell", "didn't tell"],
      correctAnswer: 3,
      explanation: "'would rather + 주어 + 과거동사' 구문으로, 현재 사실과 반대되거나 바라지 않는 상황을 완곡히 가정하므로 과거 부정형인 'didn't tell'을 씁니다."
    },
    {
      id: "a15",
      type: "grammar",
      text: "I wish I _______ how to solve this equation right now.",
      options: ["knew", "know", "had known", "would know"],
      correctAnswer: 0,
      explanation: "현재 해결 방법을 모르는 것에 대한 아쉬움이므로 가정법 과거인 'knew'가 맞습니다."
    },
    {
      id: "a16",
      type: "grammar",
      text: "I wish I _______ about the project schedule last week.",
      options: ["would know", "had known", "knew", "know"],
      correctAnswer: 1,
      explanation: "지난주(과거) 일에 대한 후회/가정이므로 가정법 과거완료인 'had known'을 사용합니다."
    },
    {
      id: "a17",
      type: "grammar",
      text: "He proposed that the final decision _______ until next month.",
      options: ["be postponed", "is postponed", "postponed", "postpones"],
      correctAnswer: 0,
      explanation: "propose 뒤의 that절에서 수동태의 당위(~되어야 한다)를 나타내므로 '(should) + be + p.p.' 형태인 'be postponed'가 맞습니다."
    },
    {
      id: "a18",
      type: "grammar",
      text: "My father prefers that I _______ out late, but he said: 'I'd rather you _______ tonight.'",
      options: ["not go", "wouldn't go", "didn't go", "don't go"],
      correctAnswer: 2,
      explanation: "'I would rather you + 과거동사' 패턴에 맞추어 과거 부정형인 'didn't go'를 적용합니다."
    },
    {
      id: "a19",
      type: "grammar",
      text: "If only I _______ medicine in college; I could be a doctor now.",
      options: ["study", "studied", "have studied", "had studied"],
      correctAnswer: 3,
      explanation: "과거 사실에 대한 아쉬움/후회이므로 'If only + 과거완료(had studied)'를 사용합니다."
    },
    {
      id: "a20",
      type: "grammar",
      text: "It is imperative that all research data _______ strictly confidential.",
      options: ["was kept", "is kept", "be kept", "keep"],
      correctAnswer: 2,
      explanation: "imperative(필수적인) 형용사에 걸리는 that절의 수동태로, 동사원형 수동인 'be kept'가 와야 합니다."
    },
    {
      id: "a21",
      type: "grammar",
      text: "_______ about your financial problems, I would have lent you the money.",
      options: ["Had I known", "If I knew", "Did I know", "If I would know"],
      correctAnswer: 0,
      explanation: "If I had known에서 If가 생략되면서 had가 도치된 'Had I known'이 맞습니다. (가정법 과거완료 도치)"
    },
    {
      id: "a22",
      type: "grammar",
      text: "_______ any technical difficulties, please contact our support team.",
      options: ["Did you encounter", "If you encountered", "Would you encounter", "Should you encounter"],
      correctAnswer: 3,
      explanation: "If you should encounter에서 If가 생략되어 'Should you encounter'가 되었습니다. (가정법 미래 도치)"
    },
    {
      id: "a23",
      type: "grammar",
      text: "_______ your generous donation, we would be in big trouble today.",
      options: ["Had it not been for", "Was it not for", "If it was not for", "Were it not for"],
      correctAnswer: 3,
      explanation: "현재 사실에 대한 가정('오늘날 곤란할 텐데')에 맞추어 'If it were not for ~'의 도치인 'Were it not for'가 맞습니다."
    },
    {
      id: "a24",
      type: "grammar",
      text: "_______ the map you gave us last week, we would have got lost.",
      options: ["Had it not been", "Were it not for", "Had it not been for", "If it was not for"],
      correctAnswer: 2,
      explanation: "과거 일에 대한 가정('우리는 길을 잃었을 것이다')이므로 과거완료 도치 'Had it not been for ~'가 맞습니다."
    },
    {
      id: "a25",
      type: "grammar",
      text: "If she had accepted the job in New York last year, she _______ rich today.",
      options: ["had been", "would have been", "would be", "will be"],
      correctAnswer: 2,
      explanation: "과거의 일(last year)이 현재(today)에 영향을 미치는 혼합 가정법이므로 주절에는 'would + 동사원형(would be)'이 옵니다."
    },
    {
      id: "a26",
      type: "grammar",
      text: "_______ harder in his youth, he would have a better job now.",
      options: ["Should he study", "If he studied", "Had he studied", "Did he study"],
      correctAnswer: 2,
      explanation: "과거(youth)의 반대가 현재(now)에 미치므로, 조건절은 과거완료 도치인 'Had he studied'가 옵니다."
    },
    {
      id: "a27",
      type: "grammar",
      text: "_______ more experienced, she would handle this crisis easily.",
      options: ["If she is", "Was she", "Had she been", "Were she"],
      correctAnswer: 3,
      explanation: "현재의 가정('경험이 더 많다면')의 도치이므로 'Were she'가 정답입니다."
    },
    {
      id: "a28",
      type: "grammar",
      text: "Had we played slightly better in the final match, we _______ the cup.",
      options: ["will win", "had won", "would have won", "would win"],
      correctAnswer: 2,
      explanation: "조건절이 과거완료 도치(Had we played)이므로 과거 완료 가정을 이끄는 'would have won'이 귀결절에 어울립니다."
    },
    {
      id: "a29",
      type: "grammar",
      text: "_______ us in advance, we would have suffered severe losses.",
      options: ["Were you not to warn", "Did you not warn", "Had you not warned", "If you wouldn't warn"],
      correctAnswer: 2,
      explanation: "과거 사실의 가정에 의한 과거완료 도치형 'Had you not warned'가 와야 합니다."
    },
    {
      id: "a30",
      type: "grammar",
      text: "Had the government taken action earlier, the economic crisis _______ this severe now.",
      options: ["will not be", "would not have been", "would not be", "had not been"],
      correctAnswer: 2,
      explanation: "과거의 조치가 현재(now)의 위기를 막았을 것이라는 혼합 가정 구문이므로 'would not be'가 맞습니다."
    },
    {
      id: "a31",
      type: "grammar",
      text: "_______ her chores, she sat down on the sofa to read a book.",
      options: ["Having finished", "Finished", "To have finished", "Finishing"],
      correctAnswer: 0,
      explanation: "그녀가 일과를 마친 주체이고, 책을 읽은 시점(과거)보다 마친 시점이 더 앞선 시점이므로 완료 분사구문 'Having finished'가 알맞습니다."
    },
    {
      id: "a32",
      type: "grammar",
      text: "_______ from the mountaintop, the city below looks like a toy model.",
      options: ["Saw", "To see", "Seeing", "Seen"],
      correctAnswer: 3,
      explanation: "도시가 보여지는 수동의 관계이므로 과거분사 'Seen'이 정답입니다. (Seen from ~)"
    },
    {
      id: "a33",
      type: "grammar",
      text: "_______ what to do in the emergency, he immediately called his father.",
      options: ["Not knowing", "Not to know", "Knowing not", "No knowing"],
      correctAnswer: 0,
      explanation: "분사구문의 부정은 분사 바로 앞에 Not을 붙이므로 'Not knowing'이 적당합니다."
    },
    {
      id: "a34",
      type: "grammar",
      text: "This is the artist _______ paintings were auctioned at a record price.",
      options: ["who", "of which", "which", "whose"],
      correctAnswer: 3,
      explanation: "화가의 그림들이라는 소유격 관계이므로 소유격 관계대명사 'whose'가 맞습니다."
    },
    {
      id: "a35",
      type: "grammar",
      text: "The students, _______ the test was canceled, went home happily.",
      options: ["told", "having told", "telling", "having been told"],
      correctAnswer: 3,
      explanation: "학생들이 테스트가 취소되었다는 이야기를 '전해 들은(수동)' 완료 시점이므로 완료 수동 분사구문 'having been told'가 어울립니다."
    },
    {
      id: "a36",
      type: "grammar",
      text: "_______ by his accent, he must be from the northern part of England.",
      options: ["Judge", "Judging", "Judged", "To judge"],
      correctAnswer: 1,
      explanation: "문맥상 독립분사구문인 '~로 판단하건대(Judging by ~)'가 적절합니다."
    },
    {
      id: "a37",
      type: "grammar",
      text: "He sat on the chair with _______, listening to the classical music.",
      options: ["with his eyes closed", "closed his eyes", "his eyes closing", "with his closed eyes"],
      correctAnswer: 0,
      explanation: "'with + 명사 + 분사'의 부대상황 구문으로, 눈은 감겨지는 피동 관계이므로 'with his eyes closed'가 맞습니다."
    },
    {
      id: "a38",
      type: "grammar",
      text: "_______ with last year's figures, our current revenue has doubled.",
      options: ["Compare", "Compared", "Comparing", "To compare"],
      correctAnswer: 1,
      explanation: "수치가 작년 수치와 '비교되었을 때'라는 뜻의 수동 분사구문 'Compared with ~'가 정답입니다."
    },
    {
      id: "a39",
      type: "grammar",
      text: "_______ in haste, the essay contained several grammatical errors.",
      options: ["Having been written", "Written", "Writing", "To write"],
      correctAnswer: 0,
      explanation: "수필이 성급하게 쓰인 과거 시점이 주절(contained)보다 앞선 완료형 수동이므로 'Having been written'이 가장 문법적입니다."
    },
    {
      id: "a40",
      type: "grammar",
      text: "Who was it _______ leaked the classified information to the media?",
      options: ["what", "which", "that", "whom"],
      correctAnswer: 2,
      explanation: "Who was it ~ that 강조 구문으로, 의문사 Who가 강조된 형태이므로 관계사 'that'이 결합해야 합니다."
    },
    {
      id: "a41",
      type: "grammar",
      text: "_______ the economic slowdown, our company achieved record sales.",
      options: ["Whereas", "Although", "Notwithstanding", "Despite of"],
      correctAnswer: 2,
      explanation: "뒤에 명사구(the economic slowdown)를 취하는 전치사 중 '~에도 불구하고'라는 격식체 단어로 'Notwithstanding'이 알맞습니다."
    },
    {
      id: "a42",
      type: "grammar",
      text: "She accepted the promotion, _______ with some hesitation.",
      options: ["unless", "in spite of", "despite", "albeit"],
      correctAnswer: 3,
      explanation: "비록 ~일지라도라는 양보의 부사절 접속사 'albeit'이 적절합니다 (보통 albeit + 형용사/부사구)."
    },
    {
      id: "a43",
      type: "grammar",
      text: "The soldiers kept quiet _______ they should alert the enemy.",
      options: ["lest", "in case of", "for fear", "unless"],
      correctAnswer: 0,
      explanation: "lest ~ should (~하지 않도록, ~할까 봐 두려워) 구문이므로 'lest'가 와야 합니다."
    },
    {
      id: "a44",
      type: "grammar",
      text: "Humans differ from animals _______ they can speak and write.",
      options: ["in that", "in which", "such that", "so that"],
      correctAnswer: 0,
      explanation: "~라는 점에서라는 이유의 접속사 'in that'이 문맥상 자연스럽습니다."
    },
    {
      id: "a45",
      type: "grammar",
      text: "_______ I would like to help you, I simply do not have the time today.",
      options: ["more as", "as much", "so much", "much as"],
      correctAnswer: 3,
      explanation: "비록 ~이지만이라는 뜻의 양보 접속사구로 'much as'가 어울립니다 (much as I would like to ~)."
    },
    {
      id: "a46",
      type: "grammar",
      text: "_______ his vast wealth, he lived a simple and humble life.",
      options: ["Despite of", "Although", "For all", "In spite"],
      correctAnswer: 2,
      explanation: "~에도 불구하고라는 전치사구로 'For all'이 적합합니다. (For all his wealth: 그의 모든 부에도 불구하고)"
    },
    {
      id: "a47",
      type: "grammar",
      text: "You can borrow my car _______ you return it clean and with a full tank.",
      options: ["unless", "in case of", "as if", "provided that"],
      correctAnswer: 3,
      explanation: "만약 ~한다면이라는 조건의 접속사구 'provided that' (또는 providing that)이 알맞습니다."
    },
    {
      id: "a48",
      type: "grammar",
      text: "She spoke _______ she were an expert in quantum physics.",
      options: ["even though", "as if to", "as though", "like"],
      correctAnswer: 2,
      explanation: "마치 ~인 것처럼(가정법 결합)을 이끄는 접속사 'as though'가 맞습니다."
    },
    {
      id: "a49",
      type: "grammar",
      text: "I thought he was lazy. _______, he works late every night.",
      options: ["In contrast", "On the other hand", "Conversely", "On the contrary"],
      correctAnswer: 3,
      explanation: "기존 생각과 정반대 사실을 대조해 강조할 때 쓰는 부사구 'On the contrary(그와는 반대로)'가 가장 적합합니다."
    },
    {
      id: "a50",
      type: "grammar",
      text: "He secured the position _______ his exceptional qualifications.",
      options: ["With regard to", "In terms of", "By virtue of", "Owing to"],
      correctAnswer: 2,
      explanation: "~의 덕분에, ~에 힘입어라는 수단의 격식 전치사구 'By virtue of'가 어울립니다."
    },
    {
      id: "a51",
      type: "grammar",
      text: "_______ decision you make, I will support you wholeheartedly.",
      options: ["Whichever", "However", "Wherever", "Whatever"],
      correctAnswer: 3,
      explanation: "네가 무슨 결정을 내리든 간에(양보 복합관계형용사)라는 의미이므로 'Whatever'가 맞습니다."
    },
    {
      id: "a52",
      type: "grammar",
      text: "_______ I listen to this song, it reminds me of my childhood.",
      options: ["However", "Whatever", "Whenever", "Wherever"],
      correctAnswer: 2,
      explanation: "내가 이 노래를 들을 때마다라는 뜻의 복합관계부사 'Whenever'가 자연스럽습니다."
    },
    {
      id: "a53",
      type: "grammar",
      text: "_______ hard you try, you cannot satisfy everyone.",
      options: ["Wherever", "However", "No matter what", "Whatever"],
      correctAnswer: 1,
      explanation: "'아무리 ~하더라도'의 의미인 'However + 형용사/부사' 구문이므로 'However'가 적당합니다."
    },
    {
      id: "a54",
      type: "grammar",
      text: "_______ you invite to the party will be welcomed.",
      options: ["Whosever", "Whomever", "Whoever", "Whatever"],
      correctAnswer: 1,
      explanation: "네가 누구를 초대하든(invite의 목적어) 간에 목적격 복합관계대명사 'Whomever'가 공식 문법에 알맞습니다."
    },
    {
      id: "a55",
      type: "grammar",
      text: "The rumor _______ she is going to resign is not true.",
      options: ["whether", "what", "that", "which"],
      correctAnswer: 2,
      explanation: "동격의 명사절을 이끄는 접속사 'that'이 적절합니다 (rumor와 she is going to resign이 동격)."
    },
    {
      id: "a56",
      type: "grammar",
      text: "He asked me _______ I was planning to do next.",
      options: ["whether", "what", "which", "that"],
      correctAnswer: 1,
      explanation: "내가 무엇을 할 계획인지 묻는 의문대명사 'what'이 이끄는 명사절이 와야 합니다."
    },
    {
      id: "a57",
      type: "grammar",
      text: "_______ we succeed or fail depends entirely on our teamwork.",
      options: ["whether", "if", "which", "that"],
      correctAnswer: 0,
      explanation: "문장의 맨 앞에서 '~인지 아닌지' 주어절을 이끌 때는 if를 쓸 수 없고 'whether'만 가능합니다."
    },
    {
      id: "a58",
      type: "grammar",
      text: "_______ wins the tournament will receive a cash prize.",
      options: ["Whosever", "Whomever", "Whoever", "Whatever"],
      correctAnswer: 2,
      explanation: "주어 역할을 하면서 '~하는 사람은 누구든지'를 뜻하므로 주격 복합관계대명사 'Whoever'가 맞습니다."
    },
    {
      id: "a59",
      type: "grammar",
      text: "_______ car is parked in my spot needs to move it immediately.",
      options: ["Whomever", "Whosever", "Whoever", "Whatever"],
      correctAnswer: 1,
      explanation: "누구의 차이든 간에(소유격 복합관계형용사)를 나타내는 'Whosever'가 맞습니다."
    },
    {
      id: "a60",
      type: "grammar",
      text: "It was only yesterday _______ I learned about the meeting cancelation.",
      options: ["that", "what", "which", "why"],
      correctAnswer: 0,
      explanation: "It was ~ that 강조구문으로 강조된 시간 부사어구(only yesterday)를 이끄는 'that'이 맞습니다."
    },
    {
      id: "a61",
      type: "grammar",
      text: "_______ fluent your English speaking will become.",
      options: ["More you practice, more", "The more you practice, the more", "The more you practice, the better", "Practice more, and more"],
      correctAnswer: 1,
      explanation: "'~하면 할수록 더 ~하다'의 'The + 비교급, the + 비교급' 구조에 가장 정확한 것은 'The more you practice, the more'입니다."
    },
    {
      id: "a62",
      type: "grammar",
      text: "It was _______ she finished the presentation that she felt relieved.",
      options: ["only since", "until not", "not until", "not since"],
      correctAnswer: 2,
      explanation: "'It was not until A that B' 구문으로 'A하고 나서야 비로소 B하다'를 의미하는 'not until'이 들어갈 자리입니다."
    },
    {
      id: "a63",
      type: "grammar",
      text: "The team members wanted to cancel the project, _______ their supervisor.",
      options: ["as did", "as did they", "so did", "as they did"],
      correctAnswer: 0,
      explanation: "'~도 마찬가지였다'는 동조의 뜻으로 as 뒤에 주어-동사가 도치된 'as did their supervisor' 구조가 적절합니다."
    },
    {
      id: "a64",
      type: "grammar",
      text: "It is his unique painting style _______ makes his art so valuable.",
      options: ["which", "that", "what", "who"],
      correctAnswer: 1,
      explanation: "It is ~ that 강조구문으로 주어(his unique painting style)를 강조하는 'that'이 들어와야 합니다."
    },
    {
      id: "a65",
      type: "grammar",
      text: "_______ water, no living creature could survive on Earth.",
      options: ["Should it not be", "Had it not been for", "Were it not for", "If it wasn't"],
      correctAnswer: 2,
      explanation: "현재 상황에 대한 불가능 가정이므로 'Were it not for ~'가 맞습니다. (Had it not been for는 과거 사실 가정)"
    },
    {
      id: "a66",
      type: "grammar",
      text: "_______ you were coming, I would have prepared dinner.",
      options: ["If I knew", "If I would have known", "Did I know", "Had I known"],
      correctAnswer: 3,
      explanation: "과거 사실의 가정에 의한 과거완료 도치인 'Had I known'이 맞습니다."
    },
    {
      id: "a67",
      type: "grammar",
      text: "I love listening to jazz music, and _______ my parents.",
      options: ["so does", "so have", "so am", "so do"],
      correctAnswer: 3,
      explanation: "나도 그렇고 내 부모님(복수)도 그렇다의 동조 표현으로 일반동사 수식을 위해 'so do my parents'가 맞습니다."
    },
    {
      id: "a68",
      type: "grammar",
      text: "It is _______ we lose something that we realize its true value.",
      options: ["not until", "only when", "only since", "since only"],
      correctAnswer: 1,
      explanation: "'It is only when ~ that ...' (~할 때서야 비로소 ...하다) 강조구문에 적합한 'only when'이 맞습니다."
    },
    {
      id: "a69",
      type: "grammar",
      text: "They did not support the new policy, _______ they explain their reasons.",
      options: ["neither did", "nor they did", "nor had", "nor did"],
      correctAnswer: 3,
      explanation: "앞 문장이 부정문이고 뒤에서 '~도 하지 않았다'고 조동사를 이끌며 도치되는 'nor did they' 구조가 맞습니다."
    },
    {
      id: "a70",
      type: "grammar",
      text: "_______ is a comprehensive reform of the education system.",
      options: ["That they need", "Why they need", "Which they need", "What they need"],
      correctAnswer: 3,
      explanation: "그들이 필요로 하는 것(명사절 주어)을 만드는 선행사 포함 관계사 'What they need'가 알맞은 Cleft sentence 구조입니다."
    },
    {
      id: "a71",
      type: "vocabulary",
      text: "His analysis of the marketing crisis was perfect; he really _______.",
      options: ["spill the beans", "hit the nail on the head", "burn the midnight oil", "bite the bullet"],
      correctAnswer: 1,
      explanation: "핵심이나 정곡을 정확히 찌르다라는 뜻의 관용어는 'hit the nail on the head'입니다. (bite the bullet: 고통을 참다, spill the beans: 비밀을 누설하다)"
    },
    {
      id: "a72",
      type: "vocabulary",
      text: "I have to _______ and tell my manager about the financial loss.",
      options: ["bite the bullet", "hit the sack", "beat around the bush", "break a leg"],
      correctAnswer: 0,
      explanation: "어려운 상황에서 용기를 내어 '고통을 감내하다, 울며 겨자 먹기로 하다'라는 뜻의 관용어는 'bite the bullet'입니다."
    },
    {
      id: "a73",
      type: "vocabulary",
      text: "The students _______ to prepare for their final exam.",
      options: ["let the cat out of the bag", "went the extra mile", "hit the ceiling", "burned the midnight oil"],
      correctAnswer: 3,
      explanation: "시험공부나 밤샘 작업을 위해 '밤늦게까지 공부/일하다'라는 뜻의 관용어는 'burn the midnight oil'입니다."
    },
    {
      id: "a74",
      type: "vocabulary",
      text: "Please stop _______ and get straight to the main point.",
      options: ["keep an eye on", "hit the road", "turn over a new leaf", "beat around the bush"],
      correctAnswer: 3,
      explanation: "본론을 말하지 않고 '빙빙 돌려서 말하다'라는 뜻의 관용어는 'beat around the bush'입니다."
    },
    {
      id: "a75",
      type: "vocabulary",
      text: "We were planning a surprise party, but someone _______.",
      options: ["pulled his leg", "broke the ice", "spilled the beans", "blew his top"],
      correctAnswer: 2,
      explanation: "비밀을 본의 아니게 '누설하다, 털어놓다'라는 뜻의 관용어는 'spill the beans'의 과거형인 'spilled the beans'입니다."
    },
    {
      id: "a76",
      type: "vocabulary",
      text: "He told a funny joke to _______ at the beginning of the meeting.",
      options: ["cut corners", "hit the deck", "let sleeping dogs lie", "broke the ice"],
      correctAnswer: 3,
      explanation: "처음 만난 어색한 분위기를 '완화하다, 서먹한 분위기를 깨다'라는 뜻의 관용어는 'break the ice'입니다."
    },
    {
      id: "a77",
      type: "vocabulary",
      text: "The hotel staff _______ to make our stay comfortable.",
      options: ["went the extra mile", "burned bridges", "spilled the tea", "sat on the fence"],
      correctAnswer: 0,
      explanation: "요구된 이상의 성의나 '특별한 노력을 기울이다'라는 뜻의 관용어는 'go the extra mile'의 과거형입니다."
    },
    {
      id: "a78",
      type: "vocabulary",
      text: "Instead of taking a side, the politician _______ during the debate.",
      options: ["played second fiddle", "bite his tongue", "jumped the gun", "sat on the fence"],
      correctAnswer: 3,
      explanation: "어느 한쪽에 서지 않고 중립을 지키거나 '기회주의적인 태도를 취하다'라는 뜻의 관용어는 'sit on the fence'입니다."
    },
    {
      id: "a79",
      type: "vocabulary",
      text: "It was a secret, but my little brother _______.",
      options: ["faced the music", "spelled disaster", "let the cat out of the bag", "hit the fan"],
      correctAnswer: 2,
      explanation: "비밀을 무심코 '누설하다, 밝히다'라는 뜻의 관용어는 'let the cat out of the bag'입니다."
    },
    {
      id: "a80",
      type: "vocabulary",
      text: "After hiding the truth, he finally had to _______ and admit his error.",
      options: ["keep under wraps", "pay through the nose", "face the music", "read between the lines"],
      correctAnswer: 2,
      explanation: "자신의 잘못에 대해 비난이나 '결과를 받아들이다, 당당히 책임을 지다'라는 뜻의 관용어는 'face the music'입니다."
    },
    {
      id: "a81",
      type: "vocabulary",
      text: "The diplomat's _______ remarks defused what could have been a highly volatile situation.",
      options: ["bellicose", "provocative", "conciliatory", "ostentatious"],
      correctAnswer: 2,
      explanation: "일촉즉발의 상황을 완화시켰으므로 '회유적인, 달래는' 뜻의 conciliatory가 어울립니다. (provocative: 도발적인, bellicose: 호전적인, ostentatious: 과시하는)"
    },
    {
      id: "a82",
      type: "vocabulary",
      text: "The scholar's arguments were so _______ that none of his peers could find any flaws in them.",
      options: ["specious", "cogent", "tenuous", "fallacious"],
      correctAnswer: 1,
      explanation: "단점을 찾기 힘들 정도로 '설득력 있고 타당한' 주장은 'cogent'입니다."
    },
    {
      id: "a83",
      type: "vocabulary",
      text: "Her design style is often described as _______ because it masterfully incorporates elements from various historical periods and cultures.",
      options: ["eclectic", "mundane", "homogeneous", "esoteric"],
      correctAnswer: 0,
      explanation: "다방면의 시대와 양식을 절충해서 수용하는 스타일은 'eclectic(절충적인)'입니다."
    },
    {
      id: "a84",
      type: "vocabulary",
      text: "The manager was surrounded by _______ assistants who agreed with every decision.",
      options: ["assertive", "haughty", "rebellious", "obsequious"],
      correctAnswer: 3,
      explanation: "관리자의 비위를 맞추고 무조건 찬성하는 '아첨하는, 비굴한' 조력자들은 'obsequious'라고 합니다. (haughty: 오만한)"
    },
    {
      id: "a85",
      type: "vocabulary",
      text: "The beauty of cherry blossoms is _______, lasting for only a few days.",
      options: ["constant", "permanent", "eternal", "ephemeral"],
      correctAnswer: 3,
      explanation: "며칠만 유지되고 사라지는 '수명이 짧은, 덧없는' 뜻의 형용사는 'ephemeral'입니다."
    },
    {
      id: "a86",
      type: "vocabulary",
      text: "Her mood is highly _______; she can be extremely happy one moment and angry the next.",
      options: ["capricious", "reliable", "predictable", "steadfast"],
      correctAnswer: 0,
      explanation: "변덕스럽고 쉽게 변하는 성격을 뜻하는 형용사는 'capricious'입니다."
    },
    {
      id: "a87",
      type: "vocabulary",
      text: "The scientist kept a _______ record of the experiments, leaving no detail unchecked.",
      options: ["meticulous", "careless", "haphazard", "negligent"],
      correctAnswer: 0,
      explanation: "결점 하나 없이 대단히 꼼꼼하고 '세심한' 관리는 'meticulous'입니다."
    },
    {
      id: "a88",
      type: "vocabulary",
      text: "The _______ billionaire donated half of his fortune to clean water projects.",
      options: ["malevolent", "greedy", "spiteful", "benevolent"],
      correctAnswer: 3,
      explanation: "자비롭고 선의적인 기부자는 'benevolent'라고 칭합니다. (malevolent: 악의적인)"
    },
    {
      id: "a89",
      type: "vocabulary",
      text: "Instead of following strict rules, the leader took a _______ approach to resolving the crisis.",
      options: ["idealistic", "dogmatic", "pragmatic", "visionary"],
      correctAnswer: 2,
      explanation: "규율에 얽매이지 않고 실제 결과를 얻는 '실용적인' 접근은 'pragmatic'입니다."
    },
    {
      id: "a90",
      type: "vocabulary",
      text: "In the digital age, smartphones have become _______, found in almost every corner of the globe.",
      options: ["unique", "sparse", "rare", "ubiquitous"],
      correctAnswer: 3,
      explanation: "어디에나 존재하고 흔히 볼 수 있는 상태는 'ubiquitous(도처에 존재하는)'입니다."
    },
    {
      id: "a91",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Cognitive dissonance, a psychological phenomenon coined by Leon Festinger, occurs when an individual holds contradictory beliefs. To alleviate this discomfort, individuals often rationalize their behavior or ignore conflicting evidence, reinforcing confirmation bias.\"\n\nQuestion: How do individuals typically resolve the discomfort of cognitive dissonance?",
      options: ["By abandoning all of their previous belief systems", "By attempting to hold even more contradictory viewpoints", "By rationalizing their behavior or discarding conflicting facts", "By seeking professional therapy immediately"],
      correctAnswer: 2,
      explanation: "본문에서 설명된 대로 인지부조화의 긴장을 풀기 위해 사람들은 자신의 행동을 합리화(rationalize)하거나 상충하는 증거를 무시(ignore)하려 합니다."
    },
    {
      id: "a92",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Epigenetics examines how environmental influences and personal behaviors can cause changes that affect gene expression. Crucially, unlike genetic mutations, these epigenetic alterations are reversible and do not modify the core DNA sequence.\"\n\nQuestion: Which of the following statements is true about epigenetic alterations?",
      options: ["They do not alter the underlying DNA sequence.", "They are irreversible and last for generations.", "They are structurally identical to genetic mutations.", "They permanently alter the organism's genetic code."],
      correctAnswer: 0,
      explanation: "에피제네틱 변화의 특징은 실제 DNA 염기서열(core DNA sequence)은 건드리지 않으면서(do not modify) 유전자 표현형에만 영향을 준다는 점입니다."
    },
    {
      id: "a93",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The rise of quantum computing represents a paradigm shift in technology. While classical computers process information in bits (0s or 1s), quantum computers use qubits, which can exist in superpositions. This allows them to perform complex calculations at speeds unimaginable with classical systems.\"\n\nQuestion: What is the main physical difference between classical and quantum computers according to the text?",
      options: ["Quantum computers are smaller and consume much less energy.", "Quantum computers rely on advanced AI software instead of hardware.", "Quantum computers use qubits that can exist in a superposition of states.", "Quantum computers process data linearly like traditional microchips."],
      correctAnswer: 2,
      explanation: "양자 컴퓨터는 0과 1의 중첩(superposition) 상태로 존재할 수 있는 큐비트(qubits)를 사용해 작동한다는 점이 클래식 비트 기반 컴퓨터와 대조됩니다."
    },
    {
      id: "a94",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The concept of tragedy in literature has evolved significantly. While classical Greek tragedy centered on the downfall of noble characters due to fate or hubris, modern tragedy often explores the struggles of ordinary individuals crushed by societal pressures or internal alienation.\"\n\nQuestion: Which of the following best states the contrast between classical and modern tragedy?",
      options: ["Classical tragedy involved noble characters; modern tragedy focuses on ordinary people.", "Classical tragedy was written in prose; modern tragedy is in verse.", "Classical tragedy had happy endings; modern tragedy is pessimistic.", "Classical tragedy focused on fate; modern tragedy is primarily comic."],
      correctAnswer: 0,
      explanation: "고전 비극은 고귀한 귀족층(noble characters)의 몰락을, 현대 비극은 평범한 서민층(ordinary individuals)의 소외를 대조적으로 보여줍니다."
    },
    {
      id: "a95",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The phenomenon of globalization has sparked intense economic debates. Supporters argue that it fosters global economic growth and reduces poverty in developing nations. Critics, however, point out that it often exacerbates income inequality and leads to the exploitation of labor in unregulated markets.\"\n\nQuestion: What is a major criticism of globalization mentioned in the text?",
      options: ["It completely stops trade between wealthy countries.", "It slows down technological development in cities.", "It forces everyone to speak the same language.", "It can widen the wealth gap and lead to labor exploitation."],
      correctAnswer: 3,
      explanation: "세계화의 비판론자(critics)들은 소득 불평등을 가속하고(exacerbates income inequality) 규제 없는 시장에서 노동 착취를 유발한다고 주장합니다."
    },
    {
      id: "a96",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. This phenomenon allows neurons in the brain to compensate for injury and adjust their activities in response to new situations or changes in their environment.\"\n\nQuestion: According to the text, what does neuroplasticity enable the brain to do?",
      options: ["Recall every memory from the moment of birth in detail.", "Generate unlimited energy for active physical exercise.", "Cure physical body injuries instantly without medicine.", "Compensate for injuries by forming new neural pathways."],
      correctAnswer: 3,
      explanation: "뇌가 새로운 신경 결합(neural pathways/connections)을 생성함으로써 부상을 보완(compensate for injury)하고 새로운 자극에 적응하게 만듭니다."
    },
    {
      id: "a97",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The study of dark matter remains one of the most intriguing frontiers in astrophysics. Although it makes up about 27% of the universe, it does not emit, absorb, or reflect light, making it completely invisible. Scientists infer its existence solely through its gravitational effects on visible matter.\"\n\nQuestion: How do scientists confirm the existence of dark matter?",
      options: ["By collecting samples of it from nearby planetary orbits.", "By observing its gravitational effects on visible cosmic matter.", "By photographing it using highly advanced optical telescopes.", "By measuring the heat it emits during solar eclipses."],
      correctAnswer: 1,
      explanation: "암흑 물질은 빛을 내거나 반사하지 않아 보이지 않으므로, 눈에 보이는 우주 물질에 미치는 중력적 효과(gravitational effects)를 통해서만 간접 유추합니다."
    },
    {
      id: "a98",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"Behavioral economics challenges the traditional economic assumption that humans are rational actors. By integrating psychology into economic models, it demonstrates that cognitive biases, emotional states, and social pressures frequently lead to irrational financial decisions.\"\n\nQuestion: What core assumption of traditional economics does behavioral economics challenge?",
      options: ["The theory that money supply has no effect on tax rates.", "The view that government regulation always improves market stability.", "The idea that inflation decreases during major national holidays.", "The belief that human economic decisions are always rational."],
      correctAnswer: 3,
      explanation: "전통 경제학이 가정해온 '인간은 완벽히 합리적인 행위자(rational actors)'라는 대전제를 심리학적 인지 편향을 보여줌으로써 뒤흔들고 있습니다."
    },
    {
      id: "a99",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The transition to a circular economy is gaining traction as a solution to resource depletion. Unlike the linear model of 'take-make-waste', a circular economy designs out waste, keeping materials and products in use for as long as possible through recycling, reuse, and remanufacturing.\"\n\nQuestion: How does a circular economy differ from a linear economy in the text?",
      options: ["It increases production speed by using cheaper materials.", "It operates without any corporate or government regulation.", "It focuses on eliminating waste and reusing existing resources.", "It relies heavily on importing materials from foreign markets."],
      correctAnswer: 2,
      explanation: "순환 경제(circular economy)는 기존의 선형 모델과 달리 쓰레기를 배제하고 자원을 재활용 및 재사용(recycling, reuse)하여 보존하는 경제 구조입니다."
    },
    {
      id: "a100",
      type: "reading",
      text: "Read the passage and answer the question:\n\n\"The philosophical concept of existentialism emphasizes individual freedom and choice. It posits that humans define their own meaning in life, rather than relying on pre-established values or divine plans, giving rise to both liberation and existential anxiety.\"\n\nQuestion: What is the primary emphasis of existentialism according to the text?",
      options: ["The belief in pre-determined destiny and divine plans.", "The strict obedience to traditional societal norms and rules.", "The search for scientific truth through laboratory tests.", "Individual freedom and self-determination of life's meaning."],
      correctAnswer: 3,
      explanation: "실존주의는 개개인의 자유와 인생의 가치를 스스로 규정하고 결정하는 주체성(individual freedom and choice)을 핵심으로 강조합니다."
    },
  ],
};
