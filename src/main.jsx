import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import { router } from './router/indexRoute'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import App from "./Pages/App"

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/App",
    element: <App />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
