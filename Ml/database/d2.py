import pymysql

# 데이터 베이스 접속은 I/O이므로 예외 상황이 항시 발생할수 있다 -> try~
connection = None
try:
  # 1. 데이터베이스 접속 객체 생성 => 접속 정보 제공 => 접속
  connection = pymysql.connect(host='localhost',
                              user='root',
                              password='12341234',
                              db='python_db',
                              charset='utf8mb4')
  # 2. 커서를 획득한다     
  #cursor = connection.cursor()
  # ...
  #cursor.close()
  with connection.cursor() as cursor:        
    # 3. 쿼리를 수행한다    
    sql = '''
    select src, slang as label from tbl_trans_log;
    '''
    # 쿼리 수행시 데이터를 넣고 싶다면 튜플로 2번인자에 채운다
    cursor.execute(sql)
    # 4. 결과 획득(select) 혹은 커밋(insert, update, delete)
    # fetchall() 다 가져온다, fetchone() 한개만 가져온다(로그인)
    result = cursor.fetchall() 
    # 현재 구조는 튜플에 튜플로 나온다 ( (), (), () )
    # 여러가지 경험상 리스트에 튜플이 가장 적합 [ {}, {}, {}]
    print(result)    
except Exception as e:
  print('오류발생', e)
finally:
  # 4. 접속 닫기  
  if connection:
    connection.close()