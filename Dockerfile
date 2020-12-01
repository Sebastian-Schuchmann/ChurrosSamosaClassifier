FROM python:3.6-slim-buster

RUN apt-get update && apt-get install -y git python3-dev gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --upgrade -r requirements.txt

COPY static static/
COPY templates templates/

COPY main.py .
COPY export.pkl .

RUN python main.py

EXPOSE 5000

CMD ["python", "main.py", "start"]