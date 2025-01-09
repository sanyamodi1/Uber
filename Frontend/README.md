# Uber Frontend

This project is the frontend for the Uber-like application. It is built using React and Vite, and it includes various components, pages, and context providers to manage the application's state and functionality.

## Project Structure

The project is organized into the following directories and files:

### Directories

- **components**: Contains reusable UI components.
- **context**: Contains context providers for managing global state.
- **pages**: Contains the main pages of the application.

### Files

- **App.jsx**: The main application component that sets up the routes.
- **index.css**: The main CSS file that includes Tailwind CSS directives.
- **main.jsx**: The entry point of the application that renders the root component.

## Directories and Files

### components

- **ConfirmRide.jsx**: Component for confirming a ride.
- **LocationSearchPanel.jsx**: Component for searching locations.
- **LookinForDriver.jsx**: Component for displaying the "Looking for a driver" status.
- **VehiclePanel.jsx**: Component for selecting a vehicle.
- **WaitForDriver.jsx**: Component for displaying the "Waiting for driver" status.

### context

- **CaptainContext.jsx**: Context provider for managing captain-related state.
- **UserinContext.jsx**: Context provider for managing user-related state.

### pages

- **CaptainHome.jsx**: Page for the captain's home.
- **CaptainLogin.jsx**: Page for captain login.
- **CaptainProtectedWrapper.jsx**: Wrapper component for protecting captain routes.
- **CaptainSignup.jsx**: Page for captain signup.
- **Home.jsx**: Home page for users.
- **Start.jsx**: Start page for the application.
- **UserLogin.jsx**: Page for user login.
- **UserLogout.jsx**: Page for user logout.
- **UserProtectedWrapper.jsx**: Wrapper component for protecting user routes.
- **UserSignup.jsx**: Page for user signup.
