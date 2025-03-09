import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <AuthProvider>
    <RouterProvider router={router} >

    {/* <App /> */}
    </RouterProvider>
    </AuthProvider>
    </SnackbarProvider>
  </StrictMode>,
)
