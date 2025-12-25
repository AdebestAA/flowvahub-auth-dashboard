import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard.tsx'
import Signup from './pages/signup.tsx'
import Signin from './pages/signin.tsx'
import { AuthContextProvider } from './context/AuthContext.tsx'
import ProtectedRoutes from './components/ProtectedRoutes.tsx'

const router = createBrowserRouter([
  
  {element:<ProtectedRoutes/>,children:[
    {path:"/dashboard", element:<Dashboard/>},
    {path:"/",element:<App />},
  ]},
  {path:"/signup",element:<Signup/>,},
  {path:"/signin",element:<Signin/>}
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
