
import { useNavigate } from 'react-router-dom'
import './App.css'
import clientSupabase from './utils/supabase/client-supabase'

function App() {
  const navigate = useNavigate()
 const handleSignOut = async()=>{
  await clientSupabase.auth.signOut()
 }

  return (
    <>
    <div className='px-4'>

     <h1 className='text-primary text-lg font-bold'>Flower Hub</h1>
<br />
<br />
     <button
     onClick={()=>{

       navigate("/dashboard")
     }}
     className='border border-gray-200 '>dashboard</button>
     <br />
     <br />
     <br />
     <button onClick={handleSignOut}  className='bg-red-500 rounded-md px-2'>sign out</button>
       </div>
    </>
  )
}

export default App
