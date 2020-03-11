1. SPA 차이점
- 기존웹 Vs SPA(Single Page Application)
- SPA는 하나의 html에서 계속 렌더링을 통해서 화면을 전환하는 방식
 1) Angular JS : 구글 -> Type Script -> 트렌스컴파일 -> JavaScript
 2) React JS   : 페이스북 -> modern JavaScript 기준 개발
                 Javascript가 html을 감싸는 구조
                 React JS -> 앱으로 발전 -> React-native 
 3) Vue        : 개발자 커뮤니티, js 동일
 Angular, React가 시장을 양분하고있고, Vue가 넓혀가는 구조
- 웹 서비스를 개발하는데 있어서, 서버 개발자의 화면처리, 라우트, 가 
 가져온다 => 서버개발자는 restful 기반 API 서버(미들웨어서버)만 개발하는 끝
 클라이언트와 서버가 ajax를 기반으로 통신만 하면 끝

2. SPA의 구조가 하이브리드 앱 파트하고 매커니즘이 동일
- 앱 -> native app => android(java or kotlin), ios(objective-c or swift)
     -> hybrid app => one source multi use
            1세대 : 2011~2014 => html, css, js로 앱을 짜고 서버와 ajax통신 
                    phonegap
            2세대 : codrova, ionic, react-native, ... => 뱅킹, 항공,포털
                    2015~ 
                    react-native => js로 작성한것을 => 네이티브코드로 변환
            3세대 : flutter (구글) 
                    2018~ (Dart 개발언어) 
        구글 => Go, Dart
- 파이썬(def) >> 스칼라(하둡,스파크), 코틀린(fun), 스위프트(func), js(function) 다 비스므리


3. 개발환경
- nodejs 설치 (8.x이상)
- IDE (알아서, ~ vs code 사용)

4. step + 모던 스크립트가 기본 작성하는 룰
- html 위에서 react 가동 (테스트, 학습위주, 개념이해)
- react위에서 html 렌더링 (실제), 컴포넌트 생성, 통신, 라우트, 라이프사이클
- 고급주제:플럭스 -> 리덕스