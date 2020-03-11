from io import BytesIO
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import numpy as np
import prettyplotlib as ppl
import matplotlib.pyplot as plt
from flask import Flask, request, render_template ,redirect, url_for,send_file, make_response
import os

PEOPLE_FOLDER = os.path.join('static', 'data')

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER

@app.route('/')
@app.route('/image')
def fig():
    fig, ax = plt.subplots(1)
    ppl.bar(ax, np.arange(10), np.abs(np.random.randn(10)))
    canvas = FigureCanvas(fig)
    img = BytesIO()
    fig.savefig(img)
    img.seek(0)
    return send_file(img, mimetype='img/png')

def images():
    full_filename = os.path.join(app.config['UPLOAD_FOLDER'], 'image.png')
    return render_template("image.html", user_image = full_filename)


if __name__ == '__main__':
    app.run(debug=True)