import { TProject } from "@/types/project";

export const projectList: TProject[] = [
    {
        id: 1,
        type: 'work',
        title: '[정부과제] 전동 킥보드 대여 앱',
        description: '전동 킥보드를 대여해주는 모바일 앱',
        roles: ['프론트엔드 개발자'],
        techstack: ['React Native', 'TypeScript', 'Styled-component'],
        outcome: '',
        contribution: 10,
        contents: ['React Native를 기반 앱 내 Map 연동/ UI 레이아웃 구성', 'NavBar 기능 구현'],
        period: '2022.04 ~ 2022.07',
        thumbnail: '',
        display: ['app']
    },
    {
        id: 2,
        type: 'work',
        title: '키워드 마케팅 플랫폼',
        description: '온라인 쇼핑몰을 모아 키워드 기반으로 랭킹 및 마케팅 지원하는 플랫폼',
        roles: ['프론트엔드 개발자'],
        techstack: ['Angular', 'Typescript', 'Node', 'Postman', 'Html/CSS'],
        outcome: '서비스 오픈은 하지 않았으나, 프론트엔드 구현 완료 및 내부 테스트 진행',
        contribution: 60,
        contents: [
            '디자인 시안을 HTML/CSS 기반으로 구현하고 레이아웃 퍼블리싱',
            'UI 요소를 재사용 가능한 컴포넌트 단위로 분리하여 유지보수성과 확장성 강화',
            'JSON 기반 가데이터를 설계 및 클라이언트 제공'
        ],
        period: '2022.04 ~ 2022.07',
        thumbnail: '',
        display: ['web'],
        links: [{
            type: 'notion',
            url: 'https://continuous-macrame-1a0.notion.site/150536612dce81b0a8a3cd5a451850a8',
        }],
    },
    {
        id: 3,
        type: 'work',
        title: '롤링',
        description: '굿노트에서 사용할 수 있는 속지/스티커 등을 판매하고, 구매할 수 있는 플랫폼',
        roles: ['프론트엔드 개발자'],
        techstack: ['Angular', 'Typescript', 'Node', 'Html/CSS'],
        outcome: '서비스 오픈하였으나 현재는 운영하지 않고 있습니다',
        contribution: 60,
        contents: [
            '디자인 시안을 전체 반응형 UI 구현',
            'UI 요소를 재사용 가능한 컴포넌트 단위로 분리',
            'param을 전달하여 해당 키워드에 맞는 데이터를 호출하는 검색 기능 구현',
            'JSON 기반 가데이터를 설계',
        ],
        period: '2022.08 ~ 2022.11',
        thumbnail: '',
        display: ['web'],
        links: [{
            type: 'notion',
            url: 'https://continuous-macrame-1a0.notion.site/1ac536612dce8065b8a9fb45f9a8d751',
        }]
    },
    {
        id: 4,
        type: 'work',
        title: '블랭크',
        description: '속지/ 스티커를 만들고, 판매하고 구매하며 아이템들로 노트 한 권을 만들어가는 다이어리 앱',
        roles: ['프론트엔드 개발자'],
        techstack: ['Angular', 'Typescript', 'Fabric.js', 'Html/CSS', 'Firebase', 'GCP'],
        outcome: '웹/앱 서비스 오픈하여 마케팅 진행',
        contribution: 50,
        contents: [
            '디자인 시안을 기반으로 전체 UI 구현',
            '기존 UI 라이브러리를 사용하지 않고, 프로젝트에 최적화된 자체 커스텀 UI 컴포넌트를 제작',
            'Firebase의 기능을 사용하여 DB, 인증/로그인, storage, hosting 등을 관리',
            'GCP를 이용하여 FireStore를 특정 기간마다 백업하는 함수 설정',
            'FireStore API 연동'
        ],
        period: '2022.12 ~ 2024.01',
        thumbnail: '',
        display: ['web', 'app'],
        links: [{
            type: 'notion',
            url: 'https://continuous-macrame-1a0.notion.site/1ac536612dce8065b8a9fb45f9a8d751',
        }]
    },
    {
        id: 5,
        type: 'work',
        title: '그림일기/ 그림달력 앱',
        description: '하루/ 한달을 그림으로 채워가는 시리즈 앱',
        roles: ['앱 기획', '디자인(소개 이미지, 로고, 버튼 등)', '프론트엔드 개발자'],
        techstack: ['Angular', 'Typescript', 'Fabric.js', 'Html/CSS', 'Firebase', 'GCP'],
        outcome: '서비스 오픈하여, 사용자에게 피드백 받으며 문제점을 개선',
        contribution: 50,
        contents: [
            'Blank 의 문제점을 파악하며, 좀 더 사용하기 간편한 시리즈 앱 서비스 기획',
            '서비스에 필요한 간단한 이미지 핸드 드로잉 및 앱 소개 이미지 Figma 작업',
            '기존 Blank의 코드를 이용하여 한 작업'
        ],
        period: '2024.01 ~ 2024.06',
        thumbnail: '',
        display: ['app'],
        links: [{
            type: 'notion',
            url: 'https://continuous-macrame-1a0.notion.site/150536612dce819c9312c7fd1c4a6d2c',
        }]
    },
    {
        id: 5,
        type: 'personal',
        title: 'Java 기반 그룹웨어 시스템',
        description: 'JSP와 MVC 패턴을 활용한 그룹웨어 개발 팀 프로젝트',
        roles: [''],
        techstack: ['Java', 'JSP', 'HTML/CSS'],
        outcome: '웹 애플리케이션의 기본 구조와 백엔드-프론트 흐름에 대한 이해를 확립',
        contribution: 100,
        contents: [
            'JSP, HTML, CSS 기반 UI 화면 설계 및 구현',
            '출/퇴근 버튼 누르면 월 달력에 근태 일정 기록되는 관리 기능 구현',
            '팀 개발 문서화 작업'
        ],
        period: '2021.01 ~ 2021.01',
        thumbnail: '',
        display: ['web'],
    },
    {
        id: 6,
        type: 'personal',
        title: 'springboot 게시판',
        description: 'Spring Boot 기반의 게시판 ',
        roles: [''],
        techstack: ['Java', 'Spring Boot', 'JSP/Thymeleef', 'aws'],
        outcome: '웹 애플리케이션의 기본 구조와 백엔드-프론트 흐름에 대한 이해를 확립',
        contribution: 100,
        contents: [
            '게시글 CRUD 기능 구현 ',
            '댓글 / 대댓글 등록/삭제 (게시글 작성자만 삭제 가능 - 비밀번호 확인 필요)',
            '게시글 목록 페이지네이션 (5개씩 보기)',
            'TailwindCSS 기반의 Thymeleaf + JavaScript UI 구성'
        ],
        period: '2025.04 ~ 2025.05',
        thumbnail: '',
        display: ['web'],
        links: [{
            type: 'github',
            url: 'https://github.com/Jisun-K/springboard',
        }]
    },
    {
        id: 7,
        type: 'personal',
        title: '나의 포트폴리오 사이트',
        description: 'Next.js를 기반으로 나의 포트폴리오 사이트 제작',
        roles: [''],
        techstack: ['Next.js', 'TypeScript', 'Tailwind.css', 'Vercel'],
        outcome: 'Next.js 개발과 배포 과정을 경험하며 최신 웹 워크플로우 이해',
        contribution: 100,
        contents: [
            '컴포넌트 기반 구조로 프로젝트, 경험, 기술 스택 화면 구성',
            'TailwindCSS + Shadcn UI로 반응형 UI 구현',
            'Framer Motion을 활용한 아코디언 애니메이션 적용',
            '모바일/웹 화면 대응 및 레이아웃 최적화',
            '프로젝트별 모달 구성: 상세 설명, 역할, 기술 스택, 외부 링크 표시',
            '데이터를 타입 정의로 관리하여 코드 안정성 및 재사용성 확보',
            ' Vercel CI/CD 환경 구축으로 실시간 자동 배포 가능',
        ],
        period: '2025.08 ~ 2025.08',
        thumbnail: '',
        display: ['web'],
        links: [{
            type: 'github',
            url: 'https://github.com/Jisun-K/myportfolio',
        }]
    },
]

