import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProviders from './Providers/AuthProviders.jsx'

import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
