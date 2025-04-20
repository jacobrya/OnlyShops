# OnlyShops

![logo](logo.png)

OnlyShops is an online marketplace that allows users to browse, purchase, and manage a variety of products. The platform is designed to provide a seamless shopping experience with a modern tech stack ensuring scalability and efficiency.

## Features
- User authentication and profile management
- Product listing, search, and filtering
- Shopping cart and order processing
- Seller dashboard for managing inventory
- Responsive and intuitive user interface

## Tech Stack
- **Frontend:** Angular for a dynamic and interactive user experience
- **Backend:** Django for a robust and scalable server-side architecture
- **Database:** PostgreSQL for reliable data storage and management

## Installation & Setup

### Clone the repository:
```sh
git clone https://github.com/jacobrya/OnlyShops.git
cd OnlyShops
```

### Set up the backend:
```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: myenv\Scripts\activate
pip install -r onlyshops/requirments.txt

Add a .env file to the root directory and include the following:

DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
API_SECRET_KEY=

python manage.py migrate
python manage.py runserver
```

### Set up the frontend:
```sh
cd frontend
npm install
ng serve
```

