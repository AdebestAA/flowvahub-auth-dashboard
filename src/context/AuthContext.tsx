import {  createContext, useContext, useEffect, useState } from "react";
import type { typeAuthContext, typeAuthFunction, typeSignInFormData, typeSignUpFormData } from "../utils/types";

import clientSupabase from "../utils/supabase/client-supabase";
import type { Session } from "@supabase/supabase-js";





const AuthContext= createContext<typeAuthContext | undefined>(undefined)


export const AuthContextProvider = ({children}:{children:React.ReactNode})=>{
const [user,setUser] = useState<string>("")
const [errorMsg,setErrorMsg] = useState<string>("")
const [session,setSession] = useState<Session | null>(null)
const [isLoading,setIsLoading] = useState<boolean>(false)
const [sessionLoading,setSessionLoading] = useState<boolean>(true)


// SignUp function
const handleSignUp = async(formData:Pick<typeSignUpFormData, "email" |"password" >):Promise<Partial<typeAuthFunction<string,boolean>>>=>{
setIsLoading(true)
   try {
    const {data,error} = await clientSupabase.auth.signUp(formData)

    if (error) {
        // console.log(error," something went wrong");
        setErrorMsg(error.message ? error.message : "something went wrong")
        setIsLoading(false)
        return {
            success:false
        }
    }
    
    setIsLoading(false)
    // console.log(data);
    
    return { 
        success:true
    }
   
    
} catch (error) {
    // console.log(error);
    setIsLoading(false)
    setErrorMsg("something went wrong, please try again")
    return {
        success:false
    }
   }
    
}

// SignIn function
const handleSignIn = async(formData:typeSignInFormData):Promise<Partial<typeAuthFunction<string,boolean>>> =>{
setIsLoading(true)
   try {
    const {data,error} = await clientSupabase.auth.signInWithPassword(formData)


    if (error) {
        // console.log(error.message," something went wrong");
        setIsLoading(false)
        setErrorMsg(error.message ? error.message : "something went wrong")
        return {
            success:false,
            message:error.message
        }
    }
    
    
    // console.log("data",data);
    setIsLoading(false)
    
    return {
        success:true,
        message:"sucessfully sign up"
    }
    
    
   } catch (error) {
    // console.log(error);
    setIsLoading(false)
    setErrorMsg("something went wrong, please try again")

    return {
        success:false,
        message:"something went wrong, please try again"
    }
   }
    
}


const keepTrackOfSession = async()=>{

  const {data,error} =await clientSupabase.auth.getSession()

//   console.log("data",data);
  setSession(data.session)
  setSessionLoading(false)
//   console.log("error",error);
  
}
useEffect(()=>{

   keepTrackOfSession()

   const {data:listenter} = clientSupabase.auth.onAuthStateChange(async(_event,session)=>{

    // console.log("event",_event);
    setSession(session)
    // console.log("authStateChangeSession",session);
    
   })


   return ()=> listenter.subscription.unsubscribe()
},[])


useEffect(()=>{

    if (!errorMsg) return
    const timeoutId = setTimeout(() => {
        setErrorMsg("")
    }, 3000);

    return ()=> clearTimeout(timeoutId)
},[errorMsg])

    return <AuthContext.Provider value={{
        user,
        handleSignUp,
        handleSignIn,
        errorMsg,
        setErrorMsg,
        session,
        isLoading,
        sessionLoading
        
        }}>
        {children}
    </AuthContext.Provider>
}




export const useAuthContext =() =>{

    return useContext(AuthContext) as typeAuthContext
}