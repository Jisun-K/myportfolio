export const projectList: TProject[] = [
    {
        type: 'work',
        title: '[정부과제] 전동 킥보드 대여 앱',
        description: '전동 킥보드를 대여해주는 모바일 앱',
        role: '프론트엔드 개발자',
        techstack: ['React Native', 'TypeScript', 'Styled-component'],
        outcome: '',
        contribution: 0.2,
        contents: ['React Native를 기반 앱 내 Map 연동/ UI 레이아웃 구성', 'NavBar 기능 구현'],
        period: '',
        image: '',
        link: '',
    },
    {
        type: 'work',
        title: '키워드 마케팅 플랫폼',
        description: '온라인 쇼핑몰을 모아 키워드 기반으로 랭킹 및 마케팅 지원하는 플랫폼',
        role: '프론트엔드 개발자',
        techstack: ['Angular', 'Typescript', 'Node', 'Postman', 'Html/CSS'],
        outcome: '서비스 오픈은 하지 않았으나, 프론트엔드 구현 완료 및 내부 테스트 진행',
        contribution: 0.7,
        contents: [
            '디자인 시안을 HTML/CSS 기반으로 구현하고 레이아웃 퍼블리싱',
            'UI 요소를 재사용 가능한 컴포넌트 단위로 분리하여 유지보수성과 확장성 강화',
            'JSON 기반 가데이터를 설계 및 클라이언트 제공'
        ],
        period: '',
        image: '',
        link: ''
    },
    {
        type: 'work',
        title: '롤링',
        description: '굿노트에서 사용할 수 있는 속지/스티커 등을 판매하고, 구매할 수 있는 플랫폼',
        role: '프론트엔드 개발자',
        techstack: ['Angular', 'Typescript', 'Node', 'Html/CSS'],
        outcome: '서비스 오픈하였으나 현재는 운영하지 않고 있습니다',
        contribution: 0.8,
        contents: [
            '디자인 시안을 전체 반응형 UI 구현',
            'UI 요소를 재사용 가능한 컴포넌트 단위로 분리',
            'param을 전달하여 해당 키워드에 맞는 데이터를 호출하는 검색 기능 구현',
            'JSON 기반 가데이터를 설계',
        ],
        image: '',
        link: ''
    },
    {
        type: 'work',
        title: '블랭크',
        description: '굿노트에서 사용할 수 있는 속지/스티커 등을 판매하고, 구매할 수 있는 플랫폼',
        role: '프론트엔드 개발자',
        techstack: ['Angular', 'Typescript', 'Fabric.js', 'Html/CSS', 'Firebase', 'GCP'],
        outcome: '웹/앱 서비스 오픈하여 마케팅 진행',
        contents: [
            '디자인 시안을 기반으로 전체 UI 구현',
            '기존 UI 라이브러리를 사용하지 않고, 프로젝트에 최적화된 자체 커스텀 UI 컴포넌트를 제작',
            'Firebase의 기능을 사용하여 DB, 인증/로그인, storage, hosting 등을 관리',
            'GCP를 이용하여 FireStore를 특정 기간마다 백업하는 함수 설정',
            'FireStore API 연동'
        ],
        contribution: 0.5,
        image: '',
        link: ''
    },
    {
        type: 'work',
        title: '그림일기/ 그림달력 앱',
        description: '굿노트에서 사용할 수 있는 속지/스티커 등을 판매하고, 구매할 수 있는 플랫폼',
        role: '앱 기획, 디자인(소개 이미지, 로고, 버튼 등), 프론트엔드 개발자',
        techstack: ['Angular', 'Typescript', 'Fabric.js', 'Html/CSS', 'Firebase', 'GCP'],
        outcome: '서비스 오픈하여, 사용자에게 피드백 받으며 문제점을 개선',
        contents: [
            'Blank 의 문제점을 파악하며, 좀 더 사용하기 간편한 시리즈 앱 서비스 기획',
            '서비스에 필요한 간단한 이미지 핸드 드로잉 및 앱 소개 이미지 Figma 작업',
            '기존 Blank의 코드를 이용하여 한 작업'
        ],
        contribution: 0.5,
        image: '',
        link: ''
    }
]