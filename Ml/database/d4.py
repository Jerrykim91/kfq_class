import pymysql

connection = None
# 아이디가 guest인 데이터만 가져와라
try:
  connection = pymysql.connect(host='localhost',
                              user='root',
                              password='12341234',
                              db='python_db',
                              charset='utf8mb4'                              
                              ,cursorclass=pymysql.cursors.DictCursor)
  with connection.cursor() as cursor:     
    # 파라미터를 넣을때는 '값' => %s로 치환(홀따움표 포함)
    sql = '''
    select src, slang as label from tbl_trans_log
    where uid=%s;
    '''
    # 파리미터는 쿼리 수행시 튜플로 전달(2번인자)
    cursor.execute(sql, ('guest',))
    result = cursor.fetchall() 
    print(result)    
except Exception as e:
  print('오류발생', e)
finally:
  if connection:
    connection.close()