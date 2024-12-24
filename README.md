# Soar

A performant web application built using **Vite**, **ReactJS**, **TypeScript**, **Redux Toolkit**, and **TailwindCSS**. This project is structured for scalability and adheres to modern development standards.

## Features

- **Vite** for blazing-fast development and optimized builds.
- **ReactJS** for building dynamic user interfaces.
- **TypeScript** for type safety and better developer experience.
- **Redux Toolkit** for state management.
- **TailwindCSS** for utility-first styling.
- **Lazy Loading** to optimize performance.
- **Accessibility Standards** with ARIA attributes and testing tools.

## Technologies Used

- **Vite**: Development build tool providing fast builds and hot module replacement.
- **ReactJS**: Library for building dynamic user interfaces.
- **TypeScript**: Typed superset of JavaScript for catching errors early.
- **Redux Toolkit**: Simplified state management for React applications.
- **TailwindCSS**: Utility-first CSS framework for designing responsive layouts.
- **Chart.js**: JavaScript library for creating beautiful charts.
- **Day.js**: Lightweight library for date manipulation and formatting.
- **Axios**: Promise-based HTTP client for making API calls.
- **React Slick**: Carousel/slider library for React applications.
- **Yup**: Schema validation library for form validation.
- **ESLint**: Linter for identifying and fixing problems in JavaScript/TypeScript code.
- **Prettier**: Code formatter to ensure consistent style.

## Installation

To set up the project locally:

```bash
# Clone the repository
git clone https://github.com/jeyk333/soar.git

# Navigate to the project directory
cd soar

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Folder Structure

Here’s an overview of the project structure:

```
soar/
├── public/                # Static assets
├── src/                   # Source code
│   ├── api/               # API service functions
│   ├── assets/            # Images, icons, and static assets
│   ├── components/        # Reusable React components
│   ├── constants/         # Static constants used throughout the app
│   ├── features/          # Redux slices and related logic
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page-level components
│   ├── router/            # React Router configuration
│   ├── store/             # Redux store configuration
│   ├── styles/            # Global and component-specific styles
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── main.tsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project metadata and scripts
```

### Additional Details

- **`constants/`**: Contains static constants such as API endpoints, configuration values, and other global constants.
- **`utils/`**: Includes reusable utility functions like data manipulation, date formatting, or validation helpers.

## Scripts

Here are some commonly used npm scripts:

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to identify and fix code issues.
- `npm run format`: Format code using Prettier.

## Accessibility

This project adheres to basic accessibility standards:

- ARIA labels for assistive technologies.
- Keyboard navigation for all interactive elements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
