# Soar

This is a modern web application built using **Vite**, **ReactJS**, **TypeScript**, **Redux Toolkit**, and **TailwindCSS**. It is designed to be fast, maintainable, and scalable.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jeyk333/soar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd soar
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Features

- **Fast Development**: Built with Vite for lightning-fast builds.
- **TypeScript Support**: Provides type safety and better developer experience.
- **State Management**: Redux Toolkit for managing the application state efficiently.
- **Responsive Design**: TailwindCSS for styling and responsive design.
- **Scalable Architecture**: Clean and modular folder structure.

## Folder Structure

The project follows a modular and scalable folder structure:

```
soar/
├── public/         # Static assets
├── src/
│   ├── assets/     # Images, fonts, and other assets
│   ├── components/ # Reusable components
│   ├── features/   # Redux slices and related logic
│   ├── pages/      # Page components
│   ├── services/   # API services and utilities
│   ├── store/      # Redux store configuration
│   ├── styles/     # Global and TailwindCSS styles
│   ├── App.tsx     # Root application component
│   ├── main.tsx    # Application entry point
├── .eslintrc.js    # ESLint configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json   # TypeScript configuration
└── vite.config.ts  # Vite configuration
```

## Scripts

Here are the available scripts:

- **Start Development Server**:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- **Build for Production**:

  ```bash
  npm run build
  # or
  yarn build
  ```

- **Preview Production Build**:

  ```bash
  npm run preview
  # or
  yarn preview
  ```

- **Lint the Code**:
  ```bash
  npm run lint
  # or
  yarn lint
  ```

## Technologies Used

- **[Vite](https://vitejs.dev/)**: A fast build tool for modern web projects.
- **[ReactJS](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript for better development experience.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: A modern approach to managing state in React.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
