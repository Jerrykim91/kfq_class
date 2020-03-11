import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// semantic-ui 사용
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 올드 브라우저를 위한 promise 지원
import Promise from 'promise-polyfill'
if( !window.Promise ){
  window.Promise = Promise()
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
- react 통신모듈 => ajax
 - superagent, jQuery, fetch(빌트인), request, axios, ... 
 - axios : Promise기반 -> async ~ await 혼용 처리
   npm install axios --save
- react ui 모듈
 - semantic-ui-react : react 구성
 - semantic-ui-css  : jquery 구성
 - semantic-ui-sass : 구조적 차이
   npm install semantic-ui-react semantic-ui-css --save
   https://react.semantic-ui.com
- 올드 브라우저를 위한 promise 지원, 여러 통신시 모아주는 역활
 - Promise Polyfill
 - npm install --save promise-polyfill
- 외부 도메인으로 배포 확인, 도메인 지원, 임시 도메인 제공
 - surge
 - npm install --save surge
- 패턴 (페이스북 추천)
 - 컴포넌트 생성법 : 
   함수   => 함수인자 props 전달받고, JSX 구성 <= state없다, 이벥트 없다. props만 받는다
             JSX를 구성한다. stateless component(우둔한) => css 적용하여 UI적인 표현 담당, 
             라이프사이클도 사용못함 (클레스도 이렇게 구성할수 있음)
   클레스 => props, state, 이벤트, 라이프사이클 있음 => smart component(똑똑한, 스마트한)
            css적인 부분은 배제 
- 더미 통신 API
 - 서버구성이 않되있어서 임시로 통신하면 데이터를 던져주는 api 사이트를 활용
 - http://jsonplaceholder.typicode.com/
 - 사진글 http://jsonplaceholder.typicode.com/posts/2 or photos
   {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   }
 - 사진글의 댓글 리스트 http://jsonplaceholder.typicode.com/posts/2/comments or photos
   [
    {
        "postId": 2,
        "id": 6,
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    }, ... ]
 - 애니메이션
  - http://anicollection.github.io
 */