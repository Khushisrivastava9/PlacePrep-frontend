# PlacePrep Project


This project is a Placement Preparation Platform built using the MERN (MongoDB, Express, React, Node.js) stack. The platform allows students to access various resources, such as lectures and PDFs, to aid in their placement preparation. It also features an admin panel for managing these resources and includes user authentication with email verification and password recovery features.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Features

### User Features
- **Resource Access**: Users can view and access lectures and PDFs related to placement preparation.
- **User Authentication**: 
  - Sign up with email verification.
  - Login and logout functionality.
  - Password recovery using the "Forgot Password" feature.
  
### Admin Features
- **Resource Management**: 
  - Add, update, or delete resources.
  - Manage lectures and PDFs within each resource.
- **User Management**: 
  - View and manage user accounts.
  
## Technologies Used

- **Frontend**: React, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Email Services**: Nodemailer

## Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/yourusername/placement-preparation-platform.git
   cd placement-preparation-platform

2. **Install dependencies for both backend and frontend**:
   
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install

3. **Set up environment variables**

4. **Run the application:**

## Usage

### User:

1. **Sign up and verify your email.**
2. **Log in to access the resources.**
3. **Browse and view available lectures and PDFs.**

### Admin:

1. **Log in to the admin panel.**
2. **Add, update, or delete resources, lectures, and PDFs.**
3. **Manage user accounts.**

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature-branch
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add new feature'
5. **Push to the branch**
   ```bash
   git push origin feature-branch
6. **Open a Pull Request**
   ```bash
   This code can be directly used in your `README.md` file under the "Usage" and "Contributing" sections.

## Support Me
[![Buy me a coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=khushisrivastava&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/khushisrivastava)




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
