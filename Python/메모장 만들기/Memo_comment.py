# 간단한 메모장 만들기 => C:/doit /Memo.py에 만든다 
# 필요한 기능은? 메모 추가하기, 메모 조회하기
# 입력 받는 값은? 메모 내용, 프로그램 실행 옵션***
# 출력하는 값은? Memo.txt


# Memo.txt => 이름 -a = > 실행 옵션 "love you" => 메모내용
# python Memo.py -a "love you"
# => 실행 (윈도우 +R)=> cmd => '..c:\doit' 이동 => python Memo.py -a "love you" 작성 
# Memo.txt 가 만들어 진것을 볼수 있다. 
#------------------------------------------------------------
# C:/doit/Memo.py
import sys 
# sys.argv 는 배열같이 값을 받으면 담는다 
option = sys.argv[1]
# sys.argv[1]은 첫번째 값이다 -> 이값에 처음 입력받은 값을 담는다. 

if option=='-a':
    #만약 첫번째 값을  -a를 받으면  새로운 파일을 연다
    Memo = sys.argv[2]
    #두번쨰 값은 메모라는 변수 안에 집어 넣는다. 
f = open('Memo.txt','a')
f.write(Memo)
# 메모 변수를 memo.txt 파일 위에 담는다 
f.write('\n')
f.close()
# 닫는다 

# 옵션이 -a 인경우만 Memo값을 읽어 Memo.txt 파일에 그값을 쓰도록 코드를 작성
# 여기서 메모는 항상 새로운 내용이 작성되는것이 아니라  
# 한줄식 추가 되어야 하므로 파일 열기 모드를 a로 함 
# 메모를 추가 할대마다 다음줄에 저장되도록 줄바꿈 문자도 추가로 파일에 쓰도록 했다. 
#------------------------------------------------------------
# # with문으로도 작성이 가능하다 


option = sys.argv[1]
if option=='-a':
    Memo = sys.argv[2]

    with open('Memo.txt','a') as f:
        # with 을 사용하면 마지막에 파일을 닫지 안아도 된다. 
        f.write(Memo)
        f.write('\n')
elif option == '-v':
    # 첫번째 값에 -v가 입력 되었을때 
    with open('Memo.txt',) as f:
        # 메모를 연다 
        memo = f.read()
        # 메모에 담긴 메모라는 변수를 읽는다. 
        print(memo)
        # 사용자가 볼수있게 출력한다. 