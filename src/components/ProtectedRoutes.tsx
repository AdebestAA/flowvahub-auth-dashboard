
import { useAuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {session,sessionLoading} = useAuthContext()
  
    

    if (sessionLoading) {
        return <div>loading...</div>
    }
if (!session) {
    return <Navigate to={"/signin"} replace />
}
  return (
    <Outlet/>
  )
}

export default ProtectedRoutes