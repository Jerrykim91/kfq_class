[ node + react ]
1. node 프로젝트 생성
 $ express -e nodeApp
 $ cd nodeApp
 $ npm install
 $ package.json > "start": "nodemon ./bin/www" 수정
 $ npm start
2. react 프로젝트 생성
 $ create-react-app reactapp
 $ cd reactapp
 $ npm start
  -> 포트가 충돌나셔 아마 동의하면 3001번으로 올라옴
3. 개발
 - 임의적으로 react에서 html과 통신 부분만 구현하겟다
  -> reactapp>src>index.js 수정 
  ReactDOM.render(<App ref={ (reactObj)=>{ window.reactObj=reactObj } }/>, document.getElementById('root'));
  -> reactapp>src>App.js 추가
  htmlSendReact ( msg ) {
    console.log( msg )
    // html 호출
    window.callHtmlFunc( 're>'+msg )
  }
  -> reactapp>public>index.html 축사
  <script>
    // 화면이 보이면 호출
    window.onload = ()=>{
      window.reactObj.htmlSendReact('html에서 리액트로 데이터 보냄')
    }
    function callHtmlFunc(msg) {
      console.log('여기는 html', msg)
    }
  </script>

4. 빌드
 $ npm run build
 - reactapp > build 신규 생성됨

5. 노드에 리액트 합치기
 5-1. reactapp > build > static 폴더를 nodeApp>public 밑으로 복사해서 두기
 5-2. reactapp > build > index.html의 내용중 react에 사용한 코드만 
      대상 nodeApp>views>xxx.ejs에 포함시키기
 5-3. 불필요한 파일을 제거 nodeApp>public>static>xxx.map 



