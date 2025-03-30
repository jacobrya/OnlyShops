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
git clone https://github.com/yourusername/onlyshops.git
cd onlyshops
```

### Set up the backend:
```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Set up the frontend:
```sh
cd frontend
npm install
ng serve
```

