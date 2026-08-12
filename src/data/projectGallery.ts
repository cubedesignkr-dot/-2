import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';
import heroLedCityBg from '../assets/images/hero_led_city_bg_1786006096621.jpg';
import softwareCmsMonitorImg from '../assets/images/software_cms_monitor_1785989194504.jpg';
import hardwareControllerImg from '../assets/images/hardware_controller_1785989182277.jpg';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import inspireResortImg from '../assets/images/led_display_bg_1785990073226.jpg';

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

export const projectGalleryItems: ProjectGalleryItem[] = [
  {
    id: 'incheon-airport-media-tower',
    category: 'LED MEDIA',
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
    id: 'inspire-arena',
    category: 'LED MEDIA',
    titleKo: '인스파이어 아레나',
    titleEn: 'Inspire Arena',
    locationKo: '인천 영종도',
    locationEn: 'Yeongjongdo, Incheon',
    descriptionKo: '인스파이어 통합리조트의 17 Player 기반 LED 미디어와 16K 동기화 시스템을 통합운영합니다.',
    descriptionEn: 'Integrated operation of 17 Player-based LED media and 16K synchronization system at Inspire Resort.',
    image: '/images/home/home-project-inspire-arena.webp',
    imageAltKo: '인스파이어 아레나 공연장 LED 미디어',
    imageAltEn: 'Inspire Arena Performance Hall LED Media',
    status: 'COMPLETED',
    sortOrder: 2,
    published: true,
  },
  {
    id: 'dongseongro-spark',
    category: 'LED MEDIA',
    titleKo: '동성로 스파크',
    titleEn: 'Dongseongro Spark',
    locationKo: '대구 동성로',
    locationEn: 'Dongseongro, Daegu',
    descriptionKo: '외벽 LED와 내부 미디어를 17 Player 기반으로 통합운영하고 듀얼 스크린을 동기화합니다.',
    descriptionEn: 'Integrated operation of exterior LED and internal media based on 17 Player with dual screen sync.',
    image: '/images/home/home-project-dongseongro-spark.webp',
    imageAltKo: '동성로 스파크 외벽 LED 미디어',
    imageAltEn: 'Dongseongro Spark Exterior LED Media',
    status: 'COMPLETED',
    sortOrder: 3,
    published: true,
  },
  {
    id: 'ifc-mall',
    category: 'LED MEDIA',
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
    sortOrder: 4,
    published: true,
  },
  {
    id: 'emart24-did',
    category: 'DID',
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
    sortOrder: 5,
    published: true,
  },
  {
    id: 'busan-lct-exhibition',
    category: 'LED MEDIA',
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
    sortOrder: 6,
    published: true,
  },
  {
    id: 'tour-bus-shelter-led',
    category: 'LED MEDIA',
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
    sortOrder: 7,
    published: true,
  },
  {
    id: 'civil-service-did',
    category: 'DID',
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
    sortOrder: 8,
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

export interface GlobalGalleryItem {
  id: string;
  type: 'GLOBAL' | 'ACTIVITIES';
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  image: string;
  status?: 'CANDIDATE SITE' | 'IN PROGRESS';
  description: string;
}

export const globalBusinessItems: GlobalGalleryItem[] = [
  {
    id: 'global-01',
    type: 'GLOBAL',
    title: '하노이 도심 LED 미디어 사업',
    titleEn: 'HANOI URBAN LED MEDIA (TRANG TIEN)',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'CANDIDATE SITE',
    image: doohOutdoorMediaImg,
    description: 'DISE는 국내에서 축적한 LED 미디어 구축과 운영 경험을 바탕으로 글로벌 시장으로 사업 영역을 확장하고 있습니다. 하노이 도심 주요 거점(장띠엔) 대상 옥외 LED 미디어 사업 후보지입니다.',
  },
  {
    id: 'global-02',
    type: 'GLOBAL',
    title: '하노이 QCD Plaza 후보지',
    titleEn: 'HANOI QCD PLAZA',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'CANDIDATE SITE',
    image: heroLedCityBg,
    description: '하노이 도심 핵심 상업거점인 QCD Plaza를 대상으로 추진하는 옥외 LED 미디어 사업 후보지입니다.',
  },
  {
    id: 'global-03',
    type: 'GLOBAL',
    title: '노이바이국제공항 LED 사업',
    titleEn: 'NOI BAI INTERNATIONAL AIRPORT LED PROJECT',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'IN PROGRESS',
    image: heroLedCityBg,
    description: '노이바이국제공항 LED 미디어 사업을 위한 현지 협력 체계와 사업 추진 기반을 구축하고 있습니다.',
  },
  {
    id: 'activity-01',
    type: 'ACTIVITIES',
    title: '1차 베트남 방문 및 사업 미팅',
    titleEn: '1ST VIETNAM BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: hardwareControllerImg,
    description: '베트남 주요 미디어 및 공항 관계기관과의 1차 현지 사업 협력 미팅 진행.',
  },
  {
    id: 'activity-02',
    type: 'ACTIVITIES',
    title: '2차 베트남 방문 및 현장 조사',
    titleEn: '2ND VIETNAM BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: softwareCmsMonitorImg,
    description: '하노이 주요 거점 및 노이바이국제공항 LED 입지 현장 실사 및 기술 조사.',
  },
  {
    id: 'activity-03',
    type: 'ACTIVITIES',
    title: '민항회장 한국 방문',
    titleEn: 'KOREA BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: doohOutdoorMediaImg,
    description: '베트남 민항 대표단 한국 본사 방문 및 국내 공항 LED 미디어 현장 시찰.',
  },
  {
    id: 'activity-04',
    type: 'ACTIVITIES',
    title: 'DISE–MHGROUP 협력 체결',
    titleEn: 'VIETNAM BUSINESS PARTNERSHIP',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: heroLedGlassBg,
    description: '베트남 글로벌 LED 미디어 인프라 사업 추진을 위한 DISE와 MHGROUP 간 상호 협력 체결.',
  },
  {
    id: 'activity-05',
    type: 'ACTIVITIES',
    title: 'DISE–MHGROUP 미팅',
    titleEn: 'VIETNAM BUSINESS MEETING',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: inspireResortImg,
    description: '베트남 현지 미디어 운영 및 CMS 시스템 구축을 위한 세부 사업 실행 계획 논의.',
  },
];
