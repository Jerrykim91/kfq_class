# 1
< < 모듈 > > 

- sys  	

  명령행으로 프로그램  인자값(Arguments Value)받음

  - 변수와 함수를 직접 제어 할수 있게 해주는 모듈 

  sys.argv 

  배열 ,   sys.argv[0]에는 기본적으로 python 실행파일의 경로가 담겨있음  

  - 배열의 길이는 기본적으로 1 

- os

  환경 변수나 디렉터리 ,파일등의 os 자원을 제어할수 있게 해주는 모델 

  - 환경 변수를 알고 싶을때 - os.environ
  - 위치 돌려받기 - os.getcwd
  - 위치 변경하기  - os.chdir
  - 명령어 호출하기  - os. system
  - 시스템 명령어 돌려받기 - os.popen
  - 디렉터리 생성 - os. mkdir
  - 디렉터리 삭제 - os. rmdir
    - 단 , 비어 있어야 가능함
  - 파일을 지운다  - os.unlink
  - src 파일을 dst로 바꿈 -  os.rename(src,dst)



---

# 2




   # 2

    ## 데이터분석 

#### 준비과정 

아나콘다 가상환경 구축

 \- Anaconda nevigator 가동

 \- Environments > Create > DataCrawling > python 3.6 > 생성

 \- cd ~/analysis/crawling/requirements.txt 생성

 \- 해당 프로젝트에서 사용하는 패키지를 기술 

   \---------------------------------------------

​    requests==2.18.4

​    beautifulsoup4==4.6.0

​    pandas==0.23.0

​    numpy==1.14.3

   \---------------------------------------------

 \- Environments > Create > DataCrawling > open the terminal

   $ cd 프로젝트위치(requirements.txt 위치)

   가상환경내에 설치된 패키지 목록 보기

   (DataCrawling)$ conda list or pip list :단, 약간의 목록이 차이는 존재한다 

   프로젝트에 필요한 패키지 설치

   (DataCrawling)$ pip install -r requirements.txt

   or

   (DataCrawling)$ conda install --file requirements.txt





 \- 현재상황

  1) 빅데이터

​     원유, 전통적인 데이터 관리법으로 다루기 힘든 데이터를 다 아우른다

  2) 데이터 과학 -> 새로운 가치(value)를 생성

​     정유공장 -> 대량의 데이터를 분석하여, 지식을 추출하는 방법까지 아우른다

  3) 구분

​     \> 빅데이터와 전통적인 데이터와 구분

​     \- 규모 : 얼마나 많은 데이터가 존재하고, 계속 생성되는지

​     \- 다양성 : 데이터의 종류가 얼마나 많은가

​     \- 속도 : 새로운 데이터가 얼마나 빠르게 생성되는가

​     \- 정확성 : 데이터가 얼마나 정확한가

  4) 통계학자, 데이터 과학자의 주된 차이점

​    \- 빅데이터를 다루는 능력, 하둡(스파크, 클러스터) 참고

​    \- 머신러닝(딥러닝) : AI>머신러닝>딥러닝

​    \- 컴퓨팅능력

​    \- 알고리즘 대한 구축 능력(새로 만드는가? 조합을 만들어내는가?)

  5) 활용  

​    \- 산업: 고객, 업무, 직원, 상품에 대한 "통찰"을 얻기위해 데이터 과학과 빅데이터를 활용

​    \- 기업: 교차판매, 상향 판매, 개인화등등 -> 구글 에드샌드 활용 -> 맞춤광고등 

​    \- 예:

​     a) 피플 애널리스트  => 텍스트 마이닝을 적용 => 직원사기점검, 직원간 네트워크 연구, 

​        => 머니볼( 메이저리그 특정밑 이야기, 데이터분석을 통해 발전시킨사례)

​     b) 금융기관

​        => 주식시장예측, 대출 위험 평가, 신규 고객유치, 퀀트들의 개발 알고리즘을 통한 컴퓨터 자동 거래 

​     c) 정부기관

​        => 공공 데이터를 공개,이들통한 데이터 통찰을 수행할수 잇는 기회 제공, 어플의 개발유도

​        => 수백만의 개인 감시용으로 사용:빅브라더 => 이메일, 지도, 검색, 게임등등 통해 수백만의 데이터를 수집하고 예측

​     d) 비정부기관 

​        => NGO ->자원봉사를 통해서 데이터를 구축및 부석

​     e) 대학

​        => 연구, 학습경험 개선, 코세라, 유닷시티, 에덱스, 

​        => 다양한 대학 기관들이 데이터를 제공, 코렐, 머신러닝때 따로 제공

   

 \- 데이터의 종류

  1) 구조적 데이터 

​    \- 데이터 모델에 의존적인 구조,

​    \- 레코드내에 고정된 필드가 존재

​    \- 데이터베이서의 테이블, 엑셀파일

​    \- 관련조회 => sql(구조화된 질의언어) => 비구조적 데이터에 비해 사이즈가 작다

​    \- 정제된 데이터

​    

  2) 비구조적 데이터

​      \- 데이터 모델에 적합하지 않는데이터, 잘 않맞는다

​      \- 이메일 (발신자, 제목, 본문 구조적이나, 본문의 내용은 비구조적이다, 정의할수 없다)

​    

  3) 자연어 데이터 

​    \- 언어학에 대한 지식을 필요로하고, 처리가 까다롭다

​    \- 이미 파악된 분야 : 개체인식, 주제 파악, 요약문 작성, 텍스트 완성, 정서(감정) 분석등

​    \- 문제점 : 한분야에 맞는 모델을 개발하면 다른 분야로 일반화를 할수 없다

​    \- 한계 ; 텍스트의 행간이라는 분야는 아직 풀어내지 못하는단계, 같은 단어도 감정이 다르게 

​             표출 되기때문에 어려운 분야

  

  4) 기계 생성 데이터

   \- 사람의 개입없이 자동으로 생성된 정보

​    \- 주체 : 컴퓨터, 프로세서, 어플리케이션, 장비, 센서

​    \- 해당 데이터는 주요한 데이터 공급원

​    \- 산업데이터의 시장 가치 예측은 2020년 기준 600조원 예측(위키본)

​    \- IDC 쪽에서는 사물간 연결에서 발생되는 데이터는 기존의 26배로 예측

​    

  5) 그래프 기반 데이터(네트워트 데이터) -> 소셜네트워크

  \- 수학 장의릐 그래프 이론을 기반으로 데이터를 설명 

  \- 그래프: 짝을 이루는 객체간의 관계를 모델링하는 수학적인 구조

​      -> 객체 간의 관계, 인접에 촛점을 맞춘 데이터이다. 

​       \- 구성 : 꼭지점(node), 변(edge), 속성(property)들을 가지고 데이터를 표현

​    \- 예시: 

​      소셜 네트워크를 표현하는 가장 적합, 어떤 사람의 영향력을 평가, 

​      사람들 사이의 최단 경로의 수치화

​      ex) 링크드인 : 누가 어떤 회사에 다니는가

​          트위터,  페이스북, 인스타그램 : 팔로워 

​      페이스북의 친구, 링크드인상의 친구 접점, 넷플릭스에서 영화 취양

​      => 새로운 데이터를 통찰 => 질의 => 데이터를 분석, 규명, 설명

​      그래픽X

​      

  6) 오디오, 비디오 데이터

​      \- 가장 까다로운 데이터이다. 

​      \- 2014년 MLB 생중계시 , 경기 분석을 하기 위해서 영상 분량을 경기단 7TB로 늘려서 처리 

​      고속 카메라가 공, 선수의 움직임을 다 포착하여 베이스 라인과 비교등을 실시간 계산 처리

​      \- 딥마인드 : 비디오 게임 플레이 알고리즘 개발 -> 구글 인수 => 알파고 



  7) 스트리밍 데이터

  \- 어떤 사건이 발생 -> 데이터가 발생 -> 시스템으로 흘러들어간다. 

  트위터의 실시간 트랜드 , 운동경기 생중계 데이터 , 공연 데이터 주식 시장 데이터 

  

  

  \- 연구 목표 설정

  1) 통계/ 시각적 분석

  => 이미 축적된 과거의 데이터를 기반으로 새로운정보 -> 지식-> 지혜까지 추출하는 과정

  \- 그래프데이터를 이용한 요리 추천 분석

  \- 부산시 cctv 현황 분석 

  \- 미래에 우리나라의 어느 지역이 인구가 몇년내에 소멸하여, 이에 다른 정책 변환 추진 (붙이기나름)

  \- 대선 , 총선 결과 분석

  \- 주식데이터 (시계열)분석을 통한 근거리 주식장 분석

  \- 스타트업 기업 통계 분석

   \- 음악 데이터를 이용한 년도별 인기 통계를 기반으로 향후 유행장르 예측

   \- 항공 운항데이터나 고객 데이터를 이용한 마케팅 분석

​     => 특가!!! => 분석을 통한 고객 유입

​     => 짐을 무료로붙이면서 싸게 => 진에어, 

​     

​    2) 머신러닝/지도학습 

​    => 학습, 예측

   \- 편지 봉투에 손글씨로 작성한 우편번호 숫자 판별

   \- 의료 영상 이미지 기반 종양/암등 질병 판단

   \- 의심스러운 신용카드 거래 감지 -> 이상 징후 감지/탐지

​    \- 텍스트 마이닝을 기반으로 게시글등을 텍스트 전체 맥락 분석

   \- 영화 평점, 리뷰등을 기반으로 넷플릭스 영화 추천 시스템의 기존 정확도 1% 향상

   \- 업리프트 모델링으로 마케팅의 효율성 증가

​     (역학통계의 다이렉트 마케팅기법=> 무작위 대조시험의 결과를 분석하여 신약이 효과가 있었는가?, 광고 메일을 어떤 유형의 고객에게 보내야 효과가 있는가?)

   \- 알파벳의 언어빈도의 차이를 기반으로 언어를 판독해 내는 기술

   \- 게임 접속 로그및 데이터를 제공하여 => 고객이탈을 예측하는 모델

   \- 연비 예측

   \- 콘크리트 혼합물의 압축 강도 예측

   \- 스마크카 배기량을 분석에 따른 운전자 연소득 예측

   

  3) 머신러닝/비지도학습

   => 답이 없다

   \- 블러그 글의 주제 구분해 내는 모델

   \- 고객 취향 유형에 맞춰서 그룹 분류

   \- 비정상적인 웹사이트 탐지 

   

  4) 딥러닝

   \- 자율 주행을위한 영상 분석

   \- RNN을 이용한 번역서비스

   \- RNN을 이용한 챗봇

   \- CNN 과 opencv를 이용한 영상 인식

   \- 자율 주행중인 스마트카의 위험 징후 판별

   \- 사운드, 음성분석

  

 \- 데이터과학 진행과정

 

  1) 연구목표 설정

   무엇을 조사? 그 분석 결과로 회사/공공에서는 어떡 이익을 도출한것인가?

   어떤 데이터와 자원이 필요한가? 일정? 업무분장? 

   가장 중요한것은 최종 결과물에 대한 검토!! <- 시작점

   이런 결과물은 의사결정에 재료가 될수도 , 업무의 한 파트가 될수도 있다

   

  2) 데이터 획득

   2-1. level 1 

​    \- 제공이 된다

​    \- 사내 데이터, 공공 데이터, 대학및 연구기관의 제공 데이터

​    \- 콘테스트 데이터(국내대회 해외대회(캐글kaggle)) 

​    \- => 상업성이 없고, 정제된 데이터다    

   2-2. level 2

​    \- open API 사용

​    \- http 통신을 통해서 응답 데이터를 통해 수집

​    \- ex) kakako ,naver, t, goggle 등등 포털이나 대기업 제공하는 open  API를 활용

​    \- 단, 쿼리 제한(일일 쿼리수)

​    \- 정제된 데이터다

​    \- request

+ request
  - 

   2-3. level 3

​    \- web scraping (웹 스크래핑)

​    \- 우리가 접근할수 잇는 모든 정보는 웹에서 접근이 가능하다라는 명제로 출발

​    \- 보안 데이터는 불가

​    \- 웹사이트를 긁어서 원하는 데이터를 추출하여 전처리 적제하는 방식

​    \- request + beautifulsoup(bs4)

   2-4. level 4

​    \- crawling(크롤링)

​    \- 정보의 출처가 웹사이트는 맞는데 사람의 손을 타야지만 데이터를 획득할수 있는 경우

​    \- ajax를 사용하거나, 디도스 방어가 들어갔거나,등등 사람손을 거친후에야만

​      접근가능한 사이트가 대상

​    \- selenium(셀레니움) + 자동화(qt5 or 스케쥴러를 활용)

​    

  3) 데이터 준비

   \- pandas(데이터처리, 분석), numpy(수학,과학용)등을 사용

   \- 데이터의 품질을 향상시킨다 여기에 주안점

   3-1 데이터 정제 : 결측치, 이상치 처리 

   3-2 데이터 통합 : 여러 군데서 가져온 데이터를 조합, 데이터구성

   3-3 데이터 변환 : 데이터를 모델(4-5단계)에서 적합하게 사용되도록 변경 처리

   

  4) 데이터 탐색

   \- pandas, matplotlib(시각화), seabon, d3.js

   \- 데이터의 깊이를 이해하는데 중점 -> 통찰

   \- 변수들의 상호 작용성, 시각적 분석법, 이상점 존재여부 체크 

   \- 통계적 분석, 시각적 분석, 단순 모델링등을 사용

   

  5) 데이터 모델링 및 모델 구축

   \- scikit-learn(머신러닝), tensorflow(딥러닝), keras(딥러닝)

   \- 이전단계로 부터 획득한 모델, 도메인 지식, 데이터에 대한 통찰등을 이용하여

​     연구 목표에 대한 답을 찾는 과정

​     머신러닝, 딥러닝  : 예측모델을 구성, 정확도 높이고, 평가 지수 고려등등 과정진행

​     => 목표치에 도달하지 못하면 다시 원점으로 돌아가서 다시 시작한다.(전먼 재검토)

   \- 필요하다면 통계학도 사용, 머신러닝, 딥러닝 등등 운영과학기법들을 총동원

   \- 머신러닝[ 학습, 정확도평가, 파이프라인, 하이퍼파라미터 튜닝, 성능평가]

   

  6) 시스템통합 혹은 레포트 발표

   \- 1단계에 정한 결론에 대한 마무리

   \- 레포트 형태, 보고서 형태, 시스템 형태, 솔루션의 형태등 다양한 모습으로 결론이 도출

​     시스템 형태 (웹기반:flask, DJango / GUI:gt5 / 백그라운드서비스:순수파이썬형태+OS종속적구조)

 \- 데이터 획득

 

 

 

5. 시각화 카테고리 

 \- 시간 시각화 

​     \>막대(바)차트, 누적막대, 점그래프(산포도), 선그래프 (연속데이터)

 \- 분포 시각화 

​     \> 파이차트(원), 도넛차트, 트리맵

 \- 관계 시각화 

​     \> 산점도 , 버블차트, 히스토그램 , 네트워크 그래프 (networkX)

 \- 비교 시각화

​    \> 히트맵 , 체프론 페이스 , 스타 차트 , 평행좌표계

 \- 공간 시각화

​    \> 지도, GIS

 





---

참조 

- [잔재미 코딩](https://www.fun-coding.org/crawl_basic2.html)

- [코딩도장](https://dojang.io/mod/page/view.php?id=2441)

  

---



## **모듈, 패키지, 라이브러리 정의**

- module모듈
  - 각종 변수, 함수, 클래스를 담고 있는 파일
  - 특정 기능을 .py 파일 단위로 작성한 것
- package 패키지
  - 여러 모듈을 묶은 것
  - 특정 기능과 관련된 여러 모듈을 묶은 것
- Library 라이브러리
  - 기본으로 설치된 모듈과 패키지, 내장 함수를 묶어서 파이썬 표준 라이브러리라고함



------



### 차이

- 크롤링

  - **데이터를 수집하고 분류하는 것**

  - 일종의 스크래핑 기술,조직적, 자동화된 방법 

- 파싱 

  - 내가 원하는 데이터를 **특정 패턴이나 순서로 추출하여 정보를 가공**하는 것 -> 일련의 문자열을 의미있는 토큰으로 분해하고 이들로 만들어진 파스 트리를 만드는 과정을 말한다. 

-  스크레핑 

  - **웹사이트의 데이터를 수집하는 모든 작업 **



----


    




1. 파이썬 기반의 데이터 과학 프로젝트
  - 데이터 분석및 수집 
  - 전처리
  - 적제
  - 분석 
  - 시각화
  - 머신러닝
  - 딥러닝 (AI 약한)

  2. git 를 이용한 공정 관리
 - github.com 가입및 로그인
 - git-scm.com 다운로드및 설치
    설치시 editor를 vs code로 적용 
 - github에 new > repogitory 생성
    생성시  readme, .gitignore (python)으로 체크및 생성
 - 로컬PC 프로젝트를 만들 위치에서
   public 이면
   $ git clone https://github.com/username/py_projects.git
   private 이면
   $ git clone https://username:password@github.com/username/py_projects.git
   간혹, 로그인 윈도우가 뜨면 거기서 다시 아이디 비번 넣어서 로그인하면됨
 - github.com 가입 및 로그인 
 - git-scm.com 다운로드 및 설치 
    설치시 editor를 vs code로 적용  
 - github에 new > repogitory 생성 
    생성시  readme, .gitignore (python)으로 체크및 생성 
 - 로컬PC 프로젝트를 만들 위치에서 
   > public 이면 
        $ git clone https://github.com/username/프로젝트이름.git 
   > private 이면 
        $ git clone https://username:password@github.com/username/프로젝트이름.git 
          간혹, 로그인 윈도우가 뜨면 거기서 다시 아이디 비번 넣어서 로그인하면됨

만약, 프로젝트를 먼저 작업하다가, git를 사용한 경우
   1) git clone을 다른 위치에서 수행
   2) clone를 통해 만들어진 위치에 먼저 만들어진 프로젝트 내용을 이동시킴
   3) vs code 에서 커밋(commit) and push 작업을 진행하면된다
   4) 단, 최초 수행시  git 오류가 나올수 있고, 이경우
     $ git config --global user.name "bongseop2822"
     $ git config --global user.email "bongseop2822@gmail.com"
     1회 수행해 주면(현재 프로젝트 위치에서) 처리된다
   5) 앞으로는 clone 한 프로젝트 위치가 실제 작업할 곳이 된다

         [윈도우상 서버 동기화 시킬때]  
         > 깃 주소를만들고  
         : username.github.io 
         >$ git clone username.github.io (주소를 끌어와야한다.) 
         >$ cd username.github.io 
         >$ git remote remove origin 
         >$ git remote add origin https://github.com/username/username.github.io.git 
         >$ git push -u origin master

 

 

 

** Git 용어 (수정 필요)

- Commit 
   수정 사항을 로컬에 저장하는것
   Commit을 쌓아두면 나중에 히스토리를 활용하고 보기에 좋다. 
   하지만 어디서 내 저장소를 Fork해 갈지 모르기 때문에 되도록 영어로 작성하면 좋다.
-Push 
   로컬에 저장한 수정 사항을 저장소로 보낸다. Commit과 Push는 한 번에 할 수 있다. 
-Pull 
   다른 사람이 저장소에 보낸 수정 사항을 내 로컬 파일에 적용한다. 협업할때 많이 사용 
-Branch 
   하나의 파일을 가지(Branch)를 치듯 나눠서 작업하는 방식을 ‘Branch를 나눠서 작업한다’ 고 한다. 예를 들어 아이콘만 다르고 나머지 요소는 같은 A, B, C UI 화면이 있다. 이때 디자인 툴에서는 A, B, C 세 개의 레이어를 추가해서 작업할 것이다. 개발에서는 A, B, C 3개의 Branch를 만들어서 아이콘만 다르게 작업할 것이다. 
   보통 Jekyll 블로그를 운영할 때는 아직 Master Branch에 Push하기5에는 부족하지만 수정 사항을 기록하고 싶은 글을 작성할 때 Branch를 나눠놓는다. 
-Merge 
   Branch를 나눌 수 있다면 합치는 과정도 필요하다. 이를 Merge라고 한다. Merge하는 과정에서 충돌이 있을 수 있다. 이런 충돌을 Conflict라고 한다. 에버노트를 쓸 때 발생하는 충돌과 비슷하다. 같은 노트인데 두 곳에서 수정했을 때, 어떤 노트를 유지할지 노트 내용을 보면서 하나씩 결정하는 게 Merge라고 보면 된다. 협업을 많이 하지 않는 이상 Conflict는 거의 겪을 일이 없다. 
-Stash 
   수정 사항들을 잠시 다른 곳에 보관하는 기능이다. 다양한 용도가 있겠지만 나 같은 경우 Master가 아닌 Branch에서 작업하다가 Master에만 푸시할 내용이 생길 때 주로 사용했다.

 