from flask import Flask, render_template, request, jsonify, redirect
from ml import detect_lang
from db import insertData
import urllib.request
import json
import sys
import os

app = Flask(__name__)

@app.route('/')
def home():
  return redirect( '/kfqgo' )

@app.route('/kfqgo', methods=['GET','POST'])
def kfqgo():
  if request.method == 'GET':
    return render_template('index.html')
  else:
    check_text      = request.form.get('inputLang')
    nation, lang_ko = detect_lang( check_text )
    transText       = lang_transByPapago( check_text, nation )
    if transText:
      transText = transText['message']['result']['translatedText']
    else:
      transText = '번역실패'
    insertData( src=check_text, out=transText, slang=nation, olang='ko' )
    return jsonify( { 'code':nation, 'ko':lang_ko, 'trans':transText } )

def lang_transByPapago( text, na_code='en' ):  
  dump_txt = '''
    허리케인 도리안은 현재 바하마와 미국 남동부에 영향을 미치는 강력한 열대
    저기압입니다. 2019 년 대서양 허리케인 시즌의 네 번째 폭풍, 
    허리케인 및 첫 번째 허리케인 인 Dorian은 8 월 24 일 중부 대서양의 열대성
    파도에서 발전했습니다. 8 월 28 일 허리케인이되기 전에 소 앤 틸리 스 
    제도쪽으로 이동하면서이 시스템은 점차 강화되었다. 급속한 강화가 
    이어지고 8 월 31 일, 도리안은 카테고리 4 주요 허리케인으로 강화되었다.
    다음 날 도리안은 카테고리 5 강도에 도달하여 16 분에 185mph (295km / h)의 
    지속 바람과 최소 중앙 압력 910 밀리바 (26.87inHg)로 정점에 도달했습니다. 
    : 40 UTC 도리안은 몇 시간 후 같은 강도로 그랜드 바하마에 또 다른 땅을 만들었다.
  '''
  tmp = {
    'message':{
      'result':{
        'translatedText':dump_txt
      }
    }
  }
  return tmp

if __name__ == '__main__':
  app.run(debug=True)