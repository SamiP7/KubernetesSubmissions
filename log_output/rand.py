import random
import string
import datetime
from flask import Flask
import threading

rand = ''.join(random.choices(string.ascii_letters + string.digits, k=10))

app = Flask(__name__)

@app.route('/')
def index():
    return f'datetime: {datetime.datetime.now()}, string: {rand}'

def thread():
	threading.Timer(5, thread).start()
	print(f'{datetime.datetime.now()}: {rand}', flush=True)
 
thread()

if __name__ == "__main__":
    app.run(host='0.0.0.0')
