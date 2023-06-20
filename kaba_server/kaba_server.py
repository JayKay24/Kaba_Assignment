import sketch
import pandas as pd

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
  if request.method == 'POST':
    if 'csvFile' not in request.files:
      return { 'analysis': 'No csvFile provided' }
    csvFile = request.files['csvFile']
    print(csvFile)
    nasdaq_data = pd.read_csv(csvFile)
    print(nasdaq_data.head(3))
    sketchResponse = nasdaq_data.sketch.ask("Is there any PII information in this dataset?")
    return { 'analysis': sketchResponse if sketchResponse else 'Empty Response from Sketch' }

@app.route('/')
def hello_world():
  return 'Hello world'

if __name__ == '__main__':
  app.run(debug=True)
