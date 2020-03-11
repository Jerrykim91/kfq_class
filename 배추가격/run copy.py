# -*- coding: utf-8 -*-
# import 
from flask import Flask, request, render_template ,redirect, url_for
import pickle
import os
import cv2
import numpy as np
from keras.backend import clear_session
from keras.models import Model
from random import randrange
import matplotlib.pyplot as plt
import seaborn as sns

# instance creating
app = Flask(__name__)
# api = Api(app)

# 피클  
## Load pickle
with open("model.p","rb") as file:
    model = pickle.load(file)
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
    seed_image = seed_image/256
    print(10)
    # 입력 받은 이미지 예측
    seed_arr = [seed_image_resize, seed_image]
    print(seed_arr)
    print(11.0)
    # 여기서 안된다. 
    pred = model.predict(seed_arr) 
    pred  = pred[0]
    print(11)
    print(pred)
    print(12)
        # 그림판 준비
    fig,(ax1, ax2, ax3, ax4, ax5) = plt.subplots(5, 1, figsize=(15,15), sharey=True)
    sns.heatmap(pred[:,:,0],vmin=0, vmax=1, ax=ax1)
    sns.heatmap(pred[:,:,1],vmin=0, vmax=1, ax=ax2)
    sns.heatmap(pred[:,:,2],vmin=0, vmax=1, ax=ax3)
    sns.heatmap(pred[:,:,3],vmin=0, vmax=1, ax=ax4)
    sns.heatmap(pred[:,:,4],vmin=0, vmax=1, ax=ax5)

    fig.savefig(os.getcwd() + "/static/data/ml/output.png", format='png')

    return render_template('index.html')


if __name__ == "__main__":
    # 디버그 하면 자동으로 로그 확인 
    app.run( debug = True )



