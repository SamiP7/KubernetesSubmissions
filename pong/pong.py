from flask import Flask

app = Flask(__name__)

ppc = 0

@app.route('/pingpong')
def pingpong():
    global ppc
    ppc += 1
    path = '/usr/src/app/files/pong.txt'
    with open(path, 'w+') as f:
        f.write(f'Ping / Pongs: {ppc}')
    return f'pong {ppc}'


if __name__ == "__main__":
    path = '/usr/src/app/files/pong.txt'
    with open(path, 'w+') as f:
        f.write(f'Ping / Pongs: {ppc}')
    app.run(host='0.0.0.0', port=5500)