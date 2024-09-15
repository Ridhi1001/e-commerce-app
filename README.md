# E-Commerce App

An e-commerce application with seller and buyer functionalities. Sellers can add, edit, and delete products, while buyers can search for products, add them to the cart, and proceed with their orders.

#Note - Backend of this project is working with various buyer and seller functionalities as well as signup and login functionalities as well authenticated. Provided a basic sample for frontend with user and signup pages and basic homepage. Some functionalities and routing is yet to be added for frontend.

## Features
- *Authentication*: Signup/Login for both Sellers and Buyers.
- *Seller Functionality*: Add, edit, and delete products.
- *Buyer Functionality*: Search for products, add to cart, and remove from cart.
- *Product Management*: Sellers can manage their products with a dynamic product form.
- *Responsive UI*: The application features a user-friendly and responsive design using React and custom CSS.

## Tech Stack

- *Frontend*: React, Axios
- *Backend*: Node.js, Express.js
- *Database*: PostgreSQL 
- *Middleware*: JWT Authentication

## Prerequisites
Node.js: v14+
PostgreSQL: Ensure PostgreSQL is running locally or hosted
Clone the repository:
git clone https://github.com/Ridhi1001/e-commerce-app.git
Install Dependencies:

Navigate to the backend folder and install dependencies:
cd backend
npm install
Navigate to the client folder and install dependencies:
cd ../client
npm install
Set up PostgreSQL Database:

Create a PostgreSQL database and update backend/db.js with your credentials

## Running the Application
Backend: Navigate to the backend folder and start the server:
npm run dev
Frontend: Navigate to the client folder and start the React frontend
npm run start

## Usage
Seller:
Login/Signup as a Seller.
Manage products: add, edit, delete products.
Buyer:
Search for products.
Add products to cart, manage cart items, and remove products from cart.

## License
This project is licensed under the MIT License.
