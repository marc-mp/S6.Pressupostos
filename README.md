# Pressupostos (Budget)

![pressupostosImage](https://github.com/user-attachments/assets/186e97ce-1a15-4904-8584-af1d91ac57e6)


Welcome to the **Pressupostos (Budget) Application**! This project, developed with **React, Vite, CSS, Tailwind, and Firebase**, allows users to quickly calculate and manage website budgets.

## ✨ Features

- **Intuitive Interface**: A welcome screen explaining the purpose and functionality of the application.
- **Service Selection System**: Checkboxes to adjust the budget based on user needs.
- **Dynamic Configuration**: Users can specify the number of pages and languages for web services.
- **Budget Generation Form**: Collects user data for budget creation.
- **Budget List**: Includes sorting filters and a search function for efficient management.

## 🛠 Technologies Used

- **React** - Library for building user interfaces.
- **Vite** - Development tool optimizing build speed.
- **CSS & Tailwind** - Responsive and modern styling.
- **Firebase** - Real-time data storage and management.

## 🔧 Installation and Execution

```bash
# Clone this repository
git clone https://github.com/marc-mp/S6.Pressupostos.git

# Navigate to the project folder
cd S6.Pressupostos

# Install dependencies
npm install

# Run the development server
npm run dev

# Open your browser and go to
http://localhost:5173/
```

## 🔧 Firebase Configuration

1. Create a project in [Firebase Console](https://console.firebase.google.com/).
2. Add a web app and configure your `.env.local` file with the provided credentials:

```env
VITE_FIREBASE_API_KEY="your_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"
```

3. Ensure Firestore is set up to store budgets.

---

👨‍💻 Developed by *Marc Morell*


