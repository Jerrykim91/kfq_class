import pymysql

# 함수화
def selectData( uid ):
  connection = None
  result     = None
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
      cursor.execute(sql, (uid,))
      result = cursor.fetchall() 
      #print(result)    
  except Exception as e:
    print('오류발생', e)
  finally:
    if connection:
      connection.close()
  return result

# 번역 요청 데이터 삽입하는 함수
def insertData( src, out, slang, olang, uid='guest' ):
  connection = None
  result     = 0   
  try:
    connection = pymysql.connect(host='localhost',
                                user='root',
                                password='12341234',
                                db='python_db',
                                charset='utf8mb4'                              
                                ,cursorclass=pymysql.cursors.DictCursor)
    with connection.cursor() as cursor:           
      sql = '''
      INSERT INTO `tbl_trans_log` 
        (`src`, `out`, `slang`, `olang`, `uid`) 
      VALUES 
        (%s, %s, %s, %s, %s);
      '''      
      cursor.execute(sql, (src, out, slang, olang, uid))
    # 데이터베이스에 실제 반영
    connection.commit()
    # 영향을 받은 로의수
    result = connection.affected_rows()
  except Exception as e:
    print('오류발생', e)
  finally:
    if connection:
      connection.close()
  # 결과 리턴
  return result

# 테스트 코드
# 모듈화를 시켜서 다른 모듈이 selectData()를 사용할려고, 모듈가져오기를 수행
# 아래 코드가 수행됨
if __name__ == '__main__': # 위의 문제 해결
  print( '->', selectData('guest') )
  print( '->', insertData('Helloworld', '안녕', 'en', 'ko') )
