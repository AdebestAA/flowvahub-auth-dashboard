import { zodResolver } from '@hookform/resolvers/zod'
import  { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


import { useAuthContext } from '../context/AuthContext'
import type {typeAuthFunction, typeSignUpFormData } from '../utils/types'

import { Link, useNavigate } from 'react-router-dom'
import { signUpFormSchema } from '../utils/schemas'
import Spinner from '../utils/Spinner'







const asideClass = 'flex items-center   px-3  border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus-within:border-[#9013fe] border'

const inputClass = " h-full text-sm text-grayOne  py-[11px] outline-none"


const Signup = () => {

    const [passwordShowState,setPasswordShowState] = useState<{showPassword:boolean,showConfirmPassword:boolean}>({
        showPassword:false,
        showConfirmPassword:false,
    })
    const navigate = useNavigate()
   
const {handleSignUp,errorMsg,setErrorMsg,isLoading} = useAuthContext() 


    const {register,handleSubmit,formState:{errors},watch} = useForm<typeSignUpFormData>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
          email: '',
          username:"",
          password: '',

        },
      })



const onSubmit = async(formData:Pick<typeSignUpFormData, "email" |"password" | "username" >)=>{

 const response:Partial<typeAuthFunction<string,boolean>> = await handleSignUp({email:formData.email,password:formData.password,username:formData.username})

    if (response.success) {
        navigate("/signin")
    }
    
}



useEffect(()=>{

const errorFromForm:string | undefined =errors?.email ? errors?.email?.message : errors?.password ? errors?.password?.message : errors?.confirmPassword?.message ? errors.confirmPassword.message :errors?.username?.message ? errors?.username?.message :errorMsg
setErrorMsg(errorFromForm ? errorFromForm : "")


},[errors])

  return (
    <div className='bg-primary min-h-screen pt-12'>


    <div className='bg-white lg:w-[50%] md:w-[70%] w-[95%] mx-auto px-6 py-4 rounded-lg'>
<section className='text-center '>
    <h1 className='font-bold text-2xl text-primary'>Create Your Account</h1>
    <p className='text-grayOne mt-2 text-sm'>Sign up to manage your tools</p>
</section>

{errorMsg &&<section className='bg-red-500/20 border-red-500/30 border-1 my-6  p-2 rounded-md'>
    <p className='text-redOne'>{errorMsg}</p>
</section>}


<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3'>

    {/* Email */}
<div className='flex flex-col gap-y-2'>
    <label htmlFor="email" className='peer-focus:text-blue-500 '>Email</label>
    <aside className={asideClass}>
    <input
    placeholder='your@email.com'
    {...register("email")}
    className={` w-full ${inputClass}`}   type="email"  id="email" />

    </aside>
</div>
    {/* username */}
<div className='flex flex-col gap-y-2'>
    <label htmlFor="username" className='peer-focus:text-blue-500 '>Username</label>
    <aside className={asideClass}>
    <input
    placeholder='enter your username'
    {...register("username")}
    className={` w-full ${inputClass}`}   type="text"  id="username" />

    </aside>
</div>

{/* password */}
<div className='flex flex-col gap-y-2'>
    <label htmlFor="password" className='peer-focus:text-blue-500 '>Password</label>
    <aside className={asideClass}>
    <input
    placeholder='*******'
    {...register("password")}
    className={` w-[90%] ${inputClass}`}   type={passwordShowState.showPassword ? "text" : "password" } id="password" />
    <button type='button'
    onClick={()=> setPasswordShowState({...passwordShowState,showPassword:!passwordShowState.showPassword})}
    className='w-[10%] h-full text-sm text-grayOne  py-[11px] cursor-pointer'>{passwordShowState.showPassword ? "Hide" : "Show" }</button>

    </aside>
</div>

{/* Confirm Password */}
<div className='flex flex-col gap-y-2'>
    <label htmlFor="confirm-password" className='peer-focus:text-blue-500 '>Confirm Password</label>
    <aside className={asideClass}>
    <input
    placeholder='*******'
    {...register("confirmPassword")}
    type={passwordShowState.showConfirmPassword ? "text" : "password" }
    className={` w-[90%] ${inputClass}`}   id="confirm-password" />
    <button 
    type='button'
    onClick={()=> setPasswordShowState({...passwordShowState,showConfirmPassword:!passwordShowState.showConfirmPassword})}

    className='w-[10%] h-full text-sm text-grayOne  py-[11px] cursor-pointer'>{passwordShowState.showConfirmPassword ? "Hide" : "Show" }</button>

    </aside>

</div>


<div>
    <button
    disabled={isLoading}
    type='submit' className='bg-primary w-full rounded-full py-4 text-white font-medium cursor-pointer '>
       
        {isLoading ? <Spinner/> : " Sign up Account"}
       

    </button>
</div>
</form>

<div className='text-grayOne text-center my-4'>Already have an account <Link to={"/signin"} className='text-primary'>Log in</Link></div>
    </div>
    </div>
  )
}

export default Signup