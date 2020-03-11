# 엔트리 포인트 -> 여기서부터 경로를 따진다.

# 1. 모듈가져오기
from flask import Flask, render_template, request, jsonify, redirect
from ml import detect_lang
import os
import sys
import urllib.request
import json
from db import insertData

# 2. flask 객체 생성
app = Flask(__name__)

# 3. 라우팅
# ~/ 요청하면 home() 함수가 응답(return)
@app.route('/')
def home():
  return redirect( '/kfqgo' )

# restful api
# 기본 라우트는 get방식만 허용
@app.route('/kfqgo', methods=['GET','POST'])
def kfqgo():
  if request.method == 'GET':
    # 기본으로 templates 폴더 밑에서 찾는다
    return render_template('index.html')
  else:
    # post 방식으로 요청되었을때 처리
    # 서:데이터를획득 => 백터화 => 모델을 로드(서버가동시1회만) => 예측 => 답안획득 => 응답구성
    # 데이터를획득
    #a = request.form['inputLang']

    check_text = request.form.get('inputLang') # 키가 틀려도 None으로 처리
    nation, lang_ko = detect_lang( check_text )# 판정
    # 번역요청
    transText = lang_transByPapago( check_text, nation )
    if transText: # 번역이 되었다면!!
      transText = transText['message']['result']['translatedText']
    else:
      transText = '번역실패'

    # 1. 파파고 번역으로 연동(통신)
    # 2. 응답 -> 로그 처리(디비 저장) -> AJAX 응답
    insertData( src=check_text, 
                out=transText, 
                slang=nation, 
                olang='ko' )
    return jsonify( { 'code':nation, 'ko':lang_ko, 'trans':transText } )


# 파파고 번역 연동
Client_ID     = '_kYGPWLxEKgbDV0v7Kn3'
Client_Secret = 'FNDu62I5Md'
'''
curl "https://openapi.naver.com/v1/papago/n2mt" \
-H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
-H "X-Naver-Client-Id: _kYGPWLxEKgbDV0v7Kn3" \
-H "X-Naver-Client-Secret: FNDu62I5Md" \
-d "source=ko&target=en&text=만나서 반갑습니다." -v
'''
def lang_transByPapago( text, na_code='en' ):  
  # dump_txt = '''
  # 허리케인 도리안은 현재 바하마와 미국 남동부에 영향을 미치는 강력한 열대
  #  저기압입니다. 2019 년 대서양 허리케인 시즌의 네 번째 폭풍, 
  #  허리케인 및 첫 번째 허리케인 인 Dorian은 8 월 24 일 중부 대서양의 열대성
  #   파도에서 발전했습니다. 8 월 28 일 허리케인이되기 전에 소 앤 틸리 스 
  #   제도쪽으로 이동하면서이 시스템은 점차 강화되었다. 급속한 강화가 
  #   이어지고 8 월 31 일, 도리안은 카테고리 4 주요 허리케인으로 강화되었다.
  #    다음 날 도리안은 카테고리 5 강도에 도달하여 16 분에 185mph (295km / h)의 
  #    지속 바람과 최소 중앙 압력 910 밀리바 (26.87inHg)로 정점에 도달했습니다. 
  #    : 40 UTC 도리안은 몇 시간 후 같은 강도로 그랜드 바하마에 또 다른 땅을 만들었다.
  # '''
  # tmp = {
  #   'message':{
  #     'result':{
  #       'translatedText':dump_txt
  #     }
  #   }
  # }
  # return tmp
  

  # 사용자 인증키 설정
  client_id     = Client_ID
  client_secret = Client_Secret
  
  # 전송할 데이터(번역요청원문) URL 인코딩처리(목적:한글깨짐방지)
  encText = urllib.parse.quote(text)

  # 통신 준비
  data    = "source={0}&target=ko&text={1}".format( na_code, encText )
  url     = "https://openapi.naver.com/v1/papago/n2mt"
  # 요청객체 생성
  request = urllib.request.Request(url)
  # 헤더 설정
  request.add_header("X-Naver-Client-Id",client_id)
  request.add_header("X-Naver-Client-Secret",client_secret)
  # 통신
  response = urllib.request.urlopen(request, data=data.encode("utf-8"))
  rescode  = response.getcode()
  if(rescode==200):
    # 통신 성공 => 응답데이터를 json로드를 통해 파이썬의 객체로 리턴
    return json.load( response )
    #response_body = response.read()
    #print(response_body.decode('utf-8'))
  else:
    # 통신 실패
    return {}
    #print("Error Code:" + rescode)




# 4. 서버가동
if __name__ == '__main__':# 조건문 이하 코드는 run.py가 직접 구동될때만 작동
  app.run(debug=True)