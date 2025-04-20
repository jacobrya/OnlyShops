# Используем официальный Python образ
FROM python:3.11-slim

# Устанавливаем зависимые пакеты для psycopg2
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл зависимостей и устанавливаем
COPY onlyshops/requirments.txt .

RUN pip install --no-cache-dir -r requirments.txt

# Копируем весь Django проект внутрь контейнера
COPY onlyshops/ ./onlyshops/

# Открываем порт 8000 для Django
EXPOSE 8000

# Команда по умолчанию для запуска Django
CMD ["python", "onlyshops/manage.py", "runserver", "0.0.0.0:8000"]
