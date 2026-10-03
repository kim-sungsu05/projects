// 처음 실행하기 전에 npm init
// 그리고 라이브러리 쓸거면 npm install express <- pip 같은거
// npm install -g nodemon <- 코드 변경이 발생하면 자동으로 재실행해주는 거 -g는 모든 프로젝트에서 사용하게 해주세요라는 의미

// node.js로 서버를 만들기 위한 기본 문법 (express 라이브러리)
const express = require('express');  // 설치한 express 라이브러리를 첨부
const app = express();  // 라이브러리의 객체 생성

// listen(서버를 띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function(){  
    console.log('listening on 8080')
});

// /는 홈
app.get('/', function(req, res){
    // 홈에 접속했을때 /index.html 파일을 보여주세요
    res.sendFile(__dirname + '/index.html');
});