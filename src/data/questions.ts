import { Question } from '@/types'

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'regional',
    text: '지역 발전, 어떻게 해야 한다고 생각하세요?',
    description: '우리나라의 수도권 집중과 지방 소멸 문제를 해결하는 방법에 대한 생각이에요',
    options: [
      {
        id: 'q1_a',
        text: '수도권이 경쟁력을 키워야 전국이 함께 잘 산다',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q1_b',
        text: '전국을 5개 광역권으로 나눠 동시에 키워야 한다 (5극·3특)',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q1_c',
        text: '지역마다 규제를 풀어 각자의 강점으로 경쟁해야 한다',
        scores: [
          { partyId: 'reform', points: 3 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q1_d',
        text: '지방 주민에게 직접 배당금을 지급해야 한다',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },
  {
    id: 'q2',
    category: 'housing',
    text: '집 문제, 가장 시급한 해결책은 무엇인가요?',
    description: '전세·월세·공공주택 등 주거 안정을 위한 정책 방향이에요',
    options: [
      {
        id: 'q2_a',
        text: '반값 전세·월세 세액공제 확대로 임대 시장을 안정시켜야 한다',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q2_b',
        text: '공공임대를 대폭 확충하고 재건축 규제를 합리화해야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'justice', points: 2 },
        ],
      },
      {
        id: 'q2_c',
        text: '분양 전환 없이 99년간 살 수 있는 장기 공공임대를 만들어야 한다',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q2_d',
        text: '규제 완화로 민간이 더 많은 주택을 빠르게 공급해야 한다',
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
    description: 'AI·원전·규제 완화·공공 일자리 등 경제성장 전략에 대한 생각이에요',
    options: [
      {
        id: 'q3_a',
        text: 'AI·바이오·방산 등 첨단산업에 국가 역량을 집중해야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q3_b',
        text: 'SMR(소형원전)·방산 등 전략산업 규제를 과감히 풀어야 한다',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q3_c',
        text: '규제 샌드박스를 확대해 스타트업이 자유롭게 실험해야 한다',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q3_d',
        text: '공공 일자리를 늘리고 노동자 권리를 먼저 튼튼히 해야 한다',
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
    description: '취업·주거·기본소득 등 청년 세대를 돕는 정책 방향이에요',
    options: [
      {
        id: 'q4_a',
        text: '청년 창업·취업 연계를 강화해 자립 기반을 만들어야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q4_b',
        text: '모든 청년(만 18~29세)에게 매달 기본소득을 지급해야 한다',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
      {
        id: 'q4_c',
        text: '공공 청년주택과 보육 지원으로 정착 비용을 낮춰야 한다',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'progressive', points: 1 },
        ],
      },
      {
        id: 'q4_d',
        text: '신혼부부 저금리 대출·주니어 ISA 등 자산 형성을 도와야 한다',
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
    description: '원전·재생에너지·기후 위기 대응에 대한 우선순위예요',
    options: [
      {
        id: 'q5_a',
        text: 'RE100 목표로 태양광·풍력 재생에너지를 최우선으로 늘려야 한다',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q5_b',
        text: 'SMR 포함 원전을 확대해 안정적이고 저렴한 전기를 공급해야 한다',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q5_c',
        text: '기후펀드·기후수당으로 에너지 전환 비용을 시민과 나눠야 한다',
        scores: [{ partyId: 'chokuk', points: 3 }],
      },
      {
        id: 'q5_d',
        text: '주민이 직접 에너지 협동조합을 운영하고 수익을 배당받아야 한다',
        scores: [{ partyId: 'basicincome', points: 3 }],
      },
    ],
  },
  {
    id: 'q6',
    category: 'welfare',
    text: '돌봄과 복지, 어떻게 운영해야 할까요?',
    description: '어르신·장애인·아동 돌봄 서비스의 운영 방식이에요',
    options: [
      {
        id: 'q6_a',
        text: '통합돌봄센터를 공공이 직접 운영해 누구나 이용 가능하게 해야 한다',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q6_b',
        text: '의료·교육·교통을 기본권으로 법제화해 소득 무관 보장해야 한다',
        scores: [{ partyId: 'justice', points: 3 }],
      },
      {
        id: 'q6_c',
        text: '민관 협력으로 다양한 돌봄 서비스를 선택할 수 있게 해야 한다',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q6_d',
        text: '지역별 맞춤 돌봄 정책을 강화하고 저출생 대응 예산을 늘려야 한다',
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
    description: '검찰 권한·선거제도·노동자 권리 보호에 대한 입장이에요',
    options: [
      {
        id: 'q7_a',
        text: '검찰 권한을 대폭 축소하고 공소청·공수처를 강화해야 한다',
        scores: [
          { partyId: 'minjoo', points: 3 },
          { partyId: 'chokuk', points: 2 },
        ],
      },
      {
        id: 'q7_b',
        text: '비례대표 확대 등 선거제도 개혁이 민주주의의 핵심이다',
        scores: [{ partyId: 'reform', points: 3 }],
      },
      {
        id: 'q7_c',
        text: '사법부 독립이 먼저, 정치 개입 없이 법대로 해야 한다',
        scores: [{ partyId: 'ppp', points: 2 }],
      },
      {
        id: 'q7_d',
        text: '노동·인권 분야에서 약자 보호를 최우선으로 해야 한다',
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
    description: '철도·버스·자율주행 등 이동 수단 정책에 대한 생각이에요',
    options: [
      {
        id: 'q8_a',
        text: 'GTX 확장 등 광역 급행철도로 수도권 출퇴근 시간을 줄여야 한다',
        scores: [{ partyId: 'ppp', points: 3 }],
      },
      {
        id: 'q8_b',
        text: '지방 광역권까지 고속철도를 연결해 전국 균형 발전을 실현해야 한다',
        scores: [{ partyId: 'minjoo', points: 3 }],
      },
      {
        id: 'q8_c',
        text: '시내버스를 완전 공영화해 대중교통을 저렴하게 이용할 수 있게 해야 한다',
        scores: [{ partyId: 'progressive', points: 3 }],
      },
      {
        id: 'q8_d',
        text: '자율주행·모빌리티 규제를 풀어 민간이 교통 혁신을 이끌어야 한다',
        scores: [{ partyId: 'reform', points: 3 }],
      },
    ],
  },
  {
    id: 'q9',
    category: 'industry',
    text: '정부의 경제 역할, 어느 정도가 적당하다고 생각하세요?',
    description: '시장 자율 vs 정부 개입의 적절한 균형에 대한 생각이에요',
    options: [
      {
        id: 'q9_a',
        text: '정부는 최대한 시장에 맡기고 규제를 줄여야 한다',
        scores: [
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 2 },
        ],
      },
      {
        id: 'q9_b',
        text: '전략산업은 정부가 적극 육성하되 시장과 협력해야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 1 },
        ],
      },
      {
        id: 'q9_c',
        text: '기본 서비스는 정부가 보장하고 그 위에서 시장이 작동해야 한다',
        scores: [
          { partyId: 'justice', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q9_d',
        text: '핵심 자원과 서비스는 공공이 직접 운영해야 한다',
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
        text: '내 지역에 기업·일자리가 와야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'ppp', points: 2 },
          { partyId: 'reform', points: 1 },
        ],
      },
      {
        id: 'q10_b',
        text: '집값·전세 걱정 없이 살 수 있어야 한다',
        scores: [
          { partyId: 'chokuk', points: 2 },
          { partyId: 'justice', points: 2 },
          { partyId: 'ppp', points: 1 },
        ],
      },
      {
        id: 'q10_c',
        text: '기후 위기 대응, 지금 바로 시작해야 한다',
        scores: [
          { partyId: 'minjoo', points: 2 },
          { partyId: 'chokuk', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
      {
        id: 'q10_d',
        text: '복지·돌봄이 충분해야 내 가족이 안심된다',
        scores: [
          { partyId: 'progressive', points: 2 },
          { partyId: 'justice', points: 2 },
          { partyId: 'basicincome', points: 1 },
        ],
      },
    ],
  },
]
