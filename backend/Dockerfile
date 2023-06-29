FROM python:3.8
LABEL author="maahad767"
ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend
COPY requirements.txt /app/backend/
RUN pip install -r requirements.txt
COPY . /app/backend/
EXPOSE 8000
∑