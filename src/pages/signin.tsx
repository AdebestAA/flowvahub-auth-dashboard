import { zodResolver } from '@hookform/resolvers/zod'
import  { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../context/AuthContext'
import type { typeAuthFunction, typeSignInFormData } from '../utils/types'
import { Link, useNavigate } from 'react-router-dom'
import { signInFormSchema } from '../utils/schemas'
import Spinner from '../utils/Spinner'



const asideClass = 'flex items-center   px-3  border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus-within:border-[#9013fe] border'

const inputClass = " h-full text-sm text-grayOne  py-[11px] outline-none"


const Signin = () => {

    const [passwordShowState,setPasswordShowState] = useState<{showPassword:boolean}>({
        showPassword:false,
     
    })
    const navigate = useNavigate()
    
const {handleSignIn,errorMsg,setErrorMsg,isLoading} = useAuthContext() 


    const {register,handleSubmit,formState:{errors}} = useForm<typeSignInFormData>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
          email: '',
          password: '',
        },
      })



const onSubmit = async(formData:typeSignInFormData)=>{

 const respone:Partial<typeAuthFunction<string,boolean>>= await handleSignIn({email:formData.email,password:formData.password})

    // console.log(formData);
    if (respone.success) {
   navigate("/dashboard")
    }
    
}



useEffect(()=>{
console.log(errors);
const errorFromForm:string | undefined =errors?.email ? errors?.email?.message : errors?.password ? errors?.password?.message : ""
setErrorMsg(errorFromForm ? errorFromForm : "")


},[errors])

  return (
    <div className='bg-primary min-h-screen pt-12'>


    <div className='bg-white lg:w-[50%] md:w-[70%] w-[95%] mx-auto px-6 py-4 rounded-lg'>
<section className='text-center '>
    <h1 className='font-bold text-2xl text-primary'>Log in to flowva</h1>
    <p className='text-grayOne mt-2 text-sm'>Log in to receive personalized recommendations</p>
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



<div>
    <button 
    disabled={isLoading}
    type='submit' className='bg-primary w-full rounded-full py-4 text-white font-medium cursor-pointer'>{isLoading ? <Spinner/> :"Login"}</button>
</div>
</form>

<div className='text-grayOne text-center my-4'>Don't have an account? <Link to={"/signup"} className='text-primary'>Sign up</Link></div>
    </div>
    </div>
  )
}

export default Signin