from flask import Flask, request

import sketch
import pandas as pd

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
  if request.method == 'POST':
    csvFile = request.files['csvFile']
    nasdaq_data = pd.read_csv(csvFile)
    sketchResponse = nasdaq_data.sketch.ask("Is there any PII information in this dataset?")
  return sketchResponse

@app.route('/')
def hello_world():
  return 'Hello world'

if __name__ == '__main__':
  app.run(debug=True)
