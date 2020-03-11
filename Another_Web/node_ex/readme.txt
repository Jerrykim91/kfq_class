1. nodejs 배포 및 운영
- aws 가입 => 사내에 서버를 하나 세팅한다는 의미
- 실제적인 운영은 리눅스상에 주로 진행이 됨
- 서비스 > EC2 > 인스턴스 시작 > 프리 티어만 체크 => 무료서버만 노출
- ubuntu 18.x 선택 > 중간단계 생략 > 6단계 보안 그룹 구성
 > 언제든지 추가는 가능하다
 > 이 서버로 외부에서 접든할때 특정 포트를 열어준다(인바운드)
   전체 포트 1~65535번까지중 특정 포트만 오픈한다, 22, 3000, 80(웹서비스)
   80 포트는 통상 주소 뒤에 포트값을 기술하지 않는다(기본포트)
- 검토 > 시작하기 > 키 페어 : 처움 구성한 => 새키페어 생성 => 이름 => 다운로드
  기존키를 사용하고 싶은 사람 => 기존키 페어 사용
- 인스턴스 > 인스턴스 => 서버 목록이 보임


2. aws상 리눅스 접속 (윈도우기준)
- https://www.putty.org/ => ssh 사용할수 있는 프로그램
- putty.exe, puttyGen.exe 다운로드
- aws  (특정폴더, 임의)
  ┗ putty.exe
  ┗ puttyGen.exe
  ┗ xxx.pem
- puttyGen.exe > load > *.* 선택변경 > xxx.pem > 동의 > 
- Save private key > 예 > 이름을 통상 동일하게 > xxx.ppk >저장> 닫기
- 접속준비
 > putty.exe > session 항목에서 > ubuntu@본인서버 IP > 세션명입력
   : aws >  Save
 > connection > ssh > Auth > browser > xx.ppk 
 > session > save => 접속

- IP
    1. 54.180.123.121
    2. 54.180.26.178
    3. 52.79.181.80
    4. 13.209.96.237
    5. 13.125.205.17
    6. 13.124.144.252
    7. 13.209.70.46
    8. 13.125.128.221
    9. 54.180.106.206

- 노드 설치 (10v~)
 => sudo 루트 권한이다 (관리자 권한)
 $ sudo apt-get update
 $ sudo apt-get upgrade
 $ sudo apt install curl
 $ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
 $ sudo apt-get install -y nodejs
 $ node -v

- 소스 업로드
- 패키지 설치
  => 이과정을 한번에 짜는 방식 => 페브릭 (파이선웹 적절) + git
- 일반 세팅
  -> 소스 업로드는 => ftp 사용 (파일질라)

3. 소스 업로드
$ mkdir server & cd server & mkdir deploy
파일질라를 통해서 소스를 업로드하는데 
단, node_modules만 빼고
$ npm install
$ npm start 
- 서버 접속 확인 -> 않되면 -> 방화벽확인 -> 인바운드에 3000번 포트가 
  오픈되었는지 확인 -> 
  인스턴스 > 아래 화면에 보안그룹 > launch-wizard-x > 인바운드 > 
  편집 > 포트 추가 , 사용자 TCP, 30000, 장소무관  
- 브라우저에서 재접 후 확인
서버 종료 : ctrl + c
- 프로세스 관리자 설치 (서비는 백그라운드에서 운영 관리)
 $ sudo npm i -g pm2

4.  nodejs 운용
 pm2를 이용한  프로레스 관리 및 클러스터링 처리
 - 기본가동
 $ pm2 start ./bin/www
 - 서비스 목록 확인
 $ pm2 list
 => id 값이 0, Name값이 www <= 이름을 지정한적은 없으나 알아서 세팅
 - 특정 서비스 중단
 $ pm2 stop 0
 - 서비스 재가동
 $ pm2 restart 0
 - 특정 서비스 확인
 $ pm2 show 0
 => 각종 정보를 볼수 있고, 로그등 위치들을 확인할수 있다
 - 로그 확인
 $ tail -f /home/ubuntu/.pm2/logs/www-out.log <-> Ctrl + C
 - 서비스 제거
 $ pm2 delete 0
 - 이름을 지정해서 서버 가동
 $ pm2 start ./bin/www --name 'basic'
 - 서버 확인
 $ pm2 show basic
 - 삭제
 $ pm2 delete basic
 - 서버 신규 등록시 로그의 위치를 지정해서 가동
 $ pm2 start ./bin/www --name 'basic' -o ./logs/out.log -e ./logs/err.log --merge-logs
 - 삭제
 $ pm2 delete basic

 [ 클러스터 적용: 장비의 CPU을 모두 사용 ]
 - 서버가동 : -i는 cpu수를 지정 수치는 개수를 지정
 $ pm2 start ./bin/www --name 'basic' -i 3 -o ./logs/cluster.log
 - cpu 수 조정
 $ pm2 scale basic 5
 - 모니터
 $ pm2 monit
 - 모든 클러스터 로그
 $ tail -f ./logs/cluster-*.log