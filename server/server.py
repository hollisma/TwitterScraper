from flask import Flask
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)


@app.route('/jerry')
def yourMethod():
    return 'Hello World.'
    #response = Flask.jsonify({'some': 'data'})
    #response.headers.add('Access-Control-Allow-Origin', '*')
    # return response


if __name__ == "__main__":
    app.run()
