# Social Media App

This is a social media application built with Node.js and TypeScript on the backend, and React with Vite, Redux, Redux Toolkit, and Redux Saga on the frontend. The project currently fetches post data from a MongoDB database, while the user data is being used as dummy data that can be replaced with real data later.

## Features

- **Backend**: Node.js, TypeScript, Express, Mongoose
- **Frontend**: React, Vite, Redux, Redux Toolkit, Redux Saga
- **Database**: MongoDB (posts data), dummy user data for testing

## Project Structure

### Backend

Located in the `backend/` directory:

- `dist/`: Compiled JavaScript files.
- `node_modules/`: Project dependencies.
- `package.json`: Backend package configuration.
- `package-lock.json`: Exact versions of installed dependencies.
- `src/`: Source code, including controllers, models, routes, and types.
- `tsconfig.json`: TypeScript configuration.

### Frontend

Located in the `frontend/src/` directory:

- `App.tsx`: Entry point for the React app.
- `assets/`: Static assets like images and fonts.
- `component/`: Reusable React components.
- `context/`: React context for global state management.
- `dummyData.ts`: Dummy data for testing user information.
- `index.css`: Global styles.
- `main.tsx`: The main entry file for rendering the React app.
- `pages/`: Different pages of the app.
- `router.ts`: Route configuration for the app.
- `types/`: TypeScript types and interfaces.
- `vite-env.d.ts`: Vite environment definitions.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
