import random
import string
import time
import datetime

rand = ''.join(random.choices(string.ascii_letters + string.digits, k=10))

while True:
	print(f'{datetime.datetime.now()}: {rand}', flush=True)
	time.sleep(5)
