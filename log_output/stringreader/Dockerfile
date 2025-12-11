FROM python:slim
WORKDIR /app
RUN pip install Flask 
RUN pip install Jinja2
RUN pip install gunicorn
COPY . .
EXPOSE 5000
CMD ["python","-u","stringreader.py"]
