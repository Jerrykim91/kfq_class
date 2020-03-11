1. 개념
- Nodejs는 Chrom V8 javaScrit runtime engine이 빌트온된 서비사이드 플랫폼
- 비동기, 이벤트 기반으로 어플리케이션을 제작할수 있게 설계되었다
- 영향을 받은 언어/플랫폼 : Ruby Event Machine, Python의 Twited 시스템과 
  설계상 유사 => 노드를 배운후 파이썬 웹을 해보면 쉽게 할수 있다
- 기타 특징사항은 나중에 추가

2. 개발환경구축
- nodejs.org 다운로드 후 설치

3. 패키지 제공
- node에서 사용되는 수많은 패키지들을 검색, 제공하는 사이트 
- npmjs.com (가입) : 배포
- github.com (가입) : 배포, 공정관리
- aws (가입) : 리눅스상에 실제 서비스

4. 기본 웹서비스 구축
- 노드 자체로도 웹 서비스를 구성할수 있다 => 번잡하다, 만들게 많다
- 써드 파트 패키지로 웹을 빠르고 쉽게, 파워풀하게 구성할수 있는 제품이 등장
- expressjs 대표 패키지
- npm이 패키지를 설치하는 명령어이다 <-> pip, conda(파이썬, 아나콘다)
 $ npm install -g express
 $ npm install -g express-generator
- express 명령 옵션 확인
 $ express -h
- 프로젝트 생성 : ejs엔진으로 html을 랜더링하는 템플릿 엔진을 기본으로사용한다
 $ express -e hello
- 프로젝트 폴더로 이동
 $ cd hello
- 이 프로젝트가 필요한 패키지를 다운받아라 -> node_modules가 생성
 -> 무슨 근거로 어떤 패키지를 다운받는가? -> package.json
 $ npm install
 서버 가동
 $ node ./bin/www
 or
 $ npm start
 브라우저 가동 : http://localhost:3000 접속


5. 프로젝트 구조 이해
 - 엔트리 포인트(진입로, 시작점) 분석
 - 각 폴더/파일의 기능 이해
 - 구조 ( └ )
   hello
    └ bin
      └ www             : 2. 시작점, 엔트리포인트
    └ node_modules      : 현 프로젝트가 구동되기 위해 필요한 패키지 설치된곳
      └ *
    └ public            : 정적 데이터가 위치하는곳, js(클라이언트기반), css, image,.. 
      └ *
    └ routes            : 3. 요청을 받아서 응답을 처리하는 메인 코드,디비엑세스,렌더링
      └ db
        └ index.js      : 데이터베이스와 연동하여 쿼리 수행하고 결과를 돌려주는 함수 모듈
      └ index.js        : /~ 로 시작하는 url이 정의된 함수들이 모여있음
      └ index_0701.js   : 최초 index.js 백업본(주석이 많음)
      └ users.js        : /login/~로 시작하는 url이 정의된 함수들이 모여있음
    └ views             : html이 위치하는곳(html->ejs 변경), 렌더링 템플릿 엔진이 참조하는곳
      └ error.ejs       : 에러 ejs
      └ index.ejs       : 홈페이지(주식목록, 검색) 페이지
      └ alert.ejs       : 경고창 페이지
      └ info.ejs        : 종목코드 중심으로 상세 정보 보기 페이지
      └ login.ejs       : 로그인 페이지
    └ app.js            : 1. 요청을 정의, 웹서비스에 필요한 큰 틀의 작업 세팅
    └ package.json      : 본 프로젝트에 사용하는 패키지가 기술되어 있음
  

6. 프로젝트 개발시 필요 모듈 설치
- nodemon
 -> 소스를 수정하면 -> 잠시후 -> 자동 서버 재가동 
 $ npm install -g nodemon
 - 가동(코드 자동 저장은 자제),  상용서비스 구동시에는 배제(컨셉의 차이)
 $ nodemon ./bin/www














[참고사항]
- txt포멧 (*.txt, *.xml, *.json,...) => 이기종 장비(PC,c/s) 주고받는 형식
  => 데이터를 주고 받는 포멧으로 주로 사용, 환경구성용 사용(xml, json)