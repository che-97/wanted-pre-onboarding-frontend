# 원티드 프리온보딩 프론트엔드 - 선발 과제

- create React App을 이용한 선발과제 입니다.
- 함수 컴포넌트를 이용하였습니다.
- 이용한 라이브러리
    - React Router

## 실행방법
```
    npm start
```
## 사용방법

1. 로그인 / 회원가입
    - '/signup' 경로에 회원가입 기능이 있습니다.
    - '/signin' 경로에 로그인 기능이 있습니다.
    - 회원가입 및 로그인 시 이메일과 비밀번호의 유효성 검사를 수행합니다.
        - 이메일 조건 : '@'포함
        - 비밀번호 조건 : 8자 이상
    - 회원가입이 정상적으로 완료되었을 시 로그인 화면으로 이동합니다.
    - 로그인이 정상적으로 완료되었을 시 '/todo' 경로로 이동합니다.
    - 로그인 여부에 따른 리다이렉트 처리가 있습니다.
        - 로그인 상태로 '/signup' 또는 'signin' 페이지에 접속한다면 '/todo' 경로로 이동합니다.
        - 로그인 하지 않은 상태로 '/todo' 경로에 접속한다면 '/signin' 경로로 이동합니다.

2. TODO LIST
    - '/todo' 경로에 Todo 리스트 목록을 볼 수 있습니다.
        - todo의 완료 여부는 checkbox를 통해 알 수 있습니다.
        - todo의 추가, 수정, 삭제를 할수 있습니다.

## API
- API 주소: https://pre-onboarding-selection-task.shop/

https://github.com/walking-sunset/selection-task/blob/master/README.md?plain=1

## 데모
<img src="https://user-images.githubusercontent.com/80516736/219060815-c9e8f8d4-7480-457b-8599-0c85d932efae.gif">
<img src="https://user-images.githubusercontent.com/80516736/219060793-16706df9-e16b-4576-850a-e5e04ccd5fd1.gif">