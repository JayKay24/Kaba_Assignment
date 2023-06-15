from flask import Flask

app = Flask(__name__)

@app.route('/analyze')
def analyze():
  return 'analyzed here'

if __name__ == '__main__':
  app.run()
