import {z} from "zod"
export const signUpFormSchema = z.object({
    email:z.email({message:"please enter a valid email"}),
password:z.string({message:"please enter a valid password"}).min(8,{message:"password must be more than 8 characters"}),
confirmPassword:z.string({message:"confirm your password"}),

}).refine((data)=> data.password == data.confirmPassword, {message:"passwords don't match",path:["confirmPassword"]})

export const signInFormSchema = z.object({
    email:z.email({message:"please enter a valid email"}),
password:z.string({message:"please enter a valid password"}).min(8,{message:"password must be more than 8 characters"})

})