# Social Media App

This is a social media application built with Node.js and TypeScript on the backend, and React with Vite, Redux, Redux Toolkit, and Redux Saga on the frontend. The project currently fetches post data from a MongoDB database, while the user data is being used as dummy data that can be replaced with real data later.

## Features

- **Backend**: Node.js, TypeScript, Express, Mongoose
- **Frontend**: React, Vite, Redux, Redux Toolkit, Redux Saga
- **Database**: MongoDB (posts data), dummy user data for testing

## Project Structure

### Backend

- **controllers**: Contains the logic for handling HTTP requests.
- **routes**: Defines API endpoints.
- **models**: Contains Mongoose models for database schemas.
- **types**: TypeScript types and interfaces.

### Frontend

- **src**: Contains the React app code.
  - **components**: Reusable React components.
  - **features**: Redux slices and sagas.
  - **pages**: Different pages of the app.
  - **store**: Redux store configuration.
  - **types**: TypeScript types and interfaces.

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
