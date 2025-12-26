
import IconPlaceholder from '../../utils/icon-placeholder'
import { menuList } from '../../utils/menuList';
import { useNavigate } from 'react-router-dom';


const MenuBarDesktop = () => {
const navigate = useNavigate()
  return (

    <div className='w-[16%] overflow-y-auto bg-white sticky top-0  hidden lg:block max-h-full h-screen     border-r border-gray-200 '>

<article className='w-full lg:flex flex-col justify-between min-h-screen '>
    {/* image section */}
<header className='mx-4 mt-2'>
   <img src="/flowva-logo.png" className='h-[70px]' alt="logo" />
</header>

<section className=' gap-y-2 flex flex-col justify-between  '>
    {menuList.map((item,_)=>{
        
        return <button

        onClick={()=>{

            if (item.title == "Home") {
        navigate("/")
    }
    else{
        alert("page not currently available")
    }

    
}}
 key={item.id} className='flex items-center  hover:bg-purple-200 hover:text-primary px-2 py-2 rounded-lg  gap-x-4 text-lg cursor-pointer mx-2 transition-all ease-in-out duration-300'>
    <span><IconPlaceholder style=''/></span>
    <span>{item.title}</span>
</button>
    })}
</section>

<footer className='flex items-center gap-x-2 mx-4 my-2 border-t border-grayOne pt-2'>
    <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center font-semibold bg-[brown]'>
    {JSON.parse(localStorage.getItem("userInfo") as string).username.charAt(0).toUpperCase()}
    </div>
    <div className='text-sm'>
        <h1 className='font-semibold'>{JSON.parse(localStorage.getItem("userInfo") as string).username}</h1>
        <h1>{JSON.parse(localStorage.getItem("userInfo") as string).email}</h1>
    </div>
</footer>
    </article>

    </div>
        
  )
}

export default MenuBarDesktop