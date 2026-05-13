import { Question } from '@/types'

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'regional',
    text: '지역 발전, 어떻게 해야 한다고 생각하세요?',
    description: '수도권 집중 vs 지방 분산 — 우리나라 지역 불균형 해결 방향이에요',
    options: [
      {
        id: 'q1_a',
        text: '"서울 잘돼야 지방도 따라온다"',
        subtitle: '수도권이 경쟁력을 유지해야 한국 전체가 돈을 버는 거야. 서울이 커야 나머지도 먹고살 수 있다는 입장이에요.',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q1_b',
        text: '"서울만 잘살면 끝이 아니다!"',
        subtitle: '전국 5개 광역권에 기업·인프라·예산을 골고루 나눠서 지방도 함께 잘 사는 나라 만들자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q1_c',
        text: '"지역이 알아서 살아남게 해줘!"',
        subtitle: '지역마다 불필요한 규제를 풀어서 각자 강점 있는 산업으로 스스로 경쟁력을 키우게 하자는 거야.',
        scores: [
          { partyId: 'reform', points: 3 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q1_d',
        text: '"내 동네 자원 수익, 나한테 나눠줘!"',
        subtitle: '지방 공공사업 수익을 주민에게 직접 현금으로 배당해서 지역 소멸도 막고 소득도 늘리자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },
  {
    id: 'q2',
    category: 'housing',
    text: '집 문제, 가장 시급한 해결책은 무엇인가요?',
    description: '전세·월세·공공주택 — 내 집 마련·주거 안정 어떻게 할까요?',
    options: [
      {
        id: 'q2_a',
        text: '"전세값 절반만 내고 살 수 있어!"',
        subtitle: '나라가 보증 서줘서 주변 시세의 절반 가격 전세를 공급하고, 월세 세금 혜택도 늘려주겠다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q2_b',
        text: '"공공임대 더 많이, 집값은 합리적으로!"',
        subtitle: '정부가 임대 주택을 더 지어서 저렴하게 공급하고, 재건축 규제는 합리적으로 손보겠다는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'justice', points: 2 },
        ],
      },
      {
        id: 'q2_c',
        text: '"평생 쫓겨날 걱정 없이 살고 싶다!"',
        subtitle: '공공임대를 분양 전환 없이 99년간 살 수 있게 해서, 사실상 내 집처럼 안정적으로 거주하게 하겠다는 거야.',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q2_d',
        text: '"집 공급 막는 규제부터 치워버려!"',
        subtitle: '각종 규제를 풀어서 민간 건설사가 집을 더 빠르게 많이 짓게 하면 집값이 안정된다는 거야.',
        scores: [
          { partyId: 'reform', points: 2 },
          { partyId: 'ppp', points: 1 },
        ],
      },
    ],
  },
  {
    id: 'q3',
    category: 'industry',
    text: '미래 일자리를 만들 산업, 어디에 집중해야 할까요?',
    description: 'AI·원전·규제완화·공공일자리 — 어떤 방향이 맞을까요?',
    options: [
      {
        id: 'q3_a',
        text: '"AI 잘하는 나라가 미래 먹거리 가져간다!"',
        subtitle: '챗GPT 같은 AI, 바이오, 첨단기술에 나라가 제대로 투자해서 청년 일자리가 있는 산업을 키우자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q3_b',
        text: '"전기 빵빵하게, 기업 규제 시원하게!"',
        subtitle: '소형 원전(SMR)으로 전기를 안정 공급하고, 방산·첨단산업 허가를 빠르게 내줘서 기업이 한국에서 더 잘 벌게 하자는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q3_c',
        text: '"스타트업이 맘껏 도전할 수 있게!"',
        subtitle: '새로운 사업 시작할 때 규제가 너무 많아서 못 해. 일단 해보게 해주고 나중에 규제하자는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q3_d',
        text: '"좋은 일자리부터 만들고 권리 챙겨줘!"',
        subtitle: '공공 일자리를 늘리고, 배달·플랫폼 노동자도 정당한 권리를 받을 수 있도록 법적으로 보호하자는 거야.',
        scores: [
          { partyId: 'progressive', points: 2 },
          { partyId: 'justice', points: 2 },
        ],
      },
    ],
  },
  {
    id: 'q4',
    category: 'youth',
    text: '청년 지원, 어떤 방식이 가장 효과적일까요?',
    description: '취업·기본소득·주거·자산 — 청년 세대를 어떻게 도울까요?',
    options: [
      {
        id: 'q4_a',
        text: '"취업·창업 연결해줄 테니 직접 일어서라!"',
        subtitle: '청년 일자리 프로그램과 창업 지원을 강화해서 스스로 돈 벌 수 있는 환경을 만들어주겠다는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q4_b',
        text: '"매달 현금 줄게, 네 꿈 찾아가!"',
        subtitle: '만 18~29세 청년에게 나라가 매달 기본소득을 줘서 취업·창업·공부 중 뭐든 선택할 여유를 주자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
      {
        id: 'q4_c',
        text: '"집 걱정 없어야 꿈도 꿀 수 있다!"',
        subtitle: '공공 청년주택을 늘리고 보육비 부담을 줄여서, 돈이 없어도 서울에서 살며 도전할 수 있게 해주자는 거야.',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'progressive', points: 1 },
        ],
      },
      {
        id: 'q4_d',
        text: '"내 집 마련·통장 불리기 나라가 도와줄게!"',
        subtitle: '신혼부부 저금리 대출, 주니어 ISA(자산관리계좌) 등으로 청년이 빨리 자산을 모을 수 있게 지원하겠다는 거야.',
        scores: [
          { partyId: 'ppp', points: 3 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
    ],
  },
  {
    id: 'q5',
    category: 'environment',
    text: '에너지 정책, 어떤 방향이 맞다고 생각하세요?',
    description: '원전 vs 재생에너지 vs 기후수당 — 에너지 전환 방향이에요',
    options: [
      {
        id: 'q5_a',
        text: '"햇빛·바람으로 전기 만드는 나라!"',
        subtitle: '태양광·해상풍력 재생에너지를 최우선으로 키워서 석유·석탄 없어도 되는 에너지 독립 국가 만들자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q5_b',
        text: '"전기는 원자력이 가장 싸고 안정적이다!"',
        subtitle: '소형 원전(SMR)을 포함해 원자력을 늘리면 전기료가 싸지고 AI 공장·반도체 공장도 전기 걱정 없이 돌아간다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q5_c',
        text: '"기후 피해 입으면 나라가 보험 들어줘야지!"',
        subtitle: '기후 위기 대응 국가 펀드를 만들고, 에너지 전환 비용을 시민에게 기후수당으로 돌려주자는 거야.',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q5_d',
        text: '"동네 발전소 수익, 주민이 직접 나눠 갖자!"',
        subtitle: '주민들이 함께 에너지 협동조합을 만들어 전기를 팔고 수익을 배당받는 방식으로 에너지 전환을 하자는 거야.',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },
  {
    id: 'q6',
    category: 'welfare',
    text: '돌봄과 복지, 어떻게 운영해야 할까요?',
    description: '어르신·장애인·아동 돌봄 — 공공이 할까요, 민간이 할까요?',
    options: [
      {
        id: 'q6_a',
        text: '"어르신·장애인 돌봄, 국가가 직접 맡자!"',
        subtitle: '민간 업체에 맡기지 말고 지방자치단체가 직접 돌봄센터를 운영해서 서비스 질과 안정성을 보장하자는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q6_b',
        text: '"병원·버스·교육은 모두에게 기본으로!"',
        subtitle: '돈이 없어도 병원 가고, 버스 타고, 교육 받을 수 있도록 기본 서비스를 법으로 보장하자는 거야.',
        scores: [{ partyId: 'justice', points: 3 }],
      },
      {
        id: 'q6_c',
        text: '"다양한 돌봄 서비스, 내가 골라서 써!"',
        subtitle: '나라와 민간이 협력해서 다양한 돌봄 옵션을 만들고, 본인에게 맞는 서비스를 선택해서 이용하게 하자는 거야.',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q6_d',
        text: '"지역마다 맞춤 돌봄, 예산 더 확 늘려라!"',
        subtitle: '저출생·고령화가 심각한 지역마다 상황에 맞는 돌봄 정책을 만들고 예산을 대폭 늘려서 실질적으로 해결하자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
    ],
  },
  {
    id: 'q7',
    category: 'judicial',
    text: '사법·검찰 개혁, 어디까지 가야 한다고 생각하세요?',
    description: '검찰 권한·선거제도·노동자 권리 — 어떤 개혁이 필요할까요?',
    options: [
      {
        id: 'q7_a',
        text: '"검찰이 너무 세다, 권력 나눠야 한다!"',
        subtitle: '검찰이 수사도 하고 기소도 하는 구조를 바꿔서 공수처를 강화하고 권력기관이 서로 견제하게 만들자는 거야.',
        scores: [
          { partyId: 'minjoo', points: 3 },
          { partyId: 'chokuk', points: 2 },
        ],
      },
      {
        id: 'q7_b',
        text: '"내 한 표가 제대로 반영되게 해줘!"',
        subtitle: '비례대표를 늘리는 선거제 개혁으로 소수 정당도 의석을 얻어 다양한 목소리가 국회에 들어가게 하자는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q7_c',
        text: '"정치 개입 말고 법대로만 해라!"',
        subtitle: '검찰·법원이 정치에 휘둘리지 않고 독립적으로 움직여야 한다는 입장이야. 사법부 독립이 가장 중요하다는 거야.',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q7_d',
        text: '"약자가 법 앞에서 더 두껍게 보호받아야!"',
        subtitle: '노동자·장애인·소수자 등 힘없는 사람들이 법적 도움을 더 쉽게 받을 수 있도록 제도를 강화하자는 거야.',
        scores: [
          { partyId: 'justice', points: 3 },
          { partyId: 'progressive', points: 2 },
        ],
      },
    ],
  },
  {
    id: 'q8',
    category: 'transport',
    text: '교통 인프라, 어디에 투자해야 할까요?',
    description: '철도·버스·자율주행 — 이동 수단 정책 방향이에요',
    options: [
      {
        id: 'q8_a',
        text: '"서울서 어디든 30분! GTX 확 늘려라!"',
        subtitle: '수도권 광역급행철도(GTX)를 더 빠르게 더 많이 만들어서 먼 거리도 빠르게 출퇴근할 수 있게 하겠다는 거야.',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q8_b',
        text: '"지방도 KTX 타고 한 시간이면 간다!"',
        subtitle: '지방 주요 도시까지 고속철도로 연결해서 지방에 살아도 서울 못지않게 빠르게 이동할 수 있게 하자는 거야.',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q8_c',
        text: '"버스 공짜로! 대중교통은 공공재다!"',
        subtitle: '모든 시내버스를 나라·지자체가 직접 운영하고 단계적으로 무상 교통을 만들어서 교통비 부담을 없애자는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q8_d',
        text: '"자율주행 막는 규제 다 치워버려!"',
        subtitle: '자율주행차, 전동킥보드 등 새로운 이동 수단을 막는 규제를 없애고 민간이 교통 혁신을 이끌게 하자는 거야.',
        scores: [{ partyId: 'reform', points: 3 }],
      },
    ],
  },
  {
    id: 'q9',
    category: 'industry',
    text: '정부의 경제 역할, 어느 정도가 적당하다고 생각하세요?',
    description: '시장 자율 vs 정부 개입 — 경제 운영 철학에 대한 생각이에요',
    options: [
      {
        id: 'q9_a',
        text: '"정부는 빠지고 시장에 맡겨라!"',
        subtitle: '규제가 많으면 기업이 느려지고 경제가 안 돌아가. 시장이 알아서 하게 두는 게 가장 효율적이라는 거야.',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 2 },
        ],
      },
      {
        id: 'q9_b',
        text: '"핵심산업은 나라가 방향 잡아줘야 한다!"',
        subtitle: 'AI·반도체·방산 같은 전략산업은 나라가 먼저 투자하고 방향을 잡아줘야 민간도 따라온다는 거야.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q9_c',
        text: '"기본은 나라가, 그 위에서 시장이!"',
        subtitle: '병원·교육·주거 같은 기본은 나라가 보장하고, 나머지는 시장에 맡기는 균형이 맞다는 거야.',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q9_d',
        text: '"전기·버스·병원은 돈벌이 하면 안 된다!"',
        subtitle: '꼭 필요한 공공 서비스를 민간이 돈 벌려고 운영하면 가격만 오르고 서민이 피해봐. 나라가 직접 해야 한다는 거야.',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
    ],
  },
  {
    id: 'q10',
    category: 'regional',
    text: '지금 당신에게 가장 시급한 지역 정책 과제는?',
    description: '이 문항은 결과에 더 큰 영향을 미칩니다',
    options: [
      {
        id: 'q10_a',
        text: '"우리 지역에 기업이랑 좋은 일자리!"',
        subtitle: '지방이 소멸하는 이유는 결국 일자리가 없어서야. 지역에 기업을 유치해서 좋은 일자리가 생기게 하는 게 최우선이에요.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q10_b',
        text: '"집 걱정 없이 살고 싶다!"',
        subtitle: '아무리 일해도 집 한 칸 구하기 힘든 게 현실이야. 주거가 안정돼야 나머지 삶도 안정된다는 생각이에요.',
        scores: [
          { partyId: 'chokuk', points: 2 },
          { partyId: 'justice', points: 2 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q10_c',
        text: '"기후 위기, 지금 당장 대응해야 해!"',
        subtitle: '폭염·홍수·미세먼지... 이미 기후 위기가 일상이 됐어. 지금 안 하면 나중엔 더 큰 비용을 치른다는 생각이에요.',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q10_d',
        text: '"복지·돌봄이 든든해야 가족이 안심된다!"',
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
