# 간단한 메모장 만들기 
# C:/doit/Memo.py
#------------------------------------------------------------
# import sys 

# option = sys.argv[1]

# if option=='-a':
#     Memo = sys.argv[2]
# f = open('Memo.txt','a')
# f.write(Memo)
# f.write('\n')
# f.close()

#------------------------------------------------------------
# # with문으로도 작성이 가능하다 
import sys

option = sys.argv[1]
if option=='-a':
    Memo = sys.argv[2]

    with open('Memo.txt','a') as f:
        f.write(Memo)
        f.write('\n')
elif option == '-v':
    with open('Memo.txt',) as f:
        memo = f.read()
        print(memo)