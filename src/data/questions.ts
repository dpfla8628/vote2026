import { Question } from '@/types'

// 공약 귀속 검증 기준:
// 민주당: 2026 지방선거 10대 공약 (5극·3특, AI·바이오·방산, RE100, 검찰개혁, 청년밀착지원)
// 국민의힘: 주거안정(반값전세·월세세액공제), 규제철폐, SMR·원전, GTX, 주니어ISA
// 조국혁신당: 99년 공공임대(1호), 기후펀드·기후수당·기후보험, AI넥서스
// 개혁신당: 규제완화·신산업 실험(1호), 비례대표 확대
// 진보당: 공공버스 공영화(1호), 지역공공은행, 통합돌봄 공공직영
// 기본소득당: 지방형 기본소득, 주민배당형 에너지펀드
// 정의당: 기본서비스 보장(주거·먹거리·교통), 공공의료·공공주택

export const questions: Question[] = [
  // ─────────────────────────────────────────
  // Q1. 지역발전 — 같은 문제(지방 소멸·불균형)의 4가지 다른 접근
  // ─────────────────────────────────────────
  {
    id: 'q1',
    category: 'regional',
    text: '지방이 계속 비어가는 문제, 어떻게 풀어야 할까요?',
    description: '수도권 집중 vs 균형발전 vs 자율경쟁 vs 직접배당 — 같은 문제의 4가지 다른 해법이에요',
    options: [
      {
        id: 'q1_a',
        text: '🏙️ "서울·수도권이 잘돼야 지방도 먹고 산다"',
        subtitle: '수도권이 한국 경제의 엔진이야. 서울이 강해야 세금도 걷히고 지방 지원도 가능하다는 입장이에요.',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q1_b',
        text: '🗺️ "서울만 잘사는 나라는 이제 끝!"',
        subtitle: '전국 5개 광역권에 기업·인프라·예산 골고루 나눠서 지방에도 좋은 일자리와 삶터를 만들자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q1_c',
        text: '🛠️ "지역이 직접 살길 찾게 규제부터 풀어줘!"',
        subtitle: '나라가 다 정해주지 말고 지역마다 규제 풀어서 각자 강점 산업으로 스스로 경쟁하게 하자는 거야.',
        scores: [
          { partyId: 'reform', points: 3 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q1_d',
        text: '💰 "내 동네 자원 수익, 주민에게 직접 배당해라!"',
        subtitle: '지역 공공사업·에너지 수익을 주민에게 현금으로 나눠줘서 지역 소멸도 막고 소득도 늘리자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q2. 주거 — 같은 문제(집값·전세난)의 4가지 다른 해법
  // ─────────────────────────────────────────
  {
    id: 'q2',
    category: 'housing',
    text: '집값·전세 문제, 어떻게 해결해야 할까요?',
    description: '시세 절반 전세 vs 공공임대 확충 vs 99년 장기임대 vs 민간 공급 확대 — 4가지 다른 해법이에요',
    options: [
      {
        id: 'q2_a',
        text: '🏘️ "시세 절반 전세로 살 수 있게 해줄게!"',
        subtitle: '나라가 보증 서줘서 주변 시세 절반 가격 전세를 공급하고, 월세 세액공제도 연봉 9천만원까지 확대하겠다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q2_b',
        text: '🏢 "공공임대 더 짓고, 재건축은 합리적으로!"',
        subtitle: '정부가 임대 주택을 더 늘려 싸게 공급하는 게 답이야. 재건축 초과이익 환수는 유지하면서 합리적으로 손본다는 입장이에요.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'justice', points: 2 },
        ],
      },
      {
        id: 'q2_c',
        text: '🔑 "평생 쫓겨날 걱정 없이 99년 살게 해줄게!"',
        subtitle: '공공임대를 분양 전환 없이 99년간 거주할 수 있게 해서 사실상 내 집처럼 안정적으로 살게 하겠다는 거야.',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q2_d',
        text: '🏗️ "집 공급 막는 규제부터 치워야 집값 내린다!"',
        subtitle: '재건축·건설 규제를 완화해서 민간이 집을 빠르게 많이 지으면 자연스럽게 공급이 늘어난다는 입장이야.',
        scores: [
          { partyId: 'reform', points: 2 },
          { partyId: 'ppp', points: 1 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q3. 산업·일자리 — 같은 문제(어떻게 일자리 만들 것인가)의 4가지 철학
  // ─────────────────────────────────────────
  {
    id: 'q3',
    category: 'industry',
    text: '미래 일자리, 어떤 방식으로 만들어야 할까요?',
    description: '4개 선택지는 같은 목표(좋은 일자리)를 향한 완전히 다른 접근 방식이에요',
    options: [
      {
        id: 'q3_a',
        text: '🤖 "공장 시대 끝났다! AI·첨단기술에 올인!"',
        subtitle: '챗GPT 같은 AI, 바이오, 방산 기술에 나라가 제대로 투자해야 청년 일자리가 생겨. 미래 먹거리를 지금 선점하자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q3_b',
        text: '⚡ "첨단산업? 일단 전기부터 안 끊겨야지!"',
        subtitle: 'AI 공장도 반도체 공장도 전기 없으면 못 돌아가. 소형 원전(SMR)으로 전기 안정 공급하고 기업 규제 확 풀어서 공장 유치하자는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q3_c',
        text: '🚀 "나라가 고르지 말고, 스타트업이 알아서 도전하게!"',
        subtitle: '어떤 산업을 키울지 나라가 정하는 거 자체가 문제야. 규제 샌드박스 확대해서 민간이 자유롭게 실험하게 두면 된다는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q3_d',
        text: '👷 "번듯한 일자리가 없는 게 문제야, 공공이 먼저 만들어!"',
        subtitle: '좋은 일자리는 저절로 안 생겨. 공공 일자리 늘리고 배달·플랫폼 노동자 권리부터 제대로 챙겨주는 게 먼저라는 거야.',
        scores: [
          { partyId: 'progressive', points: 2 },
          { partyId: 'justice', points: 2 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q4. 청년 — 같은 문제(청년 지원)의 4가지 다른 접근
  // ─────────────────────────────────────────
  {
    id: 'q4',
    category: 'youth',
    text: '청년 지원, 어떤 방식이 가장 효과적일까요?',
    description: '자립 지원 vs 현금 지급 vs 주거 보장 vs 자산 형성 — 4가지 다른 접근이에요',
    options: [
      {
        id: 'q4_a',
        text: '💼 "취업·창업 기회 만들어줄 테니, 직접 일어서라!"',
        subtitle: '청년 일자리 프로그램과 창업 지원 강화해서 스스로 돈 벌 수 있는 발판을 만들어주자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q4_b',
        text: '💸 "일단 매달 현금부터 줄게, 네 꿈 찾아가!"',
        subtitle: '만 18~29세 청년에게 나라가 매달 기본소득 줘서 취업·창업·공부 중 뭐든 선택할 여유를 주자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
      {
        id: 'q4_c',
        text: '🏠 "집 걱정 없어야 꿈도 꿀 수 있다!"',
        subtitle: '공공 청년주택 늘리고 보육비 부담 줄여서 돈 없어도 서울에서 살며 도전할 수 있게 해주자는 거야.',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'progressive', points: 1 },
        ],
      },
      {
        id: 'q4_d',
        text: '💳 "내 집 마련·통장 불리기 나라가 밀어줄게!"',
        subtitle: '신혼부부 저금리 대출, 주니어 ISA(자산관리계좌) 도입으로 청년이 빠르게 자산 쌓을 수 있게 지원하겠다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q5. 에너지·환경 — 재생에너지 vs 원전 vs 기후수당 vs 주민배당
  // ─────────────────────────────────────────
  {
    id: 'q5',
    category: 'environment',
    text: '에너지와 기후 문제, 어떻게 해야 할까요?',
    description: '4개 선택지는 에너지 전환이라는 같은 과제에 대한 완전히 다른 입장이에요',
    options: [
      {
        id: 'q5_a',
        text: '☀️ "석탄·석유 시대 끝! 햇빛·바람으로 가자!"',
        subtitle: '태양광·해상풍력 등 재생에너지를 최우선으로 키워서 기후 위기도 막고 에너지 독립도 이루자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q5_b',
        text: '⚛️ "재생에너지만으론 부족해! 원자력이 현실적 답이야!"',
        subtitle: '소형 원전(SMR) 포함해 원자력 늘리면 전기료도 싸지고 AI·반도체 공장도 전기 걱정 없이 돌아간다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q5_c',
        text: '🌡️ "에너지 전환 비용, 시민이 수당으로 돌려받아야!"',
        subtitle: '기후 위기 국가 펀드 만들고 에너지 전환 비용을 기후수당으로 시민에게 돌려주자는 거야.',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q5_d',
        text: '🔋 "동네 발전소 수익, 주민이 직접 나눠 갖자!"',
        subtitle: '주민들이 함께 에너지 협동조합 운영해서 전기 팔고 수익을 배당받는 방식으로 에너지 전환하자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q6. 복지·돌봄 — 공공직영 vs 기본서비스 vs 민관협력 vs 맞춤형
  // ─────────────────────────────────────────
  {
    id: 'q6',
    category: 'welfare',
    text: '어르신·아이·장애인 돌봄, 어떻게 해야 할까요?',
    description: '국가 직영 vs 법적 보장 vs 민관협력 선택제 vs 지역별 맞춤 — 4가지 다른 방식이에요',
    options: [
      {
        id: 'q6_a',
        text: '🛡️ "민간 업체 말고 국가가 직접 책임져라!"',
        subtitle: '돌봄을 민간에 맡기면 돈 없는 사람은 제대로 못 받아. 지자체가 직접 운영해야 서비스가 안정된다는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q6_b',
        text: '🏥 "병원·교통·교육, 소득 상관없이 모두에게 기본으로!"',
        subtitle: '돈이 없어도 병원 가고 버스 타고 교육 받을 수 있도록 기본 서비스를 법으로 보장하자는 거야.',
        scores: [{ partyId: 'justice', points: 3 }],
      },
      {
        id: 'q6_c',
        text: '🧰 "다양한 서비스 만들고 내가 골라서 쓰게!"',
        subtitle: '나라와 민간이 협력해서 여러 돌봄 옵션을 만들고, 본인 상황에 맞는 서비스를 선택해서 이용하게 하자는 거야.',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q6_d',
        text: '🏘️ "저출생·고령화 위기, 지역별 맞춤 돌봄으로 정면 돌파!"',
        subtitle: '인구 소멸 지역마다 상황에 맞는 돌봄 정책 만들고 예산 대폭 늘려서 실질적으로 해결하자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q7. 정치·사법 개혁 — 같은 문제(민주주의 강화)의 4가지 다른 처방
  // ─────────────────────────────────────────
  {
    id: 'q7',
    category: 'judicial',
    text: '정치 시스템, 가장 먼저 뭘 바꿔야 할까요?',
    description: '검찰 권한 축소 vs 선거제도 개혁 vs 사법부 독립 vs 약자 보호 — 각자 다른 처방이에요',
    options: [
      {
        id: 'q7_a',
        text: '🔍 "검찰이 너무 세다, 수사·기소 분리해야 해!"',
        subtitle: '검찰이 수사도 기소도 다 하는 구조가 문제야. 공수처 강화하고 권력기관이 서로 견제하게 만들자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 3 },
          { partyId: 'chokuk', points: 2 },
        ],
      },
      {
        id: 'q7_b',
        text: '🗳️ "내 한 표가 더 제대로 반영되게 선거제 바꿔!"',
        subtitle: '비례대표를 늘리는 선거제 개혁으로 소수 정당도 의석 얻어서 다양한 목소리가 국회에 들어가게 하자는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q7_c',
        text: '⚖️ "정치 개입 없이 법대로, 사법 독립이 먼저야!"',
        subtitle: '검찰과 법원이 정치에 휘둘리지 않고 독립적으로 움직이는 게 진짜 법치주의라는 입장이야.',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q7_d',
        text: '🫶 "약자 권리 보호가 제일 중요한 개혁이야!"',
        subtitle: '노동자·장애인·소수자 등 힘없는 사람들이 법적 도움 쉽게 받을 수 있도록 제도부터 강화하자는 거야.',
        scores: [
          { partyId: 'justice', points: 3 },
          { partyId: 'progressive', points: 2 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q8. 교통 — GTX vs 지방철도 vs 공영화 vs 자율주행
  // ─────────────────────────────────────────
  {
    id: 'q8',
    category: 'transport',
    text: '교통에 돈을 쓴다면, 어디에 써야 할까요?',
    description: '수도권 급행 vs 지방 균형 vs 무상 대중교통 vs 모빌리티 혁신 — 어디에 투자할지 선택하는 거예요',
    options: [
      {
        id: 'q8_a',
        text: '🚄 "수도권 출퇴근 30분! GTX 더 빠르게 더 많이!"',
        subtitle: '광역급행철도(GTX) 노선 빠르게 늘려서 먼 거리도 빠르게 출퇴근할 수 있게 하겠다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q8_b',
        text: '🚆 "지방도 고속철로 한 시간이면 가야지!"',
        subtitle: '지방 주요 도시까지 고속철도 연결해서 지방에 살아도 서울 못지않게 빠르게 이동하게 하자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q8_c',
        text: '🚌 "버스 공짜로! 대중교통은 돈벌이가 아니야!"',
        subtitle: '시내버스를 지자체가 직접 운영하고 단계적으로 무상화해서 교통비 부담을 없애자는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q8_d',
        text: '🛴 "자율주행·킥보드 막는 규제 싹 다 치워!"',
        subtitle: '자율주행차, 전동킥보드 등 새로운 이동 수단 막는 규제 없애고 민간이 교통 혁신 이끌게 하자는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q9. 경제 철학 — 시장 자율 vs 전략 육성 vs 기본 보장 vs 공공 직영
  // ─────────────────────────────────────────
  {
    id: 'q9',
    category: 'industry',
    text: '경제 문제에서 정부 역할, 어느 정도가 맞을까요?',
    description: '이 질문은 앞선 공약 선택의 근본적 철학 차이를 보는 거예요',
    options: [
      {
        id: 'q9_a',
        text: '📈 "정부는 빠지고 시장에 맡겨라!"',
        subtitle: '규제 많으면 기업이 느려지고 경제가 안 돌아가. 시장이 알아서 하게 두는 게 가장 효율적이라는 거야.',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 2 },
        ],
      },
      {
        id: 'q9_b',
        text: '🧭 "핵심 산업은 나라가 방향 잡아줘야 한다!"',
        subtitle: 'AI·반도체·방산 같은 전략 산업은 나라가 먼저 투자하고 방향 잡아줘야 민간도 따라온다는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q9_c',
        text: '🤝 "기본은 나라가 보장하고, 그 위에서 시장이!"',
        subtitle: '병원·교육·주거 같은 기본은 나라가 보장하고 나머지는 시장에 맡기는 균형이 맞다는 거야.',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q9_d',
        text: '🏛️ "전기·버스·병원은 절대 돈벌이 하면 안 돼!"',
        subtitle: '꼭 필요한 공공 서비스를 민간이 돈 벌려고 운영하면 가격만 오르고 서민이 피해봐. 나라가 직접 해야 한다는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
    ],
  },

  // ─────────────────────────────────────────
  // Q10. 최우선 가치 — 가중 문항 (개인 우선순위 확인)
  // ─────────────────────────────────────────
  {
    id: 'q10',
    category: 'regional',
    text: '지금 내 삶에서 가장 시급하게 해결돼야 할 문제는?',
    description: '이 문항은 결과에 더 큰 영향을 미쳐요. 솔직하게 골라주세요.',
    options: [
      {
        id: 'q10_a',
        text: '💼 "우리 지역에 기업이랑 좋은 일자리!"',
        subtitle: '지방이 소멸하는 이유는 결국 일자리가 없어서야. 지역에 기업 유치하고 좋은 일자리 생기는 게 최우선이에요.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q10_b',
        text: '🏠 "아무리 일해도 집 한 칸 못 구하겠다!"',
        subtitle: '주거 안정이 해결돼야 나머지 삶도 안정돼. 지금 제일 급한 건 집 문제라는 생각이에요.',
        scores: [
          { partyId: 'chokuk', points: 2 },
          { partyId: 'justice', points: 2 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q10_c',
        text: '🌧️ "폭염·홍수·미세먼지, 기후 위기가 이미 일상이다!"',
        subtitle: '지금 안 하면 나중엔 더 큰 비용을 치러. 기후 위기가 현재의 가장 시급한 과제라는 생각이에요.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q10_d',
        text: '👨‍👩‍👧‍👦 "아이 맡길 곳도, 부모 돌봄도 막막하다!"',
        subtitle: '일하다 다치거나, 아이 맡길 곳이 없거나, 어르신 돌봄이 막막하면 삶이 무너져. 복지가 기본이 돼야 한다는 생각이에요.',
        scores: [
          { partyId: 'progressive', points: 2 },
          { partyId: 'justice', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
    ],
  },
]
