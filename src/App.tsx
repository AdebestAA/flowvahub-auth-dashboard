
import './App.css'
import clientSupabase from './utils/supabase/client-supabase'

function App() {
 const handleSignOut = async()=>{


  await clientSupabase.auth.signOut()
 }

  return (
    <>
     <h1>Flower Hub</h1>
     <br />
     <br />
     <br />
     <button onClick={handleSignOut}>sign out</button>
    </>
  )
}

export default App
