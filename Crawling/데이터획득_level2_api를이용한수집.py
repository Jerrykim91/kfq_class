#!/usr/bin/env python
# coding: utf-8

# ## 데이터 획득
# 
# * api 사용
# * naver open api를 활용
# * urllib.request 모듈을 사용하여 통신처리후 JSON 파싱을 통한 데이터 추출

# In[1]:


import urllib.request
import os
import sys


# #### naver API 사용을 위한 키

# In[2]:


Client_ID = '_kYGPWLxEKgbDV0v7Kn3'
Secret    = 'FNDu62I5Md'


# * 통신할 URL 정의 
# * parameter 정의 (get 방식 or post 방식에 맞춰 구성)
# * header에 위에서 정의한 키 및 응답 데이터 포멧에 대한 구성 추가
# * 통신 -> 응답 코드를 확인 : 200번 경우(성공) -> 응답데이터에서 json 데이터획득
# * json데이터에서 [가공 및 전처리는 일단 배제] 데이터를 적제(csv or xls or ddatabase)

# In[3]:


# 네이버 통합 검색어 트렌드 조회 URL
url = "https://openapi.naver.com/v1/datalab/search"
url


# In[4]:


body = '{"startDate":"2019-07-09","endDate":"2019-08-06","timeUnit":"month","keywordGroups":[{"groupName":"대한민국","keywords":["대한민국","korean"]},{"groupName":"일본","keywords":["일본","japan"]}],"device":"pc","ages":["3","4"],"gender":"f"}';
body


# In[5]:


# 통신 객체 생성
request = urllib.request.Request(url)
# 헤더 설정
request.add_header("X-Naver-Client-Id", Client_ID)
request.add_header("X-Naver-Client-Secret", Secret)
request.add_header("Content-Type","application/json")


# In[6]:


# 실제 통신 : post방식
# 한글 데이터를 그대로 전송하면 오류 발생 => body.encode("utf-8") 처리
response = urllib.request.urlopen(request, data=body.encode("utf-8"))


# In[7]:


response


# In[8]:


# 응답 코드가 정상이면
rescode = response.getcode()
if(rescode==200):
    # 실제 응답 데이터를 획득
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)


# In[ ]:





# In[9]:


# 뉴스 검색
news_url = 'https://openapi.naver.com/v1/search/news.json'
news_url


# In[10]:


# 파라미터
keyword    = urllib.parse.quote('아베')
news_param = 'query=%s&display=%s&start=%s&sort=%s' % (keyword, 10, 1, 'date')
news_param


# In[11]:


url = '%s?%s' % (news_url, news_param)
url


# In[12]:


# 통신 객체 생성
request = urllib.request.Request(url)
# 헤더 설정
request.add_header("X-Naver-Client-Id", Client_ID)
request.add_header("X-Naver-Client-Secret", Secret)


# In[13]:


# 통신
response = urllib.request.urlopen(request)


# In[14]:


# 응답 코드가 정상이면
rescode = response.getcode()
if(rescode==200):
    # 실제 응답 데이터를 획득
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)


# In[15]:


tmp = response_body.decode('utf-8')


# In[16]:


type(tmp)


# In[17]:


# 원하는 데이터를 추출 => 파싱 => xml, json  같은 형식을 취해야한다


# In[18]:


response = urllib.request.urlopen(request)


# In[19]:


import json


# In[20]:


tmp = json.load(response)
tmp


# In[21]:


type(tmp)


# In[22]:


for item in tmp['items']:
    print( '->', item['title'] )


# In[23]:


[ item['title'] for item in tmp['items'] ]


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




