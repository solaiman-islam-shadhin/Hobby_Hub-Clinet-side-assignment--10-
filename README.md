# React + Vite
# Hobby_Hub

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Welcome to Hobby_Hub! A modern web application designed to be a central place for users to discover, share, and engage with their hobbies.

Currently, two official plugins are available:
## 🚀 Features

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- **Interactive UI**: Built with React and Vite for a fast and responsive user experience.
- **Engaging Animations**: Utilizes libraries like `react-awesome-reveal` and `lottie-web` to create a dynamic and engaging interface.
- **Real-time Notifications**: Integrated `react-toastify` for user-friendly notifications.
- **AI-Powered**: Leverages Firebase's AI capabilities to provide smart features.
- **Robust Backend**: Powered by Firebase for reliable and scalable services.

## React Compiler
## 🛠️ Tech Stack

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
- **Frontend**:
  - React
  - Vite
  - React Awesome Reveal for animations.
  - React Toastify for notifications.
  - Lottie-web for animations.

## Expanding the ESLint configuration
- **Backend & Services**:
  - Firebase
  - Firebase AI

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## 📋 Prerequisites

- Node.js (version 18.x or higher recommended)
- npm or yarn
- A Firebase project.

## ⚙️ Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd Hobby_Hub
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Set up Firebase:**
    - Create a `.env.local` file in the root of the project.
    - Add your Firebase project configuration to the `.env.local` file.

    ```
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

## 🏃‍♂️ Running the Project

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
