from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def index():
    path = '/usr/src/app/files/output.txt'
    with open(path) as f:
        return f.read()

if __name__ == "__main__":
    time.sleep(3)
    app.run(host='0.0.0.0')