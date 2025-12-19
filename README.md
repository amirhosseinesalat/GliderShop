🛒 React Shop & Cart App

A simple shopping and cart application built with React.
This project was created to practice state management, routing, and building a scalable component-based structure for an e-commerce style app.

The focus is on cart logic, quantity control, clean UI, and user experience.

Features
Products

Display a list of products

Product detail pages

Responsive product cards

Clean UI styled with CSS Modules

Cart

Add products to cart

Increase and decrease quantity

Remove items from cart

Real-time cart updates

Automatic calculation of total price and item count

Checkout functionality

Dedicated empty cart page

Additional

Custom 404 error page

Global state management using Context API

Reusable components and helpers

Custom hooks for logic separation

Tech Stack

React.js

React Router DOM

Context API

CSS Modules

React Icons

Custom Hooks

Getting Started

Clone the repository:

git clone https://github.com/your-username/react-shop-cart.git
cd react-shop-cart

Install dependencies:

npm install

Run the project:

npm run dev

Application Logic
Add to Cart

Click the Add to Cart button on any product.
The product will be added with an initial quantity of 1.

Quantity Control

Inside the cart, you can:

Increase quantity

Decrease quantity

Remove the product completely

All cart values update automatically.

Cart Summary

The cart section displays:

Total price

Total number of items

Order status

Checkout

After clicking Checkout, the cart resets and the order status changes to completed.

Empty Cart

If the cart is empty, a dedicated UI page is shown instead of the cart list.

404 Page

Navigating to an invalid route displays a custom 404 error page.

Developer

Amirhossein Esalat
Email: sltamirhosein@gmail.com
