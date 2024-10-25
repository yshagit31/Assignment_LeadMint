# Frontend Web Application Assignment

## Introduction
In this assignment, you are tasked with creating a fully functional frontend for a web application using Ripple UI components. You will design three core pages: a login page, a registration page, and a home page. The login and registration pages will have basic input validation, while the home page will showcase dynamic content using cards and graphs. The goal is to create an intuitive, responsive, and visually appealing user interface, ensuring a seamless user experience.

## Project Structure
- `src/`: Contains all the source code.
  - `components/`: Contains the React components for different pages.
    - `Login.jsx`: The login page component.
    - `Register.jsx`: The registration page component.
    - `Home.jsx`: The home page component.
  - `App.js`: The main application component that defines the routes.

## Pages Overview

### 1. Login Page
- **Features**:
  - Input fields for email and password.
  - Frontend validation for email format and password presence.
  - Utilizes Ripple UI components for form layout and styling.
- **Expected Output**: A responsive and visually consistent login page with basic validation.

### 2. Register Page
- **Features**:
  - Input fields for email, password, and confirm password.
  - Validation to ensure the password fields match.
  - Utilizes Ripple UI for consistent design and responsiveness.
- **Expected Output**: A functional registration page that performs client-side validation on password match.

### 3. Home Page with Navigation Bar and Cards
- **Features**:
  - A navigation bar for accessing different sections of the site.
  - Cards displaying various content (e.g., user statistics or recent activities).
  - Graphs to visualize data using available Ripple UI components.
- **Expected Output**: A fully styled home page featuring a navigation bar, cards, and data graphs using Ripple UI. The layout should be responsive and user-friendly.

## Tech Stack
- **React.js**: A JavaScript library for building user interfaces.
- **Ripple UI**: A lightweight component library for modern and responsive UI elements. You can explore it [here](https://www.ripple-ui.com).

## Routing
- **`/`**: This route renders the registration page.
- **`/login`**: This route renders the login page.
- **`/home`**: This route renders the home page, which includes a navigation bar and dynamic content. Clicking on the navigation bar items will redirect you to the corresponding pages.

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
