
import { useNavigate } from 'react-router-dom';
import { useMenuBarState } from '../../store/useMenuBarState';
import IconPlaceholder from '../../utils/icon-placeholder'
import { menuList } from '../../utils/menuList';

import { IoCloseSharp } from "react-icons/io5";


const MenuBar = () => {
const navigate = useNavigate()
    const {menuState,close} = useMenuBarState()
  return (
    <section className={`lg:hidden fixed top-0 w-screen h-screen z-30  ${menuState ? "block" : "hidden"}`}
    style={{
      backdropFilter:"blur(1px)"
    }}
    >
    <div className=' w-[70%] md:w-[60%] h-full  bg-white   flex flex-col justify-between relative'>
<button onClick={close} className='cursor-pointer absolute right-[5%] top-2 text-lg font-semibold '><IoCloseSharp size={30}/></button>
<header className='mx-4 mt-2'>
   <img src="/flowva-logo.png" className='h-[70px]' alt="logo" />
</header>

<section className='flex flex-col justify-between  h-[60%]'>
    {menuList.map((item,_)=>{
        
return <button

onClick={()=>{

    if (item.title == "Home") {
        navigate("/")
    }
    else{
        alert("page not available")
    }
}
}
key={item.id} className='flex items-center  hover:bg-purple-200 hover:text-primary px-2 py-2 rounded-lg  gap-x-4 text-lg cursor-pointer mx-2 transition-all ease-in-out duration-300'>
    <span><IconPlaceholder style=''/></span>
    <span>{item.title}</span>
</button>
    })}
</section>

<footer className='flex items-center gap-x-2 mx-4 my-2 border-t border-grayOne pt-2'>
    <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center font-semibold bg-[brown]'>
        A
    </div>
    <div className='text-sm'>
        <h1 className='font-semibold'>Adeseun</h1>
        <h1>aadebesta@gmail.com</h1>
    </div>
</footer>

    </div>
        </section>
  )
}

export default MenuBar 