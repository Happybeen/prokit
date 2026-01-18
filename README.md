1주차 미션 안내 

1️⃣ 개발 환경을 세팅해 주세요
Vite 기반의 React + TypeScript 개발 환경을 구성하고,
ESLint와 Prettier를 적용해 코드 품질과 스타일을 일관되게 유지할 수 있도록 세팅했습니다.

개발 환경
- Vite
- React
- TypeScript
- ESLint
- Prettier

2️⃣ 디렉토리 및 라우팅 구조를 잡아주세요

src/
 ├─ assets/                # 이미지, 아이콘
 ├─ components/
 │   ├─ common/            # 전역 공통 UI
 │   │   ├─ Button.tsx
 │   │   ├─ Input.tsx
 │   │   └─ ErrorText.tsx
 │   └─ auth/              # 인증 관련 컴포넌트
 │       └─ SignupForm.tsx
 ├─ pages/                 # URL 단위 페이지
 │   ├─ Signup.tsx
 │   └─ Login.tsx
 ├─ router/                # 라우팅 설정
 │   └─ index.tsx
 ├─ hooks/                 # 커스텀 훅
 ├─ utils/                 # 유틸 함수
 ├─ api/                   # API 로직
 ├─ styles/                # 전역 스타일
 ├─ App.tsx
 └─ main.tsx