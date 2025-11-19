De Ovie Engineering Services

🛠️ Project Overview
This repository hosts the source code for the De Ovie Engineering Services company website. It is a modern, responsive single-page application (SPA) built to showcase the company's services, portfolio, and contact information to potential clients.

| Aspect | Detail |
|---|---|
| Live Demo | https://www.deovieengineeringservices.com.ng/ |
| Frontend Framework | React (using modern functional components and hooks) |
| Build Tool / Bundler | Vite (for lightning-fast development and optimized production builds) |
| Styling | Tailwind CSS (for utility-first, rapid, and responsive design) |
| Deployment Platform | Vercel (configured via vercel.json for seamless continuous deployment) |

✨ Features
The application leverages a modern technology stack to deliver a fast and professional user experience:
 * Responsive Layout: The design is optimized for all screen sizes (mobile, tablet, and desktop) using Tailwind CSS utilities.
 * Fast Refresh (HMR): Utilizes Vite and the @vitejs/plugin-react-swc plugin for incredibly fast hot module replacement during development.
 * Clean Architecture: Clear separation of concerns with code housed in the src/ directory (including components and pages).
 * Service Showcase: Dedicated sections to detail the specific engineering services offered by De Ovie.
 * Contact Form: A direct channel for potential clients to reach the engineering team (implementation details based on server setup).

🚀 Getting Started
Follow these steps to set up the project locally for development or testing.
Prerequisites
You must have Node.js (version 14.0 or higher recommended) and npm or yarn installed on your system.

Installation
 * Clone the Repository:
   git clone https://github.com/miracle-emmanuel/De_Ovie-engineering-services.git
cd De_Ovie-engineering-services

 * Install Dependencies:
   npm install

Available Scripts
In the project directory, you can run:
| Command | Description |
|---|---|
| npm run dev | Runs the app in development mode using Vite. Opens http://localhost:5173 (or similar port). |
| npm run build | Builds the app for production to the dist folder. |
| npm run preview | Serves the production build locally for testing before deployment. |

💻 Customization and Development

Styling
The project is styled using Tailwind CSS. Configuration files are available in:
 * tailwind.config.js: Defines custom colors, fonts, and theme settings.
 * postcss.config.js: PostCSS configuration for processing Tailwind directives.
   
⚙ Configuration
 * Vite Configuration: Custom build and development settings are managed in vite.config.js.
 * Vercel Configuration: Deployment settings for the Vercel platform are defined in vercel.json.

☁️ Deployment
This project is configured for deployment on Vercel. Any push to the main branch is automatically built and deployed to the live URL: https://de-ovie-engineering-services.vercel.app.
