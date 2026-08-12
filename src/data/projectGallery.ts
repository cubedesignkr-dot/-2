import { GLOBAL_PROJECT_IMAGES } from './globalProjectImages';

export interface ProjectGalleryItem {
  id: string;
  category: string;
  titleKo: string;
  titleEn: string;
  locationKo: string;
  locationEn: string;
  descriptionKo: string;
  descriptionEn: string;
  image: string;
  imageAltKo: string;
  imageAltEn: string;
  status: string;
  sortOrder: number;
  published: boolean;
}

export interface GlobalGalleryImage {
  src: string;
  altKo: string;
  altEn: string;
  captionKo?: string;
  captionEn?: string;
  objectPosition?: string;
}

export interface GlobalGalleryItem {
  id: string;
  type?: 'GLOBAL' | 'ACTIVITIES';
  titleKo: string;
  titleEn: string;
  locationKo: string;
  locationEn: string;
  date?: string;
  status: 'GLOBAL BUSINESS' | 'IN PROGRESS' | 'GLOBAL PARTNERSHIP' | string;
  imageType?: 'CONCEPT IMAGE' | string;
  images: GlobalGalleryImage[];
  descriptionKo: string;
  descriptionEn: string;

  // Legacy fields for backward compatibility
  title?: string;
  category?: string;
  categoryEn?: string;
  image?: string;
  description?: string;
}

export const projectGalleryItems: ProjectGalleryItem[] = [
  {
    id: 'incheon-airport-media-tower',
    category: 'media',
    titleKo: '인천국제공항 미디어타워',
    titleEn: 'Incheon International Airport Media Tower',
    locationKo: '인천국제공항 T1/T2',
    locationEn: "Incheon Int'l Airport T1 & T2",
    descriptionKo: '30K 초고해상도 미디어타워를 PC 9~12대 멀티 싱크 방식으로 통합송출합니다.',
    descriptionEn: 'Integrated broadcast of 30K ultra-high-resolution media tower using 9-12 PC multi-sync method.',
    image: '/images/home/home-project-incheon-airport.png',
    imageAltKo: '인천국제공항 내부 수직 LED 미디어타워',
    imageAltEn: 'Incheon International Airport Vertical LED Media Tower',
    status: 'COMPLETED',
    sortOrder: 1,
    published: true,
  },
  {
    id: 'incheon-airport-media-wall',
    category: 'media',
    titleKo: '인천국제공항 미디어월',
    titleEn: 'Incheon International Airport Media Wall',
    locationKo: '인천국제공항',
    locationEn: 'Incheon International Airport',
    descriptionKo: '인천국제공항 내 구축된 고화질 디스플레이 미디어월 구축 사례입니다.',
    descriptionEn: 'High-definition display media wall installation project at Incheon International Airport.',
    image: '/images/projects/project-incheon-airport-media-wall.webp',
    imageAltKo: '인천국제공항 미디어월 구축 사례',
    imageAltEn: 'Incheon International Airport Media Wall Case Study',
    status: 'COMPLETED',
    sortOrder: 2,
    published: true,
  },
  {
    id: 'inspire-arena',
    category: 'media',
    titleKo: '인스파이어 아레나',
    titleEn: 'Inspire Arena',
    locationKo: '인천 영종도',
    locationEn: 'Yeongjongdo, Incheon',
    descriptionKo: '인스파이어 통합리조트의 17 Player 기반 LED 미디어와 16K 동기화 시스템을 통합운영합니다.',
    descriptionEn: 'Integrated operation of 17 Player-based LED media and 16K synchronization system at Inspire Resort.',
    image: '/images/home/home-project-inspire-arena-hq.webp',
    imageAltKo: '인스파이어 아레나 공연장 LED 미디어',
    imageAltEn: 'Inspire Arena Performance Hall LED Media',
    status: 'COMPLETED',
    sortOrder: 3,
    published: true,
  },
  {
    id: 'dongseongro-spark',
    category: 'media',
    titleKo: '동성로 스파크',
    titleEn: 'Dongseongro Spark',
    locationKo: '대구 동성로',
    locationEn: 'Dongseongro, Daegu',
    descriptionKo: '외벽 LED와 내부 미디어를 17 Player 기반으로 통합운영하고 듀얼 스크린을 동기화합니다.',
    descriptionEn: 'Integrated operation of exterior LED and internal media based on 17 Player with dual screen sync.',
    image: '/images/home/home-project-dongseongro-spark-clean.webp',
    imageAltKo: '동성로 스파크 외벽 LED 미디어',
    imageAltEn: 'Dongseongro Spark Exterior LED Media',
    status: 'COMPLETED',
    sortOrder: 4,
    published: true,
  },
  {
    id: 'ifc-mall',
    category: 'media',
    titleKo: '여의도 IFC몰 LED 미디어',
    titleEn: 'Yeouido IFC Mall LED Media',
    locationKo: '서울 여의도',
    locationEn: 'Yeouido, Seoul',
    descriptionKo: '여의도 IFC몰 LED 미디어타워를 구축하고 에어로-플렉스 오픈 메시 기반으로 운영합니다.',
    descriptionEn: 'Built Yeouido IFC Mall LED media tower and operating on Aero-Flex open mesh basis.',
    image: '/images/home/home-project-ifc-mall.png',
    imageAltKo: '여의도 IFC몰 야간 LED 미디어 파사드',
    imageAltEn: 'Yeouido IFC Mall Night LED Media Facade',
    status: 'COMPLETED',
    sortOrder: 5,
    published: true,
  },
  {
    id: 'emart24-did',
    category: 'media',
    titleKo: '이마트24 매장 DID',
    titleEn: 'eMart24 Store DID',
    locationKo: '전국 매장',
    locationEn: 'Nationwide Stores',
    descriptionKo: '전국 이마트24 매장에 설치된 카운터 및 홍보용 DID 단말기 연동 시스템입니다.',
    descriptionEn: 'Counter and promotional DID display system installed at eMart24 stores nationwide.',
    image: '/images/projects/project-emart24-did.webp',
    imageAltKo: '이마트24 매장 카운터 DID 디스플레이',
    imageAltEn: 'eMart24 Store Counter DID Display',
    status: 'COMPLETED',
    sortOrder: 6,
    published: true,
  },
  {
    id: 'busan-lct-exhibition',
    category: 'media',
    titleKo: '부산 엘시티 미디어 전시관',
    titleEn: 'Busan LCT Media Exhibition',
    locationKo: '부산 해운대',
    locationEn: 'Haeundae, Busan',
    descriptionKo: '부산 엘시티의 고화질 몰입형 LED 미디어 전시관 시스템 구축 및 영상 제어 운영.',
    descriptionEn: 'System construction and video control operation for Busan LCT high-definition immersive LED media exhibition.',
    image: '/images/projects/project-busan-lct-exhibition.webp',
    imageAltKo: '부산 엘시티 몰입형 LED 미디어 전시 공간',
    imageAltEn: 'Busan LCT Immersive LED Media Exhibition Space',
    status: 'COMPLETED',
    sortOrder: 7,
    published: true,
  },
  {
    id: 'tour-bus-shelter-led',
    category: 'media',
    titleKo: '투어버스 쉘터 LED 매체',
    titleEn: 'Tour Bus Shelter LED Media',
    locationKo: '서울 도심',
    locationEn: 'Downtown Seoul',
    descriptionKo: '도심 주요 보행 및 관광 구역 버스 쉘터 연계 초고선명 LED 디스플레이 구축.',
    descriptionEn: 'Construction of ultra-high-definition LED display connected to bus shelters in major urban pedestrian areas.',
    image: '/images/projects/project-tour-bus-shelter-led.webp',
    imageAltKo: '도심 보행 공간의 투어버스 쉘터 LED 매체',
    imageAltEn: 'Tour Bus Shelter LED Media in Urban Pedestrian Space',
    status: 'COMPLETED',
    sortOrder: 8,
    published: true,
  },
  {
    id: 'civil-service-did',
    category: 'media',
    titleKo: '양방향 민원 서비스 DID',
    titleEn: 'Interactive Civil Service DID',
    locationKo: '공공기관',
    locationEn: 'Public Institutions',
    descriptionKo: '공공기관 창구 안내 및 민원 연동용 터치형 스마트 양방향 DID 시스템.',
    descriptionEn: 'Touch-screen smart interactive DID system for public agency guidance and civil service.',
    image: '/images/projects/project-civil-service-did.webp',
    imageAltKo: '공공기관 민원 창구에 설치된 양방향 DID 단말기',
    imageAltEn: 'Interactive DID Terminal installed in Public Office',
    status: 'COMPLETED',
    sortOrder: 9,
    published: true,
  },
];

/**
 * Returns list of projects where published === true, sorted by sortOrder ascending.
 */
export function getPublishedProjectGalleryItems(): ProjectGalleryItem[] {
  return projectGalleryItems
    .filter((item) => item.published)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export const globalBusinessItems: GlobalGalleryItem[] = [
  {
    id: 'hanoi-urban-led-media',
    type: 'GLOBAL',
    titleKo: '하노이 도심 LED 미디어 사업',
    titleEn: 'Hanoi Urban LED Media Project',
    locationKo: '베트남 하노이',
    locationEn: 'Hanoi, Vietnam',
    status: 'IN PROGRESS',
    images: [
      {
        src: GLOBAL_PROJECT_IMAGES.hanoiTrangTien,
        altKo: '하노이 Tràng Tiền 건물 LED 미디어 사업 대상지',
        altEn: 'Hanoi Tràng Tiền Building LED Media Site',
        captionKo: 'Tràng Tiền LED 미디어 사업 대상지',
        captionEn: 'Tràng Tiền LED Media Site',
        objectPosition: 'object-center',
      },
      {
        src: GLOBAL_PROJECT_IMAGES.hanoiQcdPlaza,
        altKo: '하노이 QCD Plaza 옥외 LED 미디어',
        altEn: 'Hanoi QCD Plaza Outdoor LED Media',
        captionKo: 'QCD Plaza LED 미디어 사업 대상지',
        captionEn: 'QCD Plaza LED Media Site',
        objectPosition: 'object-center',
      },
    ],
    descriptionKo: '하노이 도심 주요 거점(Tràng Tiền, QCD Plaza) 대상 옥외 LED 미디어 사업입니다.',
    descriptionEn: 'Outdoor LED media business targeting key landmarks in downtown Hanoi (Tràng Tiền, QCD Plaza).',
    title: '하노이 도심 LED 미디어 사업',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    image: GLOBAL_PROJECT_IMAGES.hanoiTrangTien,
    description: '하노이 도심 주요 거점(Tràng Tiền, QCD Plaza) 대상 옥외 LED 미디어 사업입니다.',
  },
  {
    id: 'noibai-airport-led-project',
    type: 'GLOBAL',
    titleKo: '노이바이공항 LED 사업',
    titleEn: 'Noi Bai International Airport LED Project',
    locationKo: '베트남 하노이',
    locationEn: 'Hanoi, Vietnam',
    status: 'IN PROGRESS',
    images: [
      {
        src: GLOBAL_PROJECT_IMAGES.noiBaiConcept,
        altKo: '노이바이공항 LED 미디어 설치 예상도',
        altEn: 'Noi Bai Airport LED Media Concept Rendering',
        captionKo: '설치 예상도',
        captionEn: 'Concept Rendering',
        objectPosition: 'object-center',
      },
    ],
    descriptionKo: '노이바이공항 LED 미디어 사업을 추진하고 있습니다.',
    descriptionEn: 'The Noi Bai International Airport LED media project is in progress.',
    title: '노이바이공항 LED 사업',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    image: GLOBAL_PROJECT_IMAGES.noiBaiConcept,
    description: '노이바이공항 LED 미디어 사업을 추진하고 있습니다.',
  },
  {
    id: 'vietnam-led-partnership-agreement',
    type: 'GLOBAL',
    titleKo: '베트남 LED 사업 본 협약 체결',
    titleEn: 'Vietnam LED Business Partnership Agreement',
    date: '2026.01.07',
    locationKo: '베트남 하노이',
    locationEn: 'Hanoi, Vietnam',
    status: 'GLOBAL PARTNERSHIP',
    images: [
      {
        src: GLOBAL_PROJECT_IMAGES.hanoiAgreementCeremony,
        altKo: '2026년 1월 7일 하노이 베트남 LED 사업 본 협약 기념사진',
        altEn: 'January 7, 2026 Hanoi Vietnam LED Business Partnership Ceremony Photograph',
        captionKo: '본 협약 체결 기념사진',
        captionEn: 'Partnership Ceremony',
        objectPosition: 'object-[center_35%]',
      },
      {
        src: GLOBAL_PROJECT_IMAGES.hanoiAgreementExchange,
        altKo: '2026년 1월 7일 하노이 베트남 LED 사업 계약서 교환',
        altEn: 'January 7, 2026 Hanoi Vietnam LED Business Agreement Exchange',
        captionKo: '계약서 교환',
        captionEn: 'Agreement Exchange',
        objectPosition: 'object-[center_35%]',
      },
    ],
    descriptionKo: 'MHGROUP과 베트남 LED 미디어 사업 협력을 위한 본 협약을 체결했습니다.',
    descriptionEn: 'DISE signed a partnership agreement with MHGROUP for the Vietnam LED media business.',
    title: '베트남 LED 사업 본 협약 체결',
    category: 'GLOBAL PARTNERSHIP',
    categoryEn: 'GLOBAL PARTNERSHIP',
    image: GLOBAL_PROJECT_IMAGES.hanoiAgreementCeremony,
    description: 'MHGROUP과 베트남 LED 미디어 사업 협력을 위한 본 협약을 체결했습니다.',
  },
  {
    id: 'noibai-airport-led-partnership',
    type: 'GLOBAL',
    titleKo: '노이바이공항 LED 협력',
    titleEn: 'Noi Bai Airport LED Partnership',
    date: '2026.05',
    locationKo: '베트남 하노이',
    locationEn: 'Hanoi, Vietnam',
    status: 'GLOBAL PARTNERSHIP',
    images: [
      {
        src: GLOBAL_PROJECT_IMAGES.noiBaiCooperation,
        altKo: '2026년 5월 하노이 노이바이공항 LED 협력 기념사진',
        altEn: 'May 2026 Hanoi Noi Bai Airport LED Partnership Commemorative Photo',
        captionKo: '한·베트남 관계자 기념 촬영',
        captionEn: 'Korean and Vietnamese Partners Commemorative Photograph',
        objectPosition: 'object-[center_35%]',
      },
    ],
    descriptionKo: '노이바이공항 LED 사업 협력을 위한 한·베트남 관계자 기념 촬영입니다.',
    descriptionEn: 'A commemorative photograph of Korean and Vietnamese partners for the Noi Bai Airport LED project.',
    title: '노이바이공항 LED 협력',
    category: 'GLOBAL PARTNERSHIP',
    categoryEn: 'GLOBAL PARTNERSHIP',
    image: GLOBAL_PROJECT_IMAGES.noiBaiCooperation,
    description: '노이바이공항 LED 사업 협력을 위한 한·베트남 관계자 기념 촬영입니다.',
  },
  {
    id: 'mhgroup-korea-visit-20260728',
    type: 'ACTIVITIES',
    titleKo: 'MH그룹 한국 방문',
    titleEn: 'MH GROUP VISIT TO KOREA',
    date: '2026.07.28',
    locationKo: '대한민국',
    locationEn: 'KOREA',
    status: 'BUSINESS ACTIVITIES',
    images: [
      {
        src: GLOBAL_PROJECT_IMAGES.mhGroupVisitMain,
        altKo: 'MH그룹 관계자 한국 방문 기념 단체사진',
        altEn: 'Commemorative photo of MH Group delegation visiting Korea',
        captionKo: 'MH그룹 관계자 한국 방문 기념 단체사진',
        captionEn: 'Commemorative photo of MH Group delegation visiting Korea',
        objectPosition: 'object-[center_20%]',
      },
      {
        src: GLOBAL_PROJECT_IMAGES.mhGroupVisitDelegation,
        altKo: 'MH그룹 한국 방문 대표단 기념사진',
        altEn: 'Commemorative photo of MH Group delegation in Korea',
        captionKo: 'MH그룹 한국 방문 대표단 기념사진',
        captionEn: 'Commemorative photo of MH Group delegation in Korea',
        objectPosition: 'object-[center_20%]',
      },
      {
        src: GLOBAL_PROJECT_IMAGES.mhGroupVisitMeeting,
        altKo: 'MH그룹 한국 방문 글로벌 사업 협력 미팅',
        altEn: 'MH Group Korea visit global business cooperation meeting',
        captionKo: 'MH그룹 한국 방문 글로벌 사업 협력 미팅',
        captionEn: 'MH Group Korea visit global business cooperation meeting',
        objectPosition: 'object-[center_20%]',
      },
    ],
    descriptionKo: 'MH그룹 관계자 한국 방문 및 글로벌 LED 미디어 사업 협력 미팅',
    descriptionEn: 'MH Group’s visit to Korea and business meeting for global LED media cooperation.',
    title: 'MH그룹 한국 방문',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: GLOBAL_PROJECT_IMAGES.mhGroupVisitMain,
    description: 'MH그룹 관계자 한국 방문 및 글로벌 LED 미디어 사업 협력 미팅',
  },
];
