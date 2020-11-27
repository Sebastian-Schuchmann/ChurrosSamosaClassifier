from flask import Flask, request
from flask_cors import CORS
from fastai.vision.all import *


#Labeling function required for load_learner to work
def GetLabel(fileName):
  return fileName.split('_')[0]

learn = load_learner(Path('./export.pkl')) #Import Model
app = Flask(__name__)
cors = CORS(app)

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    img = PILImage.create(request.files['file'])
    label,_,probs = learn.predict(img)
    print(label)
    return label

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__=='__main__':
    app.run()




