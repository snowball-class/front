import { ItemDetail } from './types'

export const bannerInfo = [
  {
    id: '1',
    image: '/banner_1.png',
    href: '/subject/1',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '2',
    image: '/banner_2.png',
    href: '/subject/2',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '3',
    image: '/banner_3.png',
    href: '/subject/3',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '4',
    image: '/banner_4.png',
    href: '/subject/4',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '5',
    image: '/banner_5.png',
    href: '/subject/5',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '6',
    image: '/banner_6.png',
    href: '/subject/6',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '7',
    image: '/banner_7.png',
    href: '/subject/7',
    title: '영어인척 하지만 실은 개발입니다',
  },
  {
    id: '8',
    image: '/banner_8.png',
    href: '/subject/8',
    title: '영어인척 하지만 실은 개발입니다',
  },
]

export const itemDummy: ItemDetail[] = [
  {
    lessonId: 1,
    title: '프론트엔드 마스터 클래스',
    categoryId: 1,
    description: 'React와 TypeScript로 배우는 현대적인 웹 개발',
    netPrice: 99000,
    salePrice: 79000,
    thumbnail: '/frontend_master.png',
    rating: 4.8,
    instructor: '김프론트',
    replyList: [
      {
        id: '1',
        nickname: '웹개발자A',
        starCount: 5,
        content: '정말 유익한 강의였습니다!',
        createdAt: '2024-03-15',
        isOwner: false,
      },
    ],
  },
  {
    lessonId: 2,
    title: '백엔드 실전 프로젝트',
    categoryId: 2,
    description: 'Node.js와 Express로 구현하는 서버 개발',
    netPrice: 120000,
    salePrice: 108000,
    thumbnail: '/backend_project.png',
    rating: 4.9,
    instructor: '박서버',
    replyList: [
      {
        id: '2',
        nickname: '백엔드개발자B',
        starCount: 4,
        content: '실무에서 바로 적용할 수 있는 내용이에요',
        createdAt: '2024-03-14',
        isOwner: false,
      },
    ],
  },
  {
    lessonId: 3,
    title: 'DevOps 입문 가이드',
    categoryId: 3,
    description: 'Docker와 Kubernetes 완벽 마스터',
    netPrice: 150000,
    salePrice: 135000,
    thumbnail: '/devops_guide.png',
    rating: 4.7,
    instructor: '이데브옵스',
    replyList: [
      {
        id: '3',
        nickname: '클라우드엔지니어',
        starCount: 5,
        content: '클라우드 환경 이해에 많은 도움이 되었습니다',
        createdAt: '2024-03-13',
        isOwner: true,
      },
    ],
  },
  {
    lessonId: 4,
    title: '데이터 사이언스 기초',
    categoryId: 4,
    description: 'Python과 pandas를 활용한 데이터 분석',
    netPrice: 89000,
    salePrice: 79000,
    thumbnail: '/data_science.png',
    rating: 4.6,
    instructor: '최데이터',
    replyList: [
      {
        id: '4',
        nickname: '데이터분석가',
        starCount: 4,
        content: '기초부터 차근차근 설명해주셔서 좋았어요',
        createdAt: '2024-03-12',
        isOwner: false,
      },
    ],
  },
]
