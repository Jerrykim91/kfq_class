# 연구목표:주요포털을 통한 뉴스 헤드라인 수집 + 언론사명 + 기자명
# 이를 통해 아베에 대한 언론의 긍정/부정에 대한 뉘앙스분석
###############################################################
import urllib.request
import os
import sys
import json

# 네이버 쿼리 인증키 : 일일 쿼퉈 25,000
Client_ID  = '_kYGPWLxEKgbDV0v7Kn3'
Secret     = 'FNDu62I5Md'

# API URL
news_url   = 'https://openapi.naver.com/v1/search/news.json'
# 검색 키워드를 고정할것인가? 디비에서 관리해서 가져올것인가?->디비에서 가져오겟다(향후)
keyword    = urllib.parse.quote('아베')

# url  생성
def makeFullUrlByGet( news_url, start, size):
    news_param = 'query=%s&display=%s&start=%s&sort=%s' % (keyword, size, start, 'date')
    url = '%s?%s' % (news_url, news_param)
    return url

# 통신:최초 1회 전체 데이터를 다 가져온다 => 1~1000가능
# 테스트할때 전체 크기가 커버리면 결과를 확인한는데 너무 오래 걸린다, 
# 임의로 5를 부여하여 4번 정도 확인해 본다(샘플링)
import time
def connectNetwork( sIdx, eIdx, size=100 ):
    for start in range(sIdx, eIdx):#1001):
        time.sleep(1*0.4)
        print( makeFullUrlByGet( news_url, start, size ) )
        # 통신 객체 생성
        request = urllib.request.Request( makeFullUrlByGet( news_url, start, size ) )
        # 헤더 설정
        request.add_header("X-Naver-Client-Id", Client_ID)
        request.add_header("X-Naver-Client-Secret", Secret)
        # 실제통신
        response = urllib.request.urlopen(request)
        # 결과처리    
        if(response.getcode() == 200): # 통신성공
            tmp = json.load(response)
            # 디비에 지급 수집한 데이터 100개를 밀어 넣어라
            insertData( tmp['items'] )
            # print( [ item['title'] for item in tmp['items'] ] )

import pandas as pd
import pymysql
from sqlalchemy import create_engine
import pandas.io.sql as pSql
def insertData( data ):
    # 연결
    db_url = 'mysql+pymysql://root:12341234@localhost/python_db'
    db_url
    # 엔진생성(절차)
    engine = create_engine( db_url, encoding='utf8' )
    # 실연결
    conn = engine.connect()
    # 삽입
    df_dict = pd.DataFrame.from_dict( data )
    print( df_dict.iloc[0]['title'] )
    df_dict.to_sql( name='tbl_navernews', con=conn, if_exists='append', index=False )  
    # 해제
    conn.close()
    # 로그
    print( '%d개의 데이터가 입력되었습니다.' % len(data) )

# 이 프로램의 entry point(시작점, 진입로)
def main():
    # 최초에는 데이터가 없어서 api가 허용하는 범위내에서 최대치로 데이터를 수집
    #connectNetwork(1, 1000)
    # 10분 간격으로 데이터를 수집 -> 스케쥴은 os단에서 해결
    # 만약, 새로 수집한 데이터가 디비에 이미 존재한다면?
    # 입력시 중복체크를 할것인가? 그냥 디비에 다 넣어두고 분석할때 중복을 제거할것인가?
    connectNetwork(1, 2, 10)
    
if __name__ == '__main__':
    main()