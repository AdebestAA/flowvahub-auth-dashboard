import {z} from "zod"
import type { signInFormSchema, signUpFormSchema } from "./schemas"
import type { Session } from "@supabase/supabase-js"
import type { IconType } from "react-icons/lib"



// type for signup
export type typeSignUpFormData = z.infer<typeof signUpFormSchema>

// type for signin 
export type typeSignInFormData = z.infer<typeof signInFormSchema>


// type for handleSignIn 

export interface typeAuthFunction<S,B>{
    message:S,
    success:B
}


// AuthContent Types
export type typeAuthContext = {
    user:string,
    handleSignUp:(formData:Pick<typeSignUpFormData, "email" |"password" >)=> Promise<Partial<typeAuthFunction<string,boolean>>>,
    handleSignIn:(formData:Pick<typeSignUpFormData, "email" |"password" >)=> Promise<Partial<typeAuthFunction<string,boolean>>>,
    errorMsg:string,
    setErrorMsg:React.Dispatch<React.SetStateAction<string>>,
    session:Session | null,
    isLoading:boolean,
    sessionLoading:boolean
} 


export interface typeAllRewards<N,S> {
    id:N,
    title:S,
    description:S,
    points:N,
    icon?:IconType
}

// Menulist Type

export type typeMenuList = {id:number,title:string,icon:IconType |null} 