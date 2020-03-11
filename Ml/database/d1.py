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
                
  # with connection.cursor() as cursor:        
  #     sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
  #     cursor.execute(sql, ('webmaster@python.org', 'very-secret'))    
  # connection.commit()
  # with connection.cursor() as cursor:        
  #     sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
  #     cursor.execute(sql, ('webmaster@python.org',))
  #     result = cursor.fetchone()
  #     print(result)
except Exception as e:
  print('오류발생', e)
finally:
  # 2. 접속 닫기  
  if connection:
    connection.close()