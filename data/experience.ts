import { TExperience } from "@/types/experience";

export const experienceList: TExperience[] = [
    {
        date: '2020.09 ~ 2021.02',
        name: '[2020과정평가형]정보처리산업기사(파이썬, C언어, 자바, Java, 앱프로그래밍)',
        description: ['국비지원 과정 이수 (데이터베이스, 운영체제 등 CS 기초 포함)'],
        contents: [
            'Java, JSP, MVC 모델을 이용한 그룹웨어 개발 팀프로젝트 기획',
            'HTML, CSS 기반 UI 화면 설계 및 구현',
            '근태 관리 캘린더 기능 구현 (일정 등록/ 근무시간 조회)'
        ],
        type: 'study'
    },
    {
        date: '2022.08 ~ 2024.06',
        name: '주식회사 크레페스튜디오',
        description: ['프론트엔드 개발자 (Angular, TypeScript)', '웹 홈페이지 제작 외주'],
        contents: [
            'Angular, TypeScript 기반의 SPA 웹 프론트엔드 개발 및 유지 보수',
            'Firebase Authentication(회원가입/로그인), Firestore(DB), Hosting을 활용한 서비스 구축',
            '레거시 코드 개선 및 리팩토링(상태관리 store 도메인별 분리, 중복 코드 제거 및 모듈화 등)',
            'SwiftUI 기반 iOS 앱 스플래시 화면 구현',
            '앱 기획 및 UI/UX 디자인 일부 참여',
            '외부 클라이언트 홈페이지 제작 외주 프로젝트 수행'
        ],
        type: 'work'
    },
    {
        date: '2022.04 ~ 2022.08',
        name: '주식회사 와이엠씨',
        description: ['모바일 앱 UI(정부 지원 과제 참여)'],
        contents: [
            'React Native 기반 모바일 앱 내 네비게이션 바(NavBar) 기능 구현',
            '메인 지도(Map) 화면 UI 레이아웃 구성 및 반응형 처리',
        ],
        type: 'work'
    },
];