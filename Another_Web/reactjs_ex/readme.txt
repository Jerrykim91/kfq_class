1. 개발환경
 - 실제 react 개발을 위한 환경 구성
 - nodejs 8.x 이상 설치
  [보충사항:https://facebook.github.io/create-react-app/docs/getting-started]
  $ npm uninstall -g create-react-app
  $ npm cache clean -f
  $ npm install -g npm
  $ npm -v
  $ npm i -g create-react-app
  $ create-react-app test
 - create-react-app 이라는 제너레이터 제품 사용
  $ npm i -g create-react-app
 - 프로젝트 생성
  $ create-react-app test
 - 구동
  $ cd hello 
  $ npm install => 자동으로 수행된다 (생략)
  $ npm start   =>  개발 가능
 ==========================================
 - 상용화
 - 빌드
  $ npm run build
  build 폴더가 생기고 그 내부에 최종 파일 생성

  빌드된 내용을 시뮬레이션
  $ npm install -g serve
  $ serve -s build
 
2. open api 사용
- REST API 키
  e34bb81e2e35e85ca6efee410badd670
- JavaScript 키
  ca500ced0c01017a323f3f69a1cfa6f8
- kako API > 플랫폼 API > 로컬 > 키워드로 장소 검색 활용
  url https://dapi.kakao.com/v2/local/search/keyword.json
  method get
  파라미터
  y=35.156787
  x=129.0587039
  radius=10000
  query=스타벅스
  헤더
  Authorization: KakaoAK e34bb81e2e35e85ca6efee410badd670

3. 구조
 프로젝트
 └ build
 └ node_modules
 └ public
   └ index.html  : SAP상 기본 html 페이지
 └ src
   └ App.js      : 기본으로 제공하는 커스텀 컴포넌트
   └ App.css     : App.js에서 사용하는 css
   └ index.css   : index.js에서 사용하는  css
   └ index.js    : 기본적으로 컴포넌트를 화면과 연결
                   하여 랜더링을 담당하는 메인 코드
 └ package.json
 - 프로젝트 코드 진입점
  └ src > index.js 확인

4. react-native => 앱을 개발
 - https://expo.io/

5. 남은내용
 - 라이프사이클 (화면이 로드되면서, 보일때까지 흐름, 이벤트에따른 흐름)
 - 네트워크 ajax : kakao 검색, 환율 계산기, ...
 - 순수 html 화면과 react 화면간의 통신
 - 라우트을 통한 여러개 페이지 구성및 이동 => 여러개의 페이지, URL
   $ create-react-app multipage
   $ cd multipage
   $ npm i --save react-router-dom
   > BrowserRouter 컴포넌트를 이용하여 전체를 감싼다
   > Route 한개의 화면(url 즉, 주소를 가지고 있다)
   > JSX
   <BrowserRouter>
    <div>
      <Route path='/' component={Home} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/main' component={Main} />
    </div>
   </BrowserRouter>


 - 다수의 컴포넌트를 쌓아서 화면을 만드는 방식
 - 컴포넌트가 여러개 쌓였을 경우 상호간 통신, 데이터 교류하는 방식
   -> 플러스, 리덕스