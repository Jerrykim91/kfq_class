[[ 자연어 처리 ]]
1. 개요
 - 한글 자연어 처리를 파이썬으로 수행하는 과정
 - 모듈명:코엘앤파이
 - KoNLPy
 1) https://konlpy-ko.readthedocs.io/ko/v0.4.3/
 2) 파이썬의 간결하고, 우아한 강력한 스트링 연산 기능을 최대한 살렸다
 3) 여러 형태소 분석기들이 포함 : 꼬꼬마, 한나눔, MeCab-Ko등등...
 4) 자연어 처리에 필요한 각종 사전, 말뭉치, 도구, 튜토리얼 제공
 5) 쉽다

2. 설치과정 (anaconda의 base 환경에서 설치하겟다)
 - 반드시 순서대로 할것
 - 코엘앤파이 설치
  $ pip install konlpy
 - jdk 설치
  $ 환경변수 추가
  > 윈도우 : JAVA_HOME=jdk경로설정
    내 PC > 우클릭 > 속성 > 고급 시스템설정 > 환경변수 > 
    User에 대한사용자변수 새로만들기 > 
    -> 변수이름: JAVA_HOME
    -> 변수값  : C:\Program Files\Java\jre1.8.0_211
    
  > 맥: export JAVA_HOME=$(/usr/libexec/java_home)

 - python 으로 자바 라이브러리를 사용하는 모듈 설치
  > 자신이 Java라고 생각하고 Java 라이브러리를 사용할수 있는 모듈
  > $ conda install -c conda-forge jpype1  
  > 실패사유
    운영쳬계의버전, JDK 버전, 주피터경로상에 한글이 있거나,  PC이름이 한글이거나 하면 간혹 않될수있다
  
 - python용 라이브러리  nltk  설치
  $ base 가상환경은 nltk가 설치되어 있다 
  $ python
  > import nltk
  > nltk.download()
    설치중 연결이 끊기면 다시 시도, 프로레스가 잡고 잇어서 않된다면 콘솔까지 닫고 다시시도
    완료후
  > ctrl + z
  
 - Raw text용 워드크라우드, 젠심
  $ pip install wordcloud gensim
  
 
3. 코엘엔파이 형태소 분석기  
 - Hannanum
  > 1999년부터 KAIST 시맨틱웹 연구 센터(SWRC)에서 개발(자바)
 - Kkma
  > SNU의 지능형 데이터 시스템(IDS)연구소에 개발-> 자바로개발, 형태소 분석. 자연언어 처리시스템
 - Mecab
  > 일본의 형태소 분석기와 교토 대학 정보학과 연구에서 개발한 POS tagger을 Mecab-ko로 변경하여 한국어에 적용한 
 - Okt (트위터)
  > Will Hohyon Ryu, 개발한 scala로 연구개발, 한국어 토크나이저
 - Komoran
  > 2013년도, Shinware에서 개발, 자바로 작성된 새로운 오프소스 한국어 형태학 분석기
  
4. 형태소 분석기별 함수들의 의미
5. pos함수에 대한 형태소별 의미 
  

 
 
 
 
 
 
 
 