# Ursula Prinz - Psychologist

## About the Project
**Ursula Prinz - Psychologist** is a professional website designed for a psychotherapist to showcase services, provide insights into psychotherapy, and offer information about the therapist. The project was developed with multiple meetings and discussions to ensure the best representation of the client. Special attention was given to achieving optimal performance, meeting the client's expectations, and adhering to technical best practices.

## Technologies Used
- **React** (Frontend framework)
- **TypeScript** (Ensuring type safety)
- **CSS** (Styling the application)
- **Vite** (Development and build tool for fast performance)
- **React Context API** (State management)

## Performances
- **React Router**: Used for efficient navigation between pages, allowing dynamic content loading without reloading the entire page.
- **Lazy Loading for Images**: Implemented lazy loading for images, improving the initial load time and performance, especially for pages with heavy media content.
- **Lighthouse Audits**: The application has been optimized according to the recommendations from Lighthouse for optimal performance and accessibility.

## Getting Started
To set up the project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   git clone https://github.com/your-username/ursula-prinz-psychologist.git

2. Navigate to the project directory:
   cd ursula-prinz-psychologist

3. Install dependencies:
   npm install

### Running the Project
To start the development server, run:
npm run dev

This will launch the application on `localhost` (default: `http://localhost:5173/` with Vite).

## Project Structure
The project follows a structured architecture:

```
src/
 ├── components/         # Reusable UI components
 │   ├── home-page/         # Components related to the homepage
 │   ├── about-page/        # Components for the about section
 │   ├── process-page/      # Components explaining the therapy process
 │   ├── data-policy/       # Data policy and privacy-related sections
 │   ├── reusableSections/  # Reusable sections shared across multiple pages
 │   ├── reusable/          # Smaller, reusable UI components
 │   ├── context/            # Global state management using React Context API
 │
 │
 ├── pages/              # Page structures and routing
 │   ├── HomePage.tsx
 │   ├── AboutPage.tsx
 │   ├── ProcessPage.tsx
 │   ├── ImprintPage.tsx
 │   ├── PrivacyPage.tsx
 │
 │
 ├── main.tsx            # Entry point of the application
 ├── App.tsx             # Main application wrapper
```

## Features
- Informational sections about psychotherapy
- Overview of therapist’s services
- Contact informations
- Responsive design for various devices
- State management using **React Context API**
- Well-structured **pages** directory for better organization

## Live preview
https://sensational-melomakarona-031af8.netlify.app/



