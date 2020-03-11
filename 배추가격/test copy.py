from flask import Flask, request, render_template ,redirect, url_for,send_file, make_response
import os

PEOPLE_FOLDER = os.path.join('static', 'data')

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER

@app.route('/')
@app.route('/index')
def show_index():
    
    
    full_filename = os.path.join(app.config['UPLOAD_FOLDER'], 'image.png')
    return render_template("index.html", user_image = full_filename)


if __name__ == "__main__":
    # 디버그 하면 자동으로 로그 확인 
    app.run( debug=True) 
