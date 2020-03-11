from sklearn.externals import joblib
import os
import re
import json
# 서브 패키지라고, 무조건, 패키지 경로는 엔트리 파일부터 따지는 경로를 지정
from db import selectModelInfo

# 모델 파일 위치및 레이블 파일 위치 정보 획득
info = selectModelInfo()
# 서버가 재가동될때 => 예측모델을 로드하므로 => 이 위치를 최신으로 갱신해준다
# 예측모델
ml_model_file = info['dir']#'./ml/clf_lang_20190830.model'
clf           = joblib.load( ml_model_file )

# 레이블
ml_label_file = info['label']#'./ml/clf_lang_labels.label'
with open(ml_label_file, 'r') as f:
  clf_label   = json.load(f)


def detect_lang( text ):
  text = text.lower()                 
  p1   = re.compile( '[^a-zA-Z ]*' )  
  text = p1.sub( '' , text )          
  if not text.strip():                
    return None, None
  cnts = [ 0 for n in range(26) ]     
  asc_a, asc_z, asc_ws = ord('a'), ord('z'), ord(' ')
  for ch in text:                     
    n = ord(ch)                       
    if asc_a <= n <= asc_z:           
        cnts[ n - asc_a ] += 1        
  total_cnt = sum(cnts)               
  if not total_cnt:                   
    return None, None
  freq = list( map( lambda x:x/total_cnt , cnts ) ) 

  res = clf.predict( [freq] )
  if res:
    return res[0], clf_label[ res[0] ]

  else:
    return None, None