# 현재 문제점

# TODO

회원가입 axios 연결해서 데이터 만드는 전송하는 부분 및 그 후 라우팅 처리
front단 테스트 작성

# 프로젝트 주제

여러가지 기술을 실제로 사용해 보면서 구현 능력 및 프로젝트를 이끌어 나가는 능력을 시험해보기 위한 프로젝트 입니다.

# 사용기술

주 개발 언어: typescript  
front: react, antd
back: nestjs

# 개발 사이클 정리

1. 설계
2. 개발
3. 동작확인
4. 테스트 자동화
5. 커밋

# antd 선정 이유

css와 부차적인 DOM 조작을 위한 시간을 줄이고 싶음.  
예상되는 문제점: antd의 규모가 커서 초기 DOM 로딩이 느려질 가능성이 있음.

# 현재 구현중인 기능

## 회원기능

1. 회원가입 (아이디, 비밀번호, 이름) (page: /signup)
2. 회원탈퇴 (page: /:userId 버튼으로 동작 Auth:본인만)
3. 회원정보 수정(page: /:userId 버튼으로 동작 Auth:본인만)
4. 회원정보 조회(page: /:userId Auth:본인만)
5. 로그인/로그아웃 기능(현재 강의보면서 구현한 코드가 JWT이므로 JWT로 인증 기능을 구현하기로 했음)

## 구현순서

1. 회원가입
2. 로그인/로그아웃
3. 회원정보 조회
4. 회원정보 수정
5. 회원정보 삭제

백엔드는 이미 구현이 되어 있으므로 프론트만 구현을 시작하면 될 것 같음.

# 이번 프로젝트에서 가장 신경 쓰고 싶은 점

구현 전에 구현 계획을 반드시 세울 것.  
테스트 코드를 반드시 작성할 것.
문서화를 반드시 할 것.
작성 하는 코드에 반드시 이유가 있어야 함.

# 어려웠던 점 정리

antd의 form 데이터에 어떻게 접근해야 고민하고 있었는데 useForm을 통해서 Form에 prop을 넘겨주면 쉽게 form 데이터를 조작할 수 있음.ㄴ

```js
const [form] = Form.useForm();
```
