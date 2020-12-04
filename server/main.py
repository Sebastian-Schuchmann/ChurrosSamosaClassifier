from flask import Flask, request
from flask_cors import CORS
from flask import render_template
from fastai.vision.all import *

#Labeling function required for load_learner to work
def GetLabel(fileName):
  return fileName.split('-')[0]

learn = load_learner(Path('server/export.pkl')) #Import Model
app = Flask(__name__)
cors = CORS(app) #Request will get blocked otherwise on Localhost

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    img = PILImage.create(request.files['file'])
    label,_,probs = learn.predict(img)
    return f'{label} ({torch.max(probs).item()*100:.0f}%)'

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000)



