# -*- coding: utf-8 -*-
# import 
from flask import Flask, request, render_template ,redirect, url_for,send_file, make_response
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from keras.backend import clear_session
import prettyplotlib as ppl
import pickle
import os
import cv2
import numpy as np
import pandas as pd
from keras.models import Model
from random import randrange
import matplotlib.pyplot as plt
import tensorflow as tf
import seaborn as sns
from io import BytesIO
from hwLib import *

PEOPLE_FOLDER = os.path.join('static', 'data')

# instance creating
app = Flask(__name__)
# api = Api(app)

app.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER

# 피클  
## Load pickle
with open("model.p","rb") as file:
    model = pickle.load(file)
print(model)
print("==chcek here==")
model.load_weights("best_weight.h5")
#model.keras_model._make_predict_function()
print("==chcek here==")

# 메인 페이지 라우팅 
@ app.route("/") 
def index():
    test_path = os.getcwd() + "/static/data/test_images/"
    print( '-->', test_path )
    test_list = os.listdir(test_path)
    fileName  = test_list[randrange(len(test_list))]
    abs_name  = test_path + test_list[randrange(len(test_list))]
    print( "abs_name", abs_name)

    img_width = 800
    img_height = 128

    #abs_name = test_path + test_list[randrange(len(test_list))]
    print(1)
    seed_image = cv2.imread(abs_name)
    print(2)
    seed_image = cv2.cvtColor(seed_image, cv2.COLOR_BGR2GRAY)
    print(3)
    seed_image_resize = cv2.resize(seed_image, dsize=(img_width, img_height))
    print(4, seed_image_resize)
    seed_image_resize = np.expand_dims(seed_image_resize, axis=-1)
    print(5)
    seed_image_resize = np.expand_dims(seed_image_resize, axis=0)
    print(6)
    seed_image_resize = seed_image_resize/255
    print(7)
    seed_image = np.expand_dims(seed_image, axis=-1)
    print(8)
    seed_image = np.expand_dims(seed_image, axis=0)
    print(9)
    seed_image = seed_image/255
    print(10)
    # 입력 받은 이미지 예측
    pred = model.predict([seed_image_resize, seed_image])[0]
    print(pred)
    print(11)
    
    # 그림판 준비
    fig,(ax1, ax2, ax3, ax4, ax5) = plt.subplots(5, 1, figsize=(15,15), sharey=True)
    sns.heatmap(pred[:,:,0],vmin=0, vmax=1, ax=ax1)
    sns.heatmap(pred[:,:,1],vmin=0, vmax=1, ax=ax2)
    sns.heatmap(pred[:,:,2],vmin=0, vmax=1, ax=ax3)
    sns.heatmap(pred[:,:,3],vmin=0, vmax=1, ax=ax4)
    sns.heatmap(pred[:,:,4],vmin=0, vmax=1, ax=ax5)
    # 이것도 같이 다운로드 필요 해 

    # 그려진 img 파일 내용을 html 랜더링 쪽에 전송한다.
    #img = BytesIO()
    fig.savefig(os.getcwd() + "/static/data/ml/output.png", format='png')
    #img.seek(0)
    

    return render_template('index.html', ori=fileName)

# # 데이터 예측처리
@ app.route("/load", methods=[ "GET" ])
def load():
    if request.method == "GET":

        #  # 파일 처리 분기 
        file = request.files["img"]
        # file.read()
        # if not file: return render_template("load.html",  ml_label = "Nothing")      

        # 이미지 픽셀 정보 읽기
        # 렌덤 변수가 3 자리에 들어가면 렌덤한 이미지를 가질수 잇다.( 범위 : math.random(len(test_list) )
        test_path = "./data/test_images/"
        test_list = os.listdir(test_path)

        img_width = 800
        img_height = 128

        abs_name = test_path + test_list[randrange(len(test_list))]
        seed_image = cv2.imread(abs_name)
        seed_image = cv2.cvtColor(seed_image, cv2.COLOR_BGR2GRAY)
        seed_image_resize = cv2.resize(seed_image, dsize=(img_width, img_height))
        seed_image_resize = np.expand_dims(seed_image_resize, axis=-1)
        seed_image_resize = np.expand_dims(seed_image_resize, axis=0)
        seed_image_resize = seed_image_resize/255

        seed_image = np.expand_dims(seed_image, axis=-1)
        seed_image = np.expand_dims(seed_image, axis=0)
        seed_image = seed_image/255

        # 입력 받은 이미지 예측
        pred = model.predict([seed_image_resize, seed_image])[0]

         # 그림판 준비
        fig,(ax1, ax2, ax3, ax4, ax5) = plt.subplots(5, 1, figsize=(15,15), sharey=True)
        sns.heatmap(pred[:,:,0],vmin=0, vmax=1, ax=ax1)
        sns.heatmap(pred[:,:,1],vmin=0, vmax=1, ax=ax2)
        sns.heatmap(pred[:,:,2],vmin=0, vmax=1, ax=ax3)
        sns.heatmap(pred[:,:,3],vmin=0, vmax=1, ax=ax4)
        sns.heatmap(pred[:,:,4],vmin=0, vmax=1, ax=ax5)
        # 이것도 같이 다운로드 필요 해 

        # 그려진 img 파일 내용을 html 랜더링 쪽에 전송한다.
        img = BytesIO()
        fig.savefig(img)
        img.seek(0)
        return send_file(img, mimetype='image/png')

    

def show_index():

    test_path = "./data/test_images/"
    test_list = os.listdir(test_path)

    img_width = 800
    img_height = 128

    abs_name = test_path + test_list[randrange(len(test_list))]
    seed_image = cv2.imread(abs_name)
    seed_image = cv2.cvtColor(seed_image, cv2.COLOR_BGR2GRAY)
    seed_image_resize = cv2.resize(seed_image, dsize=(img_width, img_height))
    seed_image_resize = np.expand_dims(seed_image_resize, axis=-1)
    seed_image_resize = np.expand_dims(seed_image_resize, axis=0)
    seed_image_resize = seed_image_resize/255

    seed_image = np.expand_dims(seed_image, axis=-1)
    seed_image = np.expand_dims(seed_image, axis=0)
    seed_image = seed_image/255
    print("==chcek here1==")
  
    fig = plt.figure(figsize=(15,15))
    plt.imshow(seed_image[0,:,:,0], "gray")
    #path = "outputs/{0}.png".format(file_name)
    fig.savefig('./static/data/image100.png')   # save the figure to file
    # if os.path.isfile(path):
    #     os.remove(path)
    # fig.savefig(path)
    # print("==chcek here2==")

    # return 


def show_pic():
    
    full_filename = os.path.join(app.config['UPLOAD_FOLDER'], 'image.png')
    return render_template("index.html", user_image = full_filename)

if __name__ == "__main__":
    # 디버그 하면 자동으로 로그 확인 
    app.run( debug=True) 



