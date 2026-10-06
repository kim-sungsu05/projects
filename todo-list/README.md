# Todo List

간단한 Todo List 웹 애플리케이션을 개발하며  
프론트엔드와 백엔드의 연결 및 웹의 동작 원리를 학습하기 위한 프로젝트입니다.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose

<!-- ## 📌 주요 기능

- 할 일 추가
- 할 일 조회
- 할 일 수정
- 할 일 삭제 -->

## 📚 학습 내용

- 프론트엔드와 백엔드 연결
- HTTP 요청 및 응답
- Node.js 및 Express 서버 구성
- MongoDB 데이터 저장 및 조회
- Mongoose를 이용한 MongoDB 연동

## 🔧 Troubleshooting

### 1. npm 패키지 설치 오류

필요한 라이브러리를 설치하는 과정에서 패키지 이름을 잘못 입력하여(core -> cotes) <br>하위 라이브러리 의존성 오류가 발생했습니다.

```bash
npm i mongoose body-parser core dotenv
```

잘못 설치된 라이브러리를 초기화하기 위해 아래 명령어를 실행했으나,<br> /projects 경로에서 명령어를 실행하여 프로젝트의 의도한 디렉토리가 아닌 상위 디렉토리의 파일을 대상으로 작업하게 되었습니다.
```bash
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
```
이후 진행중이던 프로젝트를 GitHub에서 다시  git clone하여 정상적인 상태로 복구하고 문제를 해결했습니다.<br><br>이를 통해 **현재 작업 중인 경로를 수시로 확인하고, 파일 및 패키지 관련 명령어를 실행할 때 작업 디렉토리를 정확히 확인하는 습관의 중요성**을 체감했습니다.