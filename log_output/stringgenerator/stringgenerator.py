import random
import string
import datetime
import threading
import os

rand = ''.join(random.choices(string.ascii_letters + string.digits, k=10))


def thread():
    path = '/usr/src/app/files/output.txt'
    threading.Timer(5, thread).start()
    str = f'{datetime.datetime.now()}: {rand}\n'
    with open(path, 'a+') as f:
        f.write(str)


if __name__ == "__main__":
    path = '/usr/src/app/files/output.txt'
    str = f'{datetime.datetime.now()}: {rand}\n'
    with open(path, 'a+') as f:
        f.write(str)
    thread()