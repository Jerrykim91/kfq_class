[ 리액트로 구성한 화면중 복합 컴포넌트 사용 ]

1. 특징 
 - 순수 컴포넌트로 복합구조 구성
 - 컴포넌트의 성격을 규정하여 컨터이너형, 화면구성용등 분류
 - 컴포넌트가 데이터를 통신하는 방식 이해
   => 함수형    : 단순 그리기 용도
   => class형   : smart한 컴포넌트라 하여 컴포넌트의 전기능 다 사용
 - 세트 
   => 컴포넌트  : xxx.js, xxx.css로 세트 구성

2. 구조
 onepage        : 프로젝트 루트
 ┗ node_modules : 모듈
 ┗ public
   ┗ index.html : 기본 한개의 페이지 (랜더링 대상 div 존재)
 ┗ src
   ┗ index.js   : 컴포넌트 랜더링 시작점
   ┗ App.js     : 랜더링 시작및 연결지점 및 전체 구조
                  ------------------------------------------
                    <div>
                        {/* 헤더 */}
                        <Header title='My 포스트'/>
                        {/* 본문 */}
                        <PostingContainer />
                    </div>
                  ------------------------------------------
   ┗ components : 개별 기능별 컴포넌트
    ┗ alert     : 
     ┗ Alert.js : 단수 그리기형 컴포넌트. 팝업 처리
    ┗ comment   : 
     ┗ Comment.js  : 댓글 하나 표현
    ┗ commentList  : 
     ┗ CommentList.js : 댓글 리스트 표현
                  ------------------------------------------
                    <ul className='CommentList'>
                        {/* 댓글 리스트 표현하는 틀 */ }
                        { comLists }
                    </ul>
                  ------------------------------------------
    ┗ header    : 페이지 상부 바
                  ------------------------------------------
                    <div className='Header'>
                        {title}
                    </div>
                  ------------------------------------------
    ┗ pageNavigater : 
     ┗ PageNavigater.js : 이전글, 다음글, 현재글번호등 본문 하위 처리
                  ------------------------------------------
                    <div className='PageNavigater'>
                    {/* 이전글 버튼 */}
                    <Button color='orange' 
                            content='이전글'
                            icon='left arrow'
                            labelPosition='left'
                            onClick={ ()=>{
                                onClick(-1)
                            } }
                            />
                    {/* 현재글 표시 */}
                    <div className='pn_title'>
                        현재글 / {page}
                    </div>
                    {/* 다음글 버튼 */} 
                    <Button color='orange' 
                            content='다음글'
                            icon='right arrow'
                            labelPosition='right' 
                            className='pn_next_btn'
                            onClick={ ()=>{
                                onClick(1)
                            } }
                    />
                    </div>
                  ------------------------------------------ 
    ┗ post      : 
     ┗ Post.js  : 글 하나에 대한 post 형태, 문서가 빠지고/들어오는 애니메이션 설정
                  ------------------------------------------
                    <div className={`Post animated ${ani_value}`}>
                        <h2>{title}</h2>
                        <span>
                        {body}
                        </span>
                        {/*댓글리스트*/}
                        <CommentList data={comments}/>
                    </div> 
                  ------------------------------------------
    ┗ postingUI : 
     ┗ PostingUI.js : 하부글 기본 골격
                  ------------------------------------------
                    <div className='PostingUI'>
                        {children}
                    </div>
                  ------------------------------------------
                  children은 <PostingUI> 내부에 있는 컴포넌트들이다
   ┗ containers : 컴포넌트를 감싸는 용도
    ┗ index.js  : App.js에서 PostingContainer를 사용하기 위해 경로를 사용해야 하는데
                  너무 길어서 depth를 줄이는 중간 파일
                  import { PostingContainer } from "./containers/postingContainer/PostingContainer";
                  => 위의 표현이 아래 표현으로 간략해진다
                  import { PostingContainer } from "./containers";
    ┗ PostingContainer      :
      ┗ PostingContainer.js : 네트워크로 가져와서 화면에 뿌리는 본문 글 화면 UI
                  ------------------------------------------
                    <PostingUI sub='hi'>
                        {/*원문글*/}
                        <Post title={this.state.cur_post.title} 
                            body={this.state.cur_post.body} 
                            comments={this.state.cur_comments}
                            post_id={this.state.post_id}/>
                        {/* 페이지이동 처리(글 이동처리) */}
                        <PageNavigater page={this.state.post_id} onClick={this.movePage}/>
                        {/* 페이지 마지막이나 처음일때 다음 글 이전글 요청하면 발동 */}
                        <Alert msg='더이상 글이 없습니다.' visiable={this.state.alertVisiable}/>
                    </PostingUI>
                  ------------------------------------------
   ┗ net        : 특수 기능 모듈
    ┗ Net.js    : 통신 모듈
                  ------------------------------------------
                  axios 모듈 사용 (ajax용 다른 제품)
                  - 글 하나 가져오기
                  - 글 하나에 대한 댓글 여러개 가져오기
                  ------------------------------------------

   
