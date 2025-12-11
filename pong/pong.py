from flask import Flask

app = Flask(__name__)

ppc = 0

@app.route('/pingpong')
def pingpong():
    global ppc
    ppc += 1
    return f'pong {ppc}'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5500)