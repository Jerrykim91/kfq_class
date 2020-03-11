1. 목적
 - 개발이 진행되는 중간에 디자이니 완료되어서, 
   디자인을 코드에 입히는 상황
 - index.ejs를 분할하여 구성하고, 기본 세트를 완성한다
 - 로그인 같은 단독 페이지는 별도 구성하고 코드를 입혀본다
 - 코드를 입혀서 구동이 확인되면 세션을 붙여본다 (목)
 - 기존 코드중 stock 관련 내용을 한번 추가해 본다
 - 디비 연결 처리 부분은 고도화 처리 => 풀링(pooling)
 - 웹소켓 기반 실시간 채팅서버/화면 구성 (금) 
   wssocket:html5 표준에서 지원, socket.io:써드파트=>별도설치
 - 월:nodejs의 운영 및 배포주로 => aws기반 ubuntu18버전(리눅스) 셋업, 배포, 운영
   nodejs 고급주제 클러스터, 비동기의 동기화처리(3가지 케이스):콜백헬대비법 Vs async

2. 설치
- 디비, 세션관련 패키지 설치
$ npm i --save mysql express-session
- 디비 연결 세션을 미리 잡아두고(적정수로), 큐에 담아서, 재사용하는 방식
- 요청 -> 큐(풀)에서 세션 하나를 획득 -> 쿼리 수행 -> 큐에 반납
$ npm i --save generic-pool
 => 현재 작성 코드는 요청할때마다, 디비에 접속 -> 쿼리 -> 접속해제라는 불필요한 
    반복과정을 거치므로 => 응답 속도 저하, 서버 부하가 걸림, 디비도 부하가 걸림

3. express 기반 socket.io을 이용한 실시간 서비스구성
$ npm i --save socket.io
- socket.io중 client 파트 모듈은 카피해서 public 밑으로 이동시킨다(복사해서둔다)
- /node_modules/socket.io-client 카피
- /public/socket.io 라는 이름으로 붙인다
- 클라이언트 사이드에서 
- socket.io/dist/*.* 은 socket.io/*.*으로 위치이동 인식함
  /socket.io/socket.io.js를 external 방식으로 포함시킨다

- /chat 이라는 페이지를 구성하시오
  별도의 라우터 없다 
- 사이드 메뉴의 페이지 진입 이름은 실시간채팅 이다
- 본문 내용은 일단 비워둔다
- 채팅 관련 파일 구조
- cms
  └ public
    └ js
      └ chat.js      : 클라이언트쪽, 채팅 핵심 코드 위치
  └ views
    └ chat.ejs       : 채팅 화면 메인 골격
    └ sub_pages
      └ chat_sub.ejs : 채팅 레이아웃 UI 
      └ chat_box.ejs : 채팅 메시지 박스 UI
  └ routes
    └ chat
      └ index.js     : 서버쪽, 채팅서버 구성 코드 위치 
  
  실제코드는 public/js/chat.js  <->  routes/chat/index.js 가 통신
  화면은 views/sub_pages/chat_box.ejs 에서 조작

