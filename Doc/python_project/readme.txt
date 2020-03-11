1. 파이썬기반 데이터 과학 프로젝트
 - 데이터 수집, 
 - 전처리, 
 - 적제,
 - 분석, 
 - 시각화, 
 - 머신러닝, 
 - 딥러닝 (AI 약한)

2. git 를 이용한 공정 관리
 - github.com 가입및 로그인
 - git-scm.com 다운로드및 설치
    설치시 editor를 vs code로 적용 
 - github에 new > repogitory 생성
    생성시  readme, .gitignore (python)으로 체크및 생성
 - 로컬PC 프로젝트를 만들 위치에서
   public 이면
   $ git clone https://github.com/bongseop2822/py_projects.git
   private 이면
   $ git clone https://username:password@github.com/bongseop2822/py_projects.git
   간혹, 로그인 윈도우가 뜨면 거기서 다시 아이디 비번 넣어서 로그인하면됨
 - 최초1회만
   만약, 프로젝트를 먼저 작업하다가, git를 사용한 경우
   1) git clone을 다른 위치에서 수행
   2) clone를 통해 만들어진 위치에 먼저 만들어진 프로젝트 내용을 이동시킴
   3) vs code 에서 커밋(commit) and push 작업을 진행하면된다
   4) 단, 최초 수행시  git 오류가 나올수 있고, 이경우
     $ git config --global user.name "bongseop2822"
     $ git config --global user.email "bongseop2822@gmail.com"
     1회 수행해 주면(현재 프로젝트 위치에서) 처리된다
   5) 앞으로는 clone 한 프로젝트 위치가 실제 작업할 곳이 된다
   6) 
