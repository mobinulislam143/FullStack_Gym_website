Next.js Dashboard Project

This project is a Next.js application designed for managing dashboards with separate modules for authentication, users, trainers, and class scheduling. Below is the documentation for the project routes and features.
🚀 Getting Started
Prerequisites

Ensure you have the following installed:

    Node.js (>= 14.x)
    npm or yarn

Installation

    Clone the repository:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install
# or
yarn install

Run the development server:

    npm run dev
    # or
    yarn dev

    Open the application in your browser at http://localhost:3000.

📂 Project Structure

├── app/
│   ├── components/          # Reusable components (e.g., Navbar, Sidebar)
│   ├── dashboard/           # Dashboard pages
│   ├── fonts/               # Custom fonts
│   ├── product/             # Product-related routes or components
│   ├── redux/               # Redux slices and configuration
│   ├── user/                # User management (login, registration, trainer)
│   │   ├── login/           # Login page
│   │   ├── registration/    # Registration page for trainees
│   │   ├── trainer/         # Trainer management page
│   ├── ClassSchedule.js     # Class schedule management logic
│   ├── globals.css          # Global CSS styling
│   ├── layout.js            # Layout configuration
│   ├── not-found.js         # 404 error page
│   └── page.js              # Main entry point
├── public/                  # Static assets (e.g., images, icons)
├── node_modules/            # Dependencies
├── package.json             # Project configuration and scripts

🌐 Application Routes
Public Routes
Path	Description
/	Landing/Home page
/user/login	Login page for users
/user/registration	Registration page for trainees
/not-found	404 page
Admin Routes
Path	Description
/dashboard	Admin dashboard
/dashboard/trainers	Manage trainers (CRUD operations)
/dashboard/classes	Manage class schedules
Trainer Routes
Path	Description
/dashboard/trainer	Trainer dashboard (view assigned classes)
⚙️ Features

    Authentication
        Login page with JWT-based authentication (/user/login).
        Registration page for new trainees (/user/registration).

    Admin Dashboard
        Manage trainers: Add, update, and delete trainers.
        Class scheduling: Fetch schedules and create new schedules (validation included).

    Trainer Dashboard
        View assigned classes with trainee details.

    API Integration
        Uses Axios for API calls to fetch and manage trainer and class data.
        Handles loading states and error messages.

    State Management
        Uses Redux Toolkit for managing state across the app.
        Handles actions such as login, trainer management, and class bookings.

🖥️ Technologies Used

    Frontend: Next.js, React, Tailwind CSS
    State Management: Redux Toolkit
    Styling: CSS, Tailwind CSS
    API Handling: Axios
    Authentication: JSON Web Tokens (JWT)

📜 Usage

    Run Locally

npm run dev

Build for Production

npm run build

Start Production

    npm start

💡 Additional Notes

    Update the API endpoints in redux or Axios requests as per your backend configuration.
    Customize the styles in globals.css or the Tailwind CSS configuration as needed.

Feel free to contribute or raise issues for enhancements! 😊
