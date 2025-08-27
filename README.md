# 🧵 Portfolio Website - Next.js 기반

Next.js와 ShadcnUI를 기반으로 제작한 개인 포트폴리오 웹사이트입니다.  
프로젝트별 카드, 모달, 아코디언 UI 등 다양한 컴포넌트를 활용하여 반응형 웹을 구현하였습니다.

---

## 📌 주요 기능

- 프로젝트 카드 목록 표시 (업무 / 개인 구분)
- 프로젝트별 모달 상세보기 (담당 역할, 결과, 기술 스택, 외부 링크)
- Framer Motion을 활용한 아코디언 애니메이션 적용
- TailwindCSS + Shadcn UI(Radix UI 기반)로 반응형 UI 구현
- 모바일 / 웹 화면 대응 및 레이아웃 최적화
- TypeScript로 데이터 타입 정의 및 재사용성 확보

---

## ⚠️ 데이터 관련

> 💡 : 프로젝트 내용은 더미 데이터 기반이며, 실제 서버나 DB와 연동되지 않았습니다.

---

## 🚧 앞으로 추가하고 싶은 기능

- SmoothScrolling 기능 재구현
- 사용자 맞춤 테마 (Light / Dark mode)
- 서버와 연동한 실제 프로젝트 데이터 관리
- 이미지 로딩 시 alt 텍스트가 먼저 표시되는 현상 개선 (로딩 완료 후 이미지가 자연스럽게 표시되도록)
- 스킬 섹션에서 스킬 숙련도 UI 기능 추가

---

## 🔹 컴포넌트 구조

### 1. 페이지 구성 (`app/pages.tsx`)
- `Hero.tsx` : 상단 히어로 섹션, 소개 및 메인 배너
- `Projects.tsx` : 프로젝트 섹션, ProjectCard 및 ProjectModal 포함
- `Experience.tsx` : 경험/경력 섹션, ExperienceList 및 ListItem 포함
- `Skills.tsx` : 기술 스택 섹션, 태그 및 시각적 표시

### 2. Scene 단위 컴포넌트 (`components/scene/`)
- 각 페이지 컴포넌트(`Hero`, `Projects`, `Experience`, `Skills`)에서 재사용되는 구조
- UI 컴포넌트와 데이터 매핑 및 렌더링 담당

### 3. UI 컴포넌트 (`components/ui/`)
- `Tooltip` : 상세 설명이나 수치 표시 (Shadcn UI 기반)
- `Progress` : 기여도 시각화 (Shadcn UI 기반)
- `ProjectModal` : 프로젝트 상세 내용 모달
- `ProjectCard` : 프로젝트 개요, 기여도, 기술 스택 표시
- `ExperienceList` / `ListItem` : 경력 및 경험 아코디언 UI

> 💡 요약: `pages.tsx`가 전체 화면 구조를 배치하고, `scene` 컴포넌트가 UI 컴포넌트를 활용해 각 섹션의 실제 콘텐츠를 렌더링합니다.

---

## 📸 화면 미리보기

> ✨ 이미지 캡처 넣기 (프로젝트 카드 / 모달 / 반응형 UI)

