import { Party } from '@/types'

export const parties: Record<string, Party> = {
  minjoo: {
    id: 'minjoo',
    name: '더불어민주당',
    shortName: '민주당',
    color: '#1E6FCC',
    gradient: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100',
    emoji: '🔵',
    tagline: '균형 잡힌 성장, 모두를 위한 나라',
    platforms: [
      {
        category: 'regional',
        title: '5극·3특 균형발전',
        description:
          '전국을 수도권·충청·호남·대경·동남 5개 초광역권과 강원·전북·제주 3개 특별자치도로 나눠 동시 발전을 추진해요. 세종 집무실과 국회 세종의사당도 임기 내 건립할 계획이에요.',
      },
      {
        category: 'industry',
        title: 'AI·첨단산업 집중 육성',
        description:
          'AI·바이오·방산 등 첨단산업 육성으로 미래 먹거리를 확보해요. AI 3대 강국 도약을 위한 AI 고속도로 완성도 목표예요.',
      },
      {
        category: 'judicial',
        title: '검찰 개혁 완수',
        description:
          '공소청 제도 안착으로 수사·기소를 분리하고 검사 파면 제도를 도입해요. 권력기관을 민주적으로 통제하는 것이 목표예요.',
      },
      {
        category: 'environment',
        title: 'RE100 에너지 전환',
        description:
          '재생에너지 비율을 단계적으로 높이고 기후위기에 적극 대응해요. 태양광·해상풍력에 집중 투자해 에너지 전환을 이끌어요.',
      },
    ],
  },
  ppp: {
    id: 'ppp',
    name: '국민의힘',
    shortName: '국민의힘',
    color: '#C0392B',
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-50 to-red-100',
    emoji: '🔴',
    tagline: '안정과 성장, 자유로운 대한민국',
    platforms: [
      {
        category: 'housing',
        title: '반값 전세·월세 지원 확대',
        description:
          '주변 시세 50% 수준의 장기전세주택을 도입하고, 월세 세액공제 대상을 연봉 9000만 원으로 확대(공제율 최대 22%)해요. 재건축 초과이익 환수제도 폐지할 계획이에요.',
      },
      {
        category: 'industry',
        title: '규제 철폐로 기업 성장 지원',
        description:
          '기업 규제를 대폭 완화해 경제 활력을 높여요. 한국판 IRA(국내 생산 장려 세제 혜택)도 도입해 국내 기업의 경쟁력을 강화해요.',
      },
      {
        category: 'environment',
        title: 'SMR·원전 르네상스',
        description:
          '소형모듈원전(SMR) 상용화를 앞당기고 원전 생태계를 복원해 안정적이고 저렴한 전력을 공급해요. 에너지 안보를 최우선으로 생각해요.',
      },
      {
        category: 'transport',
        title: 'GTX 전국 확장',
        description:
          'GTX 노선을 차질 없이 완공하고 추가 노선을 추진해 전국 1시간 생활권을 실현해요. 광역 교통망 혁신으로 출퇴근 부담을 줄여요.',
      },
    ],
  },
  chokuk: {
    id: 'chokuk',
    name: '조국혁신당',
    shortName: '혁신당',
    color: '#00875A',
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-emerald-50 to-emerald-100',
    emoji: '🟢',
    tagline: '개혁을 완성하는 혁신의 힘',
    platforms: [
      {
        category: 'housing',
        title: '99년 평생 안심 내 집',
        description:
          '공공 임대아파트를 분양 전환 없이 최대 99년 동안 계속 거주할 수 있게 해요. 사실상 내 집처럼 안정적으로 살 수 있는 주거 환경을 만들어요.',
      },
      {
        category: 'environment',
        title: '기후펀드·기후수당·기후보험',
        description:
          '기후 위기 대응을 위한 국가 펀드를 조성하고, 에너지 전환 비용을 시민에게 기후수당으로 돌려줘요. 에너지분권을 통해 지역 주민이 직접 에너지를 관리해요.',
      },
      {
        category: 'industry',
        title: 'AI 넥서스 플랫폼',
        description:
          'AI 산업 집적지를 조성하고 공공 AI 플랫폼을 구축해 데이터 주권을 확보해요. 아시아·태평양 AI 산업 중심지로 도약하는 것이 목표예요.',
      },
      {
        category: 'judicial',
        title: '검찰 개혁 완성',
        description:
          '고위공직자 수사 전담기구를 확대하고 검찰의 기소권 독점을 폐지해요. 권력기관 개혁을 통해 공정한 사회를 만들어요.',
      },
    ],
  },
  reform: {
    id: 'reform',
    name: '개혁신당',
    shortName: '개혁신당',
    color: '#E67E22',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
    emoji: '🟠',
    tagline: '기득권을 깨는 실용적 개혁',
    platforms: [
      {
        category: 'industry',
        title: '규제 완화·신산업 실험',
        description:
          '지역 내 규제를 완화해 지역별로 신산업 실험을 할 수 있는 기반을 만들어요. 규제 샌드박스를 전면 확대해 민간 주도 혁신 생태계를 구축해요.',
      },
      {
        category: 'judicial',
        title: '선거제도 개혁',
        description:
          '비례대표를 확대하고 연동형 선거제를 도입해 다양한 정치 목소리가 국회에 반영되게 해요. 선거 진입 장벽도 낮춰요.',
      },
      {
        category: 'regional',
        title: '지역 특구 자율화',
        description:
          '지역별 규제 특구를 지정해 지방이 직접 경제 실험을 이끄는 분권 구조를 만들어요. 각 지역의 특색과 강점을 살려요.',
      },
      {
        category: 'transport',
        title: '모빌리티 혁신',
        description:
          '자율주행·개인형 이동수단(PM) 규제를 혁파하고 민간 교통 플랫폼을 활성화해요. 새로운 이동 수단이 일상에 자리잡게 해요.',
      },
    ],
  },
  progressive: {
    id: 'progressive',
    name: '진보당',
    shortName: '진보당',
    color: '#A93226',
    gradient: 'from-rose-700 to-rose-800',
    bgGradient: 'from-rose-50 to-rose-100',
    emoji: '✊',
    tagline: '노동자·서민이 주인인 나라',
    platforms: [
      {
        category: 'transport',
        title: '공공버스 완전 공영화',
        description:
          '모든 시내버스를 지방자치단체가 직접 운영해요. 단계적으로 무상 대중교통을 실현하고 지역 교통 공공성을 강화해요.',
      },
      {
        category: 'industry',
        title: '지역공공은행 설립',
        description:
          '지역 자본이 지역에 재투자되는 공공은행을 설립해요. 서민 금융 사각지대를 해소하고 지역 순환 경제를 구축해요.',
      },
      {
        category: 'welfare',
        title: '통합돌봄 공공 직영',
        description:
          '어르신·장애인·아동 돌봄 서비스를 민간 위탁 대신 공공이 직접 운영해요. 공공 의료와 교육의 공공성도 강화해요.',
      },
      {
        category: 'industry',
        title: '노동권 강화',
        description:
          '최저임금을 현실화하고 플랫폼 노동자의 노동자성을 인정해요. 중대재해처벌법을 강화해 노동자 생명과 안전을 지켜요.',
      },
    ],
  },
  basicincome: {
    id: 'basicincome',
    name: '기본소득당',
    shortName: '기본소득당',
    color: '#7D3C98',
    gradient: 'from-purple-600 to-purple-700',
    bgGradient: 'from-purple-50 to-purple-100',
    emoji: '💜',
    tagline: '모두에게 기본, 모두가 주인',
    platforms: [
      {
        category: 'regional',
        title: '지방형 기본소득',
        description:
          '지역 주민 모두에게 기본소득을 지급해 지역 소멸 위기를 해소하고 지역 경제 선순환 구조를 만들어요. 불평등 문제 해결이 핵심이에요.',
      },
      {
        category: 'environment',
        title: '주민배당형 에너지펀드',
        description:
          '재생에너지 수익을 지역 주민에게 직접 배당해요. 에너지 전환과 소득 보장을 동시에 달성하는 혁신적인 방식이에요.',
      },
      {
        category: 'youth',
        title: '청년 기본소득',
        description:
          '만 18~29세 청년에게 매달 기본소득을 지급해 취업·창업·학업 선택의 자유를 줘요. 청년 스스로 미래를 설계할 수 있게 해요.',
      },
      {
        category: 'regional',
        title: '지역 주민 배당',
        description:
          '지방세·자원 개발 수익을 주민 배당금으로 직접 지급해요. 공공산업 투자와 혁신적 이익 공유제를 통해 지역공유부펀드를 운영해요.',
      },
    ],
  },
  justice: {
    id: 'justice',
    name: '정의당',
    shortName: '정의당',
    color: '#B7950B',
    gradient: 'from-yellow-500 to-yellow-600',
    bgGradient: 'from-yellow-50 to-yellow-100',
    emoji: '⚖️',
    tagline: '정의로운 나라, 평등한 일상',
    platforms: [
      {
        category: 'welfare',
        title: '기본서비스 보장',
        description:
          '주거·먹거리·교통 등 기본 서비스가 일상에서 이뤄질 수 있도록 해요. 의료·교육·교통을 기본권으로 법제화해 소득에 무관하게 누구나 이용해요.',
      },
      {
        category: 'housing',
        title: '공공의료·공공주택 확대',
        description:
          '공공병원을 확충하고 사회주택 비율을 단계적으로 높여요. 누구나 건강하게 살 수 있는 의료 환경과 안정적인 주거 환경을 만들어요.',
      },
      {
        category: 'industry',
        title: '노동자 권리 강화',
        description:
          '비정규직 철폐 로드맵을 추진하고 동일노동 동일임금 원칙을 법적으로 강제해요. 모든 노동자가 공정한 대우를 받는 사회를 만들어요.',
      },
      {
        category: 'judicial',
        title: '인권 기반 사법 개혁',
        description:
          '소수자·취약계층 법률 지원을 강화하고 혐오범죄를 처벌해요. 모든 사람이 평등하게 법의 보호를 받는 사회가 목표예요.',
      },
    ],
  },
}

export const partyList = Object.values(parties)
