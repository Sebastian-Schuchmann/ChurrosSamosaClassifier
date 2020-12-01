FROM python:3.6

COPY requirements.txt .

RUN pip install --upgrade -r requirements.txt

COPY server server/

EXPOSE 5000

CMD ["python", "server/main.py"]