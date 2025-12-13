from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def index():
    pathstr = '/usr/src/app/files/output.txt'
    pathpong = '/usr/src/app/files/pong.txt'
    with open(pathstr) as f:
        lines = f.read().splitlines()
        randomstr = lines[-1]
    
    with open(pathpong) as f:
        pongstr = f.read()
    return f'{randomstr} \n {pongstr}'

if __name__ == "__main__":
    time.sleep(3)
    app.run(host='0.0.0.0')