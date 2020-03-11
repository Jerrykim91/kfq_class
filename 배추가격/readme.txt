1. 목적
 - 개발이 진행되는 중간에 디자이니 완료되어서, 
   디자인을 코드에 입히는 상황
 - index.ejs를 분할하여 구성하고, 기본 세트를 완성한다
 - 로그인 같은 단독 페이지는 별도 구성하고 코드를 입혀본다
 - 코드를 입혀서 구동이 확인되면 세션을 붙여본다 (목)
 - 기존 코드중 stock 관련 내용을 한번 추가해 본다
 - 디비 연결 처리 부분은 고도화 처리 => 풀링(pooling)
 
2. 설치


3. express 기반 socket.io을 이용한 실시간 서비스구성

- 본문 내용은 일단 비워둔다
- 채팅 관련 파일 구조
- web
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

# 철강

코드 확인 

-> 코드를 기반으로 파이썬 짜고 

​	 모델 확인이 필요 

-> 웹 연동 

 렌덤으로 사진을 선택하고 그 사진을 

탁 키자마자 라우터에서 받아서 psg를 불러와서 (모델불러오는부분만 )

cv_read 



-> 