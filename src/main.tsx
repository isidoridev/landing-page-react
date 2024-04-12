import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './components/error-page.tsx'
import InterestCard from './components/InterestCard.tsx'
import { UserCard } from './components/UserCard.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/interests",
    element: <InterestCard />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
